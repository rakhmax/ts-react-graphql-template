import React from 'react';
import { Auth, Homepage, Dashboard } from 'pages';

const routes = {
  '/': () => <Homepage />,
}

export const authRoutes = {
  ...routes,
  '/dashboard': () => <Dashboard />
}

export const notAuthRoutes = {
  ...routes,
  '/auth': () => <Auth />
}


