import * as Actions from '../../actions';

const initialState = {
  data: null,
  searchText: '',
  users: [],
  roleDialog: {
    type: 'remove',
    props: {
      open: false,
    },
    data: null,
  },
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ROLE: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case Actions.CREATE_ROLE: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case Actions.UPDATE_ROLE: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case Actions.DELETE_ROLE: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default roleReducer;
