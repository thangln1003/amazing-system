export const OPEN_DIALOG = '[DIALOG] OPEN';
export const CLOSE_DIALOG = '[DIALOG] CLOSE';

export const openDialog = (options) => {
  return {
    type: OPEN_DIALOG,
    options,
  };
};

export const closeDialog = () => {
  return {
    type: CLOSE_DIALOG,
  };
};
