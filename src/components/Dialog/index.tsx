import React from 'react';
import { Dialog, Fade, IconButton, DialogProps as MuiDialogProps, dialogClasses, BackdropProps } from '@mui/material'
import useThemeProps from '@mui/material/styles/useThemeProps'
import styled from '@mui/material/styles/styled'

import { CloseIcon } from '../icons'
import Typography from '../Typography'
import Box from '../Box'
import ConfirmFooter, { ConfirmFooterProps } from '../ConfirmFooter'

export const componentName: string = 'ADialog'

type SizeMap = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface HeaderProps {
  /** 标题 */
  title?: string;
  /** 是否显示dialog又上角“x” */
  isShowClose?: boolean;
  /** 传null则不显示， 传vnode则自定义底部内容， 不传则展示默认footer */
  header?: React.ReactNode | null;
  /** 关闭弹框事件 */
  onClose?: ConfirmFooterProps['onClose'];
}

export interface FooterProps extends ConfirmFooterProps {
  /** 传null则不显示， 传vnode则自定义底部内容， 不传则展示默认footer */
  footer?: React.ReactNode | null;
}

export interface DialogProps extends HeaderProps, FooterProps {
  /** 是否显示弹框 */
  open?: boolean;
  /** 弹框宽度 */
  width?: number;
  /** ref */
  ref?: React.Ref<HTMLDivElement>;
  /** 弹框尺寸 */
  size?: SizeMap;
  BackdropProps?: BackdropProps;
}

export interface DialogContainerProps {
  /** 弹框宽度 */
  width?: number;
  /** 是否显示header */
  isNullHeader: boolean;
  /** 是否显示footer */
  isNullFooter: boolean;
  /** 弹框大小 */
  size?: SizeMap
}

const DialogRoot: React.FC<MuiDialogProps> = styled(Dialog)({
  [`& .${dialogClasses.paper}`]: {
    maxWidth: 'none',
    maxHeight: 'none'
  }
})

const DialogContentRoot = styled(Box)({
  marginBottom: '16px'
})

const defaultSizes = {
  'xs': '360px',
  'sm': '588px',
  'md': '800px',
  'lg': '960px',
  'xl': '1280px'
}

const DialogContainer: React.FC<DialogContainerProps> = styled(Box)(({
  size,
  width,
  isNullHeader,
  isNullFooter,
}: DialogContainerProps) => {
  return {
    width: width || defaultSizes[(size as string)],
    paddingLeft: '24px',
    paddingRight: '16px',
    ...(isNullHeader && {
      paddingTop: '24px',
    }),
    ...(isNullFooter && {
      paddingBottom: '24px',
    }),
  }
})

const Header: React.FC<HeaderProps> = (props) => {
  const { title, isShowClose, header, onClose } = props

  if (header === null) return null
  
  if (typeof header === 'function') {
    return header(props)
  }

  if (!title && !isShowClose) return null

  const HeaderRow = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...(!title && {
      justifyContent: 'flex-end',
    }),
    height: '56px'
  })

  const Title = () => {
    if (!title) return null
    return (
      <div style={{ flex: 1, padding: '8px 0' }}>
        <Typography color='black' weight='medium'>
          {title}
        </Typography>
      </div>
    )
  }

  const CloseBtn = () => {
    if (!isShowClose) return null
    return (
      <IconButton
        onClick={onClose}
        style={{ padding: 0 }}>
        <CloseIcon />
      </IconButton>
    )
  }

  return (
    <HeaderRow >
      <Title />
      <CloseBtn />
    </HeaderRow>
  )
}

const Footer: React.FC<FooterProps> = (props) => {
  const {
    footer,
    ...confirmFooterProps
  } = props

  if (footer === null) return null

  if (typeof (footer) === 'function') {
    return (
      <React.Fragment>
        {footer(props)}
      </React.Fragment>
    )
  }

  return <ConfirmFooter  {...confirmFooterProps} />
}

const FbmDialog: React.FC<DialogProps> = React.forwardRef((inProps, ref) => {
  const {
    open,
    size,
    width,
    title,
    header,
    isShowClose,
    children,
    footer,
    okText,
    closeText,
    isCloseButton,
    closeProps,
    okProps,
    onClose,
    onOk,
    ...otherProps
  } = useThemeProps({ props: inProps, name: componentName })

  const isNullHeader = header === null
  const isNullFooter = footer === null

  return (
     // @ts-ignore
    <DialogRoot
      open={open}
      TransitionComponent={Fade}
      {...otherProps}
      onClose={onClose}
      ref={ref}
    >
      <DialogContainer
        width={width}
        size={size}
        isNullHeader={isNullHeader}
        isNullFooter={isNullFooter}
      >
        <Header
          title={title}
          header={header}
          isShowClose={isShowClose}
          onClose={onClose}
        />
        <DialogContentRoot>
          {children}
        </DialogContentRoot>
        <Footer
          footer={footer}
          okText={okText}
          closeText={closeText}
          isCloseButton={isCloseButton}
          closeProps={closeProps}
          okProps={okProps}
          onClose={onClose}
          onOk={onOk}
        />
      </DialogContainer>
    </DialogRoot>
  )
})

FbmDialog.defaultProps = {
  size: 'xs',
  isShowClose: false,
  isCloseButton: true,
  closeText: '取消',
  okText: '好的',
  closeProps: {
    variant: 'text',
    color: 'secondary',
  },
  okProps: {
    variant: 'contained',
  },
}
export default FbmDialog