import React, { FC, useState } from 'react';
import { useRoutes } from 'hookrouter';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { authRoutes, notAuthRoutes } from 'router';
import { NotFoundPage } from 'pages';
import AuthContext from 'context/auth';
import { Header } from "components";

const token = localStorage.getItem('token');

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
  headers: {
    authorization: token ? `Bearer ${token}` : ''
  }
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
  }

  const logout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    setUserId('');
    setToken('');
  }

  return (
    <ApolloProvider client={ client }>
      <AuthContext.Provider value={ { token: token, userId: userId, login: login, logout: logout } }>
        <Header/>
        { routeResult || <NotFoundPage/> }
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
