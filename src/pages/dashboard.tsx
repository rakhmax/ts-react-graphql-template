import AuthContext from 'context/auth'
import React, { FC, useContext } from 'react'

const DashboardPage: FC = () => {
  const context = useContext(AuthContext)

  return (
    <main>
      <h1>Welcome, {context.userId}</h1>
    </main>
  )
}

export default DashboardPage
