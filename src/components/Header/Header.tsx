import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import AuthContext from 'context/auth'
import { navigate } from 'hookrouter'
import React, { FC, useContext } from 'react'
import useStyles from './styles'

const Header: FC = () => {
  const { token, logout } = useContext(AuthContext)
  const classes = useStyles()

  return (
    <AppBar>
      <Toolbar>
        <Typography
          noWrap
          variant="h5"
          onClick={() => navigate('/')}
          className={classes.typography}
        >
          React App
        </Typography>
        {!token && <Button color="inherit" onClick={() => navigate('/auth')}>Login</Button>}
        {token && <Button color="inherit" onClick={() => logout()}>Logout</Button>}
      </Toolbar>
    </AppBar>
  )
}

export default Header
