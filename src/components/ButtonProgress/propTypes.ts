import { ButtonProps } from '@material-ui/core/Button';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';

export default interface ButtonProgressProps extends ButtonProps {
  loading: boolean,
  circularProgress?: CircularProgressProps
}