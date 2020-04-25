import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'react-bootstrap';
import * as Actions from 'store/actions';

import styled from 'styled-components';

const StyledToast = styled(Toast)`
  position: absolute;
  z-index: 1;
  ${({ position }) =>
    (position === 'top-left' && `top: 0; left: 0`) ||
    (position === 'top-right' && `top: 0; right: 0;`) ||
    (position === 'bottom-left' && `bottom: 0; left: 0`) ||
    (position === 'bottom-right' && `bottom: 0; right: 0`)};
`;

const Notification = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ core }) => core.notification.state);
  const options = useSelector(({ core }) => core.notification.options);

  return (
    <StyledToast
      show={state}
      onClose={() => dispatch(Actions.hideNotification())}
      autohide={options.autoHide}
      position={options.position}
      variant={options.variant}
    >
      {options.showHeader ? (
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">{options.Header}</strong>
          <small>11 mins ago</small>
        </Toast.Header>
      ) : null}

      <Toast.Body>{options.message}</Toast.Body>
    </StyledToast>
  );
};

export default React.memo(Notification);
