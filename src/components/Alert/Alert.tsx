import React, { FC } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { DialogProps } from '@material-ui/core/Dialog';

interface AlertProps extends DialogProps {
  text: string,
  title: string
}

const Alert: FC<AlertProps> = ({ children, title, text, ...rest }) => {
  return (
    <Dialog { ...rest } >
      <DialogTitle id="alert-dialog-title">{ title }</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          { text }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        { children }
      </DialogActions>
    </Dialog>
  )
}

export default Alert;