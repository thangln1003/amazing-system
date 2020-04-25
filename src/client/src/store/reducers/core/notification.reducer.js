import * as Actions from '../../actions/core';

const initialState = {
  state: true,
  options: {
    autoHide: false,
    delay: 6000,
    message: 'Hello, world! This is a toast message.',
    header: 'Bootstrap',
    position: 'top-right',
    showHeader: false,
    variant: 'success',
  },
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SHOW_NOTIFICATION: {
      return {
        state: true,
        options: {
          ...initialState.options,
          ...action.options,
        },
      };
    }
    case Actions.HIDE_NOTIFICATION: {
      return {
        ...state,
        state: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default notification;
