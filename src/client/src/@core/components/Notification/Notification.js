import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'react-bootstrap';
import * as Actions from 'store/actions';

import styled from 'styled-components';
import CoreUtils from '@core/utils';

const ToastContainer = styled.div`
  position: relative:
  minHeight: 100px;
`;

const ToastStack = styled.div`
  position: absolute;
  z-index: 1;

  ${({ position }) =>
    (position === 'top-left' && `left: 0`) ||
    (position === 'top-right' && `right: 0;`) ||
    (position === 'bottom-left' && `bottom: 0; left: 0`) ||
    (position === 'bottom-right' && `bottom: 0; right: 0`)};
`;

const Notification = () => {
  const dispatch = useDispatch();
  const { isShow, notifications, options } = useSelector(({ core }) => core.notification);

  const notificationList = notifications.map((notification) => {
    return (
      <Toast
        key={CoreUtils.generateGUID()}
        show={isShow}
        onClose={(e) => dispatch(Actions.hideNotification(e))}
        autohide={options.autoHide}
        variant={options.variant}
      >
        {options.showHeader ? (
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">{options.header}</strong>
            <small>11 mins ago</small>
          </Toast.Header>
        ) : null}

        <Toast.Body>{notification}</Toast.Body>
      </Toast>
    );
  });

  return (
    <ToastContainer>
      <ToastStack position={options.position}>{notificationList}</ToastStack>
    </ToastContainer>
  );
};

export default React.memo(Notification);
