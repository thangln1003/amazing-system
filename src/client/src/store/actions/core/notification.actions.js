export const SHOW_NOTIFICATION = '[MESSAGE] SHOW NOTIFICATION';
export const HIDE_NOTIFICATION = '[MESSAGE] HIDE NOTIFICATION';

export const showNotification = (notification) => {
  return {
    type: SHOW_NOTIFICATION,
    notification,
  };
};

export const hideNotification = (options) => {
  return {
    type: HIDE_NOTIFICATION,
    options,
  };
};

