import React, { FC } from 'react';
import { A } from 'hookrouter';
import { Button, Grid, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { Home as HomeIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  button: { marginTop: theme.spacing(5) },
  grid: { height: '100vh' },
  homeIcon: { marginRight: theme.spacing(1) }
}))

const NotFoundPage: FC = () => {
  const classes = useStyles();

  return(
    <Grid
      alignItems="center"
      className={ classes.grid }
      component="main"
      container
      direction="column"
      justify="center"
    >
      <Typography variant="h2">Page not found</Typography>
      <A href="/">
        <Button
          className={ classes.button }
          color="primary"
          size="large"
          variant="outlined"
        >
          <HomeIcon className={ classes.homeIcon }/>
          <span>Go to homepage</span>
        </Button>
      </A>
    </Grid>
  )
}

export default NotFoundPage;