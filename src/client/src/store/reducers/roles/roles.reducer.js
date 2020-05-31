import * as Actions from '../../actions';

const initialState = {
  data: [],
  meta: {},
  loading: false,
};

const rolesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_ROLES: {
      return {
        ...state,
        data: action.payload.result,
        meta: action.payload.meta,
        loading: false,
      };
    }
    case Actions.LOADING_ROLE: {
      return {
        ...state,
        loading: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default rolesReducer;
