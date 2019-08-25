import React, { FC, Fragment, useContext, useState } from 'react';
import { navigate } from 'hookrouter';
import { useMutation } from '@apollo/react-hooks';
import { Button, Checkbox, FormControlLabel, Typography } from '@material-ui/core';
import { Alert, ButtonProgress, Form } from 'components';
import AuthContext from 'context/auth';
import { mutations } from './graphql';
import useStyles from './styles';
import { initFormState } from 'middleware';

const FormRegister: FC = () => {
  const fields = {
    firstname: { type: 'text', required: true },
    lastname: { type: 'text', required: true },
    username: { type: 'text', required: true },
    email: { type: 'email', required: true },    
    password: { type: 'password', required: true }
  }

  const { login } = useContext(AuthContext);
  
  const [createUser, { loading }] = useMutation(mutations.CREATE_USER);

  const [form, setValues] = useState(initFormState(fields));
  const [isAgree, setIsAgree] = useState(false);
  const [open, setOpen] = useState(false);
  const [dialogText, setDialogText] = useState('');

  const classes = useStyles();

  const updateField = (e: any) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const signUp = async (e: any) => {
    e.preventDefault();
    try {
      const { data: { authUser } } = await createUser({ variables: { input: form } });
      login(authUser.userId, authUser.token);
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
        header={ <Typography noWrap variant="h5">Sign up</Typography> }
        loading={ loading }
        submitHandler={ signUp }
      >
        <FormControlLabel
          className={ classes.formControlLabel }
          control={ <Checkbox color="primary"/> }
          label="I agree to the Terms and conditions"
          labelPlacement="end"
          onChange={ () => setIsAgree(!isAgree) }
        />
        <ButtonProgress
          circularProgress={{ size: 24, color: 'primary' }}
          color="secondary"
          disabled={ !isAgree || loading }
          loading={ loading }
          type="submit"
          variant="contained"
        >Register</ButtonProgress>
      </Form>
      <Alert title="Error" text={ dialogText } open={ open } onClose={() => setOpen(false)}>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Alert>
    </Fragment>

  );
}

export default FormRegister;