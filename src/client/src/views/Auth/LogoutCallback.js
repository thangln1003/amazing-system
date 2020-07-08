import React from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

const LogoutCallback = () => (
  <AuthConsumer>
    {({ signoutRedirectCallback }) => {
      signoutRedirectCallback();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);

export default LogoutCallback;
