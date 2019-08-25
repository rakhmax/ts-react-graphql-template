import { DialogProps } from '@material-ui/core/Dialog';
import { DialogActionsProps } from '@material-ui/core/DialogActions';
import { DialogContentProps } from '@material-ui/core/DialogContent';
import { DialogContentTextProps } from '@material-ui/core/DialogContentText';
import { DialogTitleProps } from '@material-ui/core/DialogTitle';

export default interface AlertProps extends DialogProps {
  text: string,
  title: string,
  dialogActions?: DialogActionsProps,
  dialogContent?: DialogContentProps,
  dialogContentText?: DialogContentTextProps,
  dialogTitle?: DialogTitleProps,
}