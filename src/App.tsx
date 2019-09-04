import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Header } from 'components';
import AuthContext from 'context/auth';
import { useRoutes } from 'hookrouter';
import { NotFoundPage } from 'pages';
import React, { FC, useState } from 'react';
import { ApolloProvider } from 'react-apollo';
import { authRoutes, notAuthRoutes } from 'router';
import './style.css';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const token = localStorage.getItem('token');

const client = new ApolloClient({
  cache: new InMemoryCache(),
  headers: {
    authorization: token ? `Bearer ${token}` : '',
  },
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
});

const allowedRoutes = token ? authRoutes : notAuthRoutes;

const App: FC = () => {
  const routeResult = useRoutes(allowedRoutes);

  const savedUserId: any = localStorage.getItem('user_id') ? localStorage.getItem('user_id') : '';
  const savedToken: any = localStorage.getItem('token') ? localStorage.getItem('token') : '';

  const [userId, setUserId] = useState(savedUserId);
  const [token, setToken] = useState(savedToken);

  const login = (userId: string, token: string) => {
    localStorage.setItem('user_id', userId);
    localStorage.setItem('token', token);
    setUserId(userId);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    setUserId('');
    setToken('');
  };

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ token, userId, login, logout }}>
        <ThemeProvider theme={theme}>
          {routeResult && <Header/>}
          {routeResult || <NotFoundPage/>}
        </ThemeProvider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
};

export default App;
