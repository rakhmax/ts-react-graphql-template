import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Home as HomeIcon } from '@material-ui/icons'
import { navigate } from 'hookrouter'
import React, { FC } from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  button: { marginTop: theme.spacing(5) },
  grid: { height: '100vh' },
  homeIcon: { marginRight: theme.spacing(1) },
}))

const NotFoundPage: FC = () => {
  const classes = useStyles()

  return (
    <Grid
      alignItems="center"
      className={classes.grid}
      component="main"
      container
      direction="column"
      justify="center"
    >
      <Typography variant="h2">Page not found</Typography>
      <Button
        className={classes.button}
        color="primary"
        onClick={() => navigate('/')}
        size="large"
        variant="outlined"
      >
        <HomeIcon className={classes.homeIcon} />
        <span>Go to homepage</span>
      </Button>
    </Grid>
  )
}

export default NotFoundPage
