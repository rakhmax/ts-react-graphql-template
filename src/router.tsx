import { Auth, Dashboard, Homepage } from 'pages'
import React from 'react'

const routes = {
  '/': () =>  <Homepage/>,
}

export const authRoutes = {
  ...routes,
  '/dashboard': () => <Dashboard/>,
}

export const notAuthRoutes = {
  ...routes,
  '/auth': () => <Auth/>,
}
