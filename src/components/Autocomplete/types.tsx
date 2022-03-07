import {
  AutocompleteRenderInputParams,
  UseAutocompleteProps,
  ChipTypeMap,
  useAutocomplete,
} from '@mui/material'

import { FbmInputProps } from '../Input'

export interface AutocompleteRenderOptionState {
  inputValue: string;
  selected: boolean;
}

export interface FbmAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
  > extends React.FC<UseAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>> {
  options: T[];
  /**
  * Render the input.
  *
  * @param {object} params
  * @returns {ReactNode}
  */
  renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode;

  /**
  * If `true`, the component is disabled.
  * @default false
  */
  disabled?: boolean;

  size?: FbmInputProps['size'];

  /**
  * Render the option, use `getOptionLabel` by default.
  *
  * @param {object} props The props to apply on the li element.
  * @param {T} option The option to render.
  * @param {object} state The state of the component.
  * @returns {ReactNode}
  */
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: T,
    state: AutocompleteRenderOptionState,
  ) => React.ReactNode;

  getOptionLabel?: (option: T) => string;

  /**
  * Props applied to the Listbox element.
  */
  ListboxProps?: ReturnType<ReturnType<typeof useAutocomplete>['getListboxProps']>;
}