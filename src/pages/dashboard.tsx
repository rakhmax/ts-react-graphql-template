import React, { FC, useContext } from 'react';
import AuthContext from 'context/auth';

const DashboardPage: FC = () => {
  const context = useContext(AuthContext);

  return (
    <main>
      <h1>Welcome, { context.userId }</h1>
    </main>
  )
}

export default DashboardPage;