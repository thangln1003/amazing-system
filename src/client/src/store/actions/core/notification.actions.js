export const HIDE_NOTIFICATION = '[MESSAGE] HIDE NOTIFICATION';
export const SHOW_NOTIFICATION = '[MESSAGE] SHOW NOTIFICATION';

export const hideNotification = () => {
  return {
    type: HIDE_NOTIFICATION,
  };
};

export const showNotification = (options) => {
  return {
    type: SHOW_NOTIFICATION,
    options,
  };
};
