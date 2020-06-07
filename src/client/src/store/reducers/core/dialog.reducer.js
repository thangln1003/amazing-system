import * as Actions from '../../actions/core';

const initialState = {
  headerTitle: 'Delete Action',
  visible: false,
  confirmLoading: false,
  okDisabled: false,
  okText: 'Yes',
  okType: 'danger',
  cancelText: 'No',
  cancelDisabled: false,
  modalTitle: 'Are you sure want to delete this item?',
  modalContent: 'Some descriptions',
};

const dialog = (state = initialState, action) => {
  switch (action.type) {
    case Actions.OPEN_DIALOG: {
      return {
        ...state,
        visible: true,
        ...action.options,
      };
    }
    case Actions.CLOSE_DIALOG: {
      return {
        ...state,
        visible: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default dialog;
