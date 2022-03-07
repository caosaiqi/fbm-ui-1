import React from 'react'
import {
  useAutocomplete,
  autocompleteClasses,
  Popper,
  styled,
  alpha,
  Paper,
} from '@mui/material'

import { FbmAutocompleteProps } from './types'
import Input from '../Input'
import Chip from '../Chip'

const AutocompletePopper = styled(Popper, {
  name: 'MuiAutocomplete',
  slot: 'Popper',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      { [`& .${autocompleteClasses.option}`]: styles.option },
      styles.popper,
    ];
  },
})(({ theme }) => ({
  zIndex: theme.zIndex.modal,
}));

const AutocompleteListbox = styled('div', {
  name: 'MuiAutocomplete',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    const { fullWidth, hasClearIcon, hasPopupIcon, inputFocused, size } = ownerState;

    return [
      { [`& .${autocompleteClasses.tag}`]: styles.tag },
      // { [`& .${autocompleteClasses.tag}`]: styles[`tagSize${capitalize(size)}`] },
      { [`& .${autocompleteClasses.inputRoot}`]: styles.inputRoot },
      { [`& .${autocompleteClasses.input}`]: styles.input },
      { [`& .${autocompleteClasses.input}`]: inputFocused && styles.inputFocused },
      styles.root,
      fullWidth && styles.fullWidth,
      hasPopupIcon && styles.hasPopupIcon,
      hasClearIcon && styles.hasClearIcon,
    ];
  },
})(({ theme }) => {
  return {
    listStyle: 'none',
    margin: 0,
    padding: '8px 0',
    maxHeight: '40vh',
    overflow: 'auto',
    [`& .${autocompleteClasses.option}`]: {
      minHeight: 48,
      display: 'flex',
      overflow: 'hidden',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: 6,
      boxSizing: 'border-box',
      outline: '0',
      WebkitTapHighlightColor: 'transparent',
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16,
      [theme.breakpoints.up('sm')]: {
        minHeight: 'auto',
      },
      [`&.${autocompleteClasses.focused}`]: {
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&[aria-disabled="true"]': {
        opacity: theme.palette.action.disabledOpacity,
        pointerEvents: 'none',
      },
      [`&.${autocompleteClasses.focusVisible}`]: {
        backgroundColor: theme.palette.action.focus,
      },
      '&[aria-selected="true"]': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        [`&.${autocompleteClasses.focused}`]: {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.action.selected,
          },
        },
        [`&.${autocompleteClasses.focusVisible}`]: {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity,
          ),
        },
      },
    },
  }
})

const DefaultInput = styled(Input)({
  flexWrap: 'wrap',
})

const AutocompletePaper = styled(Paper, {
  name: 'MuiAutocomplete',
  slot: 'Paper',
  overridesResolver: (props, styles) => styles.paper,
})(({ theme }) => ({
  ...theme.typography.body1,
  overflow: 'auto',
}));

function Autocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
  >
  (props: FbmAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>): React.ReactNode {
  const {
    renderInput,
    disabled,
    size = 'small',
    renderOption: renderOptionProp,
    getOptionLabel = (option) => option.label ?? option,
    ListboxProps,
    multiple,
    ChipProps,
    renderTags,
    limitTags = -1,
    getLimitTagsText = (more) => `+${more}`,
  } = props

  const {
    id,
    value,
    popupOpen,
    focused,
    focusedTag,
    anchorEl,
    inputValue,
    setAnchorEl,
    groupedOptions,
    getInputProps,
    getOptionProps,
    getListboxProps,
    getTagProps,
  } = useAutocomplete({ ...props, componentName: 'Autocomplete' })

  const ownerState = {
    inputFocused: focusedTag === -1,
  }

  console.log(ownerState)

  let startAdornment;
  if (multiple && Array.isArray(value) && value.length > 0) {
    const getCustomizedTagProps = (params) => ({
      disabled,
      ...getTagProps(params),
    });

    if (renderTags) {
      startAdornment = renderTags(value, getCustomizedTagProps);
    } else {
      startAdornment = value.map((option, index) => (
        <Chip
          label={getOptionLabel(option)}
          size={size}
          {...getCustomizedTagProps({ index })}
          {...ChipProps}
        />
      ));
    }
  }

  if (limitTags > -1 && Array.isArray(startAdornment)) {
    const more = startAdornment.length - limitTags;
    if (!focused && more > 0) {
      startAdornment = startAdornment.splice(0, limitTags);
      startAdornment.push(
        <span key={startAdornment.length}>
          {getLimitTagsText(more)}
        </span>,
      );
    }
  }

  const InputProps = {
    ref: setAnchorEl,
    className: '',
    startAdornment,
    endAdornment: ''
  }
  const inputProps = getInputProps()

  let AutocompleteInput = null
  if (typeof renderInput === 'function') {
    AutocompleteInput = renderInput({
      id,
      disabled,
      fullWidth: true,
      size: size === 'small' ? 'small' : undefined,
      InputLabelProps: undefined,
      InputProps,
      inputProps
    })
  } else {
    AutocompleteInput = (
      <DefaultInput
        {...InputProps}
        id={id}
        fullWidth={true}
        disabled={disabled}
        inputProps={inputProps}
        size={size === 'small' ? 'small' : undefined}
      />
    )
  }

  const defaultRenderOption = (props2, option) => <li {...props2}>{getOptionLabel(option)}</li>;
  const renderOption = renderOptionProp || defaultRenderOption;

  const renderListOption = (option, index) => {
    const optionProps = getOptionProps({ option, index });

    return renderOption({ ...optionProps, className: '' }, option, {
      selected: optionProps['aria-selected'],
      inputValue,
    });
  };

  return (
    <React.Fragment>
      {AutocompleteInput}
      {popupOpen && anchorEl ? (
        <AutocompletePopper
          open
          anchorEl={anchorEl}
        >
          <AutocompletePaper>
            {groupedOptions?.length > 0 ? (
              <AutocompleteListbox
                {...getListboxProps()}
                {...ListboxProps}
              >
                {
                  groupedOptions.map((option, index) => {
                    return renderListOption(option, index);
                  })
                }
              </AutocompleteListbox>
            ) : null
            }
          </AutocompletePaper>
        </AutocompletePopper>
      ) : null}
    </React.Fragment>
  )
}

export default Autocomplete
