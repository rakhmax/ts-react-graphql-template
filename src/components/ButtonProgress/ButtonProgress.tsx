import React, { FC } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import useStyles from './styles';

interface ButtonProgressProps extends ButtonProps {
  circleColor?: any,
  circleSize?: number,
  loading: boolean
}

const ButtonProgress: FC<ButtonProgressProps> = ({ children, circleSize = 24, circleColor = '#000', loading, ...rest }) => {
  const classes = useStyles();

  return (
    <Button
      style={{ position: 'relative' }}
      disabled={ loading }
      { ...rest }
    >
      { children }
      { loading && <CircularProgress size={ circleSize } color={ circleColor } className={ classes.buttonProgress } /> }
    </Button>
  )
}

export default ButtonProgress;
