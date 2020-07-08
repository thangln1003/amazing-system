import * as React from 'react';

import { AuthConsumer } from '../../providers/AuthProvider';

const Callback = () => (
  <AuthConsumer>
    {({ signinRedirectCallback }) => {
      signinRedirectCallback();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);

export default Callback;
