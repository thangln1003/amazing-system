import * as React from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

const Logout = () => (
  <AuthConsumer>
    {({ logout }) => {
      logout();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);

export default Logout;
