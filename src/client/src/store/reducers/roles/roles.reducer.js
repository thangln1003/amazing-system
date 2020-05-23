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
      };
    }
    default: {
      return state;
    }
  }
};

export default rolesReducer;
