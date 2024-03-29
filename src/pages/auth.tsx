import { Box, Grid, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { FormLogin, FormRegister } from 'components'
import React, { FC, useState } from 'react'

const useStyles = makeStyles({
  grid: { justifyContent: 'center', alignItems: 'center', height: '100vh' },
  link: { cursor: 'pointer' },
  typography: { marginTop: '1rem' },
})

const AuthPage: FC = () => {
  const [isLogin, setIsLogin] = useState(true)
  const classes = useStyles()

  return (
    <Grid className={classes.grid} container>
      <Box boxShadow={10} p={4} width={450}>
        {isLogin ? <FormLogin/> : <FormRegister/>}
        <Typography className={classes.typography} noWrap variant="subtitle2">
          {!isLogin ? 'Already have an account? ' : 'Don\'t have an account? '}
          <Link className={classes.link} onClick={() => setIsLogin(!isLogin)}>
            {!isLogin ? 'Sign in' : 'Sign up'}
          </Link>
        </Typography>
      </Box>
    </Grid>
  )
}

export default AuthPage
