import React, { FC } from 'react';
import { FormControl, FormGroup, TextField, Typography } from '@material-ui/core';
import useStyles from './styles';

interface FormProps {
  buttonTitle?: string,
  fields: any,
  header?: string,
  loading: boolean,
  changeHandler?: (e: any) => any,
  submitHandler?: (e: any) => any
}

const Form: FC<FormProps> = ({ children, fields, header = '', loading, submitHandler, changeHandler }) => {
  const classes = useStyles();

  const initialState: any = {};

  for (let key in fields) {
    initialState[key] = null;
  }

  let fieldsArray: [string, any][] = Object.entries(fields);

  return (
    <form onSubmit={ submitHandler }>
      <Typography noWrap variant="h5">{ header }</Typography>
      <FormGroup className={ classes.formGroup }>
        { fieldsArray.map((field, index) => (
          <FormControl key={ index }>
            <TextField
              id={ field[0].toLowerCase() } 
              label={ field[0].replace(/^\w/, c => c.toUpperCase()) }
              name={ field[0].toLowerCase() } 
              type={ field[1].type } 
              onChange={ changeHandler }
              variant="outlined" 
              margin="normal"
              required={ field[1].required }
              disabled={ loading }
            />    
          </FormControl>
        )) }
        { children }
      </FormGroup>
    </form>
  )
}

export default Form;