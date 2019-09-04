import { useMutation } from '@apollo/react-hooks'
import { Button, Typography } from '@material-ui/core'
import { Alert, ButtonProgress, Form } from 'components'
import AuthContext from 'context/auth'
import { navigate } from 'hookrouter'
import { initFormState } from 'middleware'
import React, { FC, Fragment, useContext, useState } from 'react'
import { mutations } from './graphql'
import useStyles from './styles'

const FormLogin: FC = () => {
  const fields = {
    username: { type: 'text', required: true },
    password: { type: 'password', required: true },
  }

  const { login } = useContext(AuthContext)

  const [loginUser, { loading }] = useMutation(mutations.LOGIN_USER)

  const [form, setValues] = useState(initFormState(fields))
  const [open, setOpen] = useState(false)
  const [dialogText, setDialogText] = useState('')

  const classes = useStyles()

  const updateField = (e: any) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const signIn = async (e: any) => {
    e.preventDefault()
    try {
      const { data: { authUser } } = await loginUser({ variables: { input: form } })
      login(authUser.userId, authUser.token)
      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)
    } catch (error) {
      setOpen(true)
      setDialogText(error.message)
    }
  }

  return (
    <Fragment>
      <Form
        changeHandler={updateField}
        fields={fields}
        header={<Typography noWrap variant="h5">Sign in</Typography>}
        loading={loading}
        submitHandler={signIn}
      >
        <ButtonProgress
          circularProgress={{ size: 24, color: 'primary' }}
          className={classes.buttonProgress}
          color="primary"
          loading={loading}
          type="submit"
          variant="contained"
        >
          <span>Log in</span>
        </ButtonProgress>
      </Form>
      <Alert title="Error" text={dialogText} open={open} onClose={() => setOpen(false)}>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Alert>
    </Fragment>
  )
}

export default FormLogin
