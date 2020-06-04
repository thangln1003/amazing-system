import axios from 'axios';
import * as Actions from './../core';

export const FETCH_ROLES = '[GUS] FETCH ROLES';
export const GET_ROLE = '[GUS] GET ROLE';
export const CREATE_ROLE = '[GUS] CREATE ROLE';
export const UPDATE_ROLE = '[GUS] UPDATE ROLE';
export const DELETE_ROLE = '[GUS] DELETE ROLE';
export const LOADING_ROLE = '[GUS] LOADING ROLE';

export const fetchRoles = (data) => async (dispatch) => {
  const response = await axios.get(`/api/roles`);

  dispatch({
    type: FETCH_ROLES,
    payload: response.data,
  });
};

export const getRole = (name) => async (dispatch) => {
  const response = await axios.get(`/api/roles/${name}`);

  dispatch({
    type: GET_ROLE,
    payload: response.data.result,
  });
};

export const createRole = (data) => async (dispatch) => {
  const response = await axios.post(`/api/roles`, data);

  dispatch(
    Actions.showNotification({
      message: 'Role is created successfully!',
      variant: 'success',
    })
  );

  dispatch({
    type: CREATE_ROLE,
    payload: response.data.role,
  });
};

export const updateRole = (data) => async (dispatch) => {
  const { id } = data;
  const response = await axios.put(`/api/roles/${id}`, data);

  dispatch(
    Actions.showNotification({
      message: 'Role is updated successfully!',
      variant: 'success',
    })
  );

  dispatch({
    type: UPDATE_ROLE,
    payload: response.data.role,
  });
};

export const removeRole = (roleId) => async (dispatch, getState) => {
  await axios.delete(`/api/roles/${roleId}`);

  Promise.all([
    dispatch(
      Actions.showNotification({
        message: 'Role is deleted successfully!',
        variant: 'success',
      })
    ),
    dispatch({ type: DELETE_ROLE }),
  ]).then(() => dispatch(fetchRoles()));
};

export const isLoading = (loading) => (dispatch) => {
  return dispatch({
    type: LOADING_ROLE,
    payload: loading,
  });
};
