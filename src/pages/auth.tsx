import React, { FC, useState } from 'react';
import { FormLogin, FormRegister } from 'components';
import { Box, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  grid: { justifyContent: 'center', alignItems: 'center', height: '100vh' },
  link: { cursor: 'pointer' },
  typography: { marginTop: '1rem' }
});

const AuthPage: FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const classes = useStyles();

  return (
    <Grid className={ classes.grid } container>
      <Box boxShadow={10} p={4} width={450}>
        { isLogin ? <FormLogin/> : <FormRegister/> }
        <Typography className={ classes.typography } noWrap variant="subtitle2">
          { !isLogin ? "Already" : "Don't" } have an account?
          <Link className={ classes.link } onClick={ () => setIsLogin(!isLogin) }> Sign { !isLogin ? "in" : "up" }</Link>
        </Typography>
      </Box>
    </Grid>
  )
}

export default AuthPage;