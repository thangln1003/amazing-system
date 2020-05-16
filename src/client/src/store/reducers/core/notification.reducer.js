import * as Actions from '../../actions/core';

const initialState = {
  isShow: false,
  notifications: [],
  options: {
    autoHide: true,
    delay: 10000,
    header: 'Notification',
    position: 'top-right',
    showHeader: true,
    variant: 'success',
  },
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SHOW_NOTIFICATION: {
      const notifications = [...state.notifications];
      notifications.push(action.notification.message);

      return {
        isShow: true,
        options: {
          ...initialState.options,
          ...action.notification.options,
        },
        notifications,
      };
    }
    case Actions.HIDE_NOTIFICATION: {
      let notifications = [...state.notifications];

      if (typeof action.options === 'undefined') {
        notifications = [];
      }

      return {
        ...state,
        isShow: null,
        notifications,
      };
    }
    default: {
      return state;
    }
  }
};

export default notification;
