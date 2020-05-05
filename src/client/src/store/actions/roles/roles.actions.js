import axios from 'axios';

export const FETCH_ROLES = '[GUS] FETCH ROLES';

export const fetchRoles = () => {
  const request = axios.get(`/api/roles`);

  return (dispatch) => {
    request.then((response) =>
      dispatch({
        type: FETCH_ROLES,
        payload: response.data.roles,
      })
    );
  };
};
