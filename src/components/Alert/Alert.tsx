import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import React, { FC } from 'react'
import Props from './propTypes'

// tslint:disable-next-line: max-line-length
const Alert: FC<Props> = ({ children, title, text, dialogActions, dialogContent, dialogContentText, dialogTitle, ...rest }) => {
  return (
    <Dialog {...rest}>
      <DialogTitle {...dialogTitle}>{title}</DialogTitle>
      <DialogContent {...dialogContent}>
        <DialogContentText {...dialogContentText}>{text}</DialogContentText>
      </DialogContent>
      <DialogActions {...dialogActions}>{children}</DialogActions>
    </Dialog>
  )
}

export default Alert
