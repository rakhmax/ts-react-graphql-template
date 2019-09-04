import { Button, CircularProgress } from '@material-ui/core'
import React, { FC } from 'react'
import Props from './propTypes'
import useStyles from './styles'

const ButtonProgress: FC<Props> = ({ children, loading, circularProgress, ...buttonProps }) => {
  const classes = useStyles()

  return (
    <Button
      style={{ position: 'relative' }}
      disabled={loading}
      {...buttonProps}
    >
      {children}
      {loading && <CircularProgress className={classes.buttonProgress} {...circularProgress} />}
    </Button>
  )
}

export default ButtonProgress
