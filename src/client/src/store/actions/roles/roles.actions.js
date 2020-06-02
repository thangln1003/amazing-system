import axios from 'axios';
import * as Actions from './../core';

export const FETCH_ROLES = '[GUS] FETCH ROLES';
export const GET_ROLE = '[GUS] GET ROLE';
export const CREATE_ROLE = '[GUS] CREATE ROLE';
export const UPDATE_ROLE = '[GUS] UPDATE ROLE';
export const DELETE_ROLE = '[GUS] DELETE ROLE';
export const LOADING_ROLE = '[GUS] LOADING ROLE';

export const fetchRoles = (data) => {
  const request = axios.get(`/api/roles`);

  return (dispatch) =>
    request.then((response) => {
      dispatch({
        type: FETCH_ROLES,
        payload: response.data,
      });
    });
};

export const getRole = (name) => {
  const request = axios.get(`/api/roles/${name}`);

  return (dispatch) =>
    request.then((response) =>
      dispatch({
        type: GET_ROLE,
        payload: response.data.result,
      })
    );
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

export const updateRole = (data) => {
  const { id } = data;
  const request = axios.put(`/api/roles/${id}`, data);

  return (dispatch) =>
    request.then((response) => {
      dispatch(
        Actions.showNotification({
          message: 'Role is updated successfully!',
          variant: 'success',
        })
      );

      return dispatch({
        type: UPDATE_ROLE,
        payload: response.data.role,
      });
    });
};

export const removeRole = (roleId) => {
  return (dispatch, getState) => {
    const request = axios.delete(`/api/roles/${roleId}`);

    return request.then((response) =>
      Promise.all([
        dispatch(
          Actions.showNotification({
            message: 'Role is deleted successfully!',
            variant: 'success',
          })
        ),
        dispatch({ type: DELETE_ROLE }),
      ]).then(() => dispatch(fetchRoles()))
    );
  };
};

export const isLoading = (loading) => {
  return (dispatch) => {
    return dispatch({
      type: LOADING_ROLE,
      payload: loading,
    });
  };
};
