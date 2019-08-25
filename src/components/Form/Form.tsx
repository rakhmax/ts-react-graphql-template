import React, { FC } from 'react';
import { FormControl, FormGroup, TextField } from '@material-ui/core';
import useStyles from './styles';
import Props from './propTypes';

const Form: FC<Props> = ({ children, fields, header, loading, submitHandler, changeHandler }) => {
  const classes = useStyles();

  const initialState: any = {};

  for (let key in fields) {
    initialState[key] = null;
  }

  let fieldsArray: [string, any][] = Object.entries(fields);

  return (
    <form onSubmit={ submitHandler }>
      { header }
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