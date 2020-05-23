import axios from 'axios';
import * as Actions from './../core';

export const FETCH_ROLES = '[GUS] FETCH ROLES';
export const CREATE_ROLE = '[GUS] CREATE ROLE';

export const fetchRoles = () => {
  const request = axios.get(`/api/roles`);

  return (dispatch) =>
    request.then((response) => {
      dispatch({
        type: FETCH_ROLES,
        payload: response.data,
      });
    });
};

export const createRole = (data) => {
  const request = axios.post(`/api/roles`, data);

  return (dispatch) =>
    request.then((response) => {
      dispatch(
        Actions.showNotification({
          message: 'Role is created successfully!',
          variant: 'success',
        })
      );

      return dispatch({
        type: CREATE_ROLE,
        payload: response.data.role,
      });
    });
};
