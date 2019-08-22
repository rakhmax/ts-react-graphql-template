import React, { FC, useContext, useState, Fragment } from 'react';
import { navigate } from 'hookrouter';
import { useMutation } from '@apollo/react-hooks';
import { Button } from '@material-ui/core';
import { Alert, ButtonProgress, Form } from 'components';
import AuthContext from 'context/auth';
import { mutations } from './graphql';
import useStyles from './styles';

const FormLogin: FC = props => {
  const fields = {
    username: { type: 'text', required: true },
    password: { type: 'password', required: true }
  }

  const initialState: any = {};

  for (let key in fields) {
    initialState[key] = null;
  }

  const { login } = useContext(AuthContext);
  const [authUser, { loading }] = useMutation(mutations.AUTH_USER);
  const [form, setValues] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [dialogText, setDialogText] = useState('');
  const classes = useStyles();

  const updateField = (e: any) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const signIn = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await authUser({ variables: { input: form } });
      login(data.authUser.userId, data.authUser.token);
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } catch (error) {
      setOpen(true);
      setDialogText(error.message);
    }
  }

  return (
    <Fragment>
      <Form 
        changeHandler={ updateField }
        fields={ fields }
        header="Sign in"
        loading={ loading }
        submitHandler={ signIn }
      >
        <ButtonProgress
          circleColor="primary"
          className={ classes.buttonProgress }
          color="primary"
          loading={ loading }
          type="submit"
          variant="contained"
        >Log in</ButtonProgress>
      </Form>
      <Alert title="Error" text={ dialogText } open={open} onClose={() => setOpen(false)}>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Alert>
    </Fragment>
    
  )
}

export default FormLogin;