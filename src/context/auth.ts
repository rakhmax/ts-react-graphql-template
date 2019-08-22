import { createContext } from 'react';

export default createContext({
  token: '',
  userId: '',
  login: (userId: string, token: string, tokenExpiration?: number): void => {},
  logout: (): void => {}
})