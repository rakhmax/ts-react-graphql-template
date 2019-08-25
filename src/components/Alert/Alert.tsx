import React, { FC } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Props from './propTypes';

const Alert: FC<Props> = ({ children, title, text, dialogActions, dialogContent, dialogContentText, dialogTitle, ...rest }) => {
  return (
    <Dialog { ...rest }>
      <DialogTitle { ...dialogTitle }>{ title }</DialogTitle>
      <DialogContent { ...dialogContent }>
        <DialogContentText { ...dialogContentText }>{ text }</DialogContentText>
      </DialogContent>
      <DialogActions { ...dialogActions }>{ children }</DialogActions>
    </Dialog>
  )
}

export default Alert;