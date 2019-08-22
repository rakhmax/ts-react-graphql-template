import { createContext } from 'react';

export default createContext({
  updateForm: (form: object): void => {}
})