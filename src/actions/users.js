import axios from "axios";
import { ADD_USER, GET_USERS, EDIT_USER, CANCEL_EDIT, SAVE_EDIT, DELETE_USER } from "./actionTypes";

export function getUsers() {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:4000/users");
    dispatch({
      type: GET_USERS,
      payload: data,
    });
  };
}

export function addUser(name, email) {
  return async function (dispatch) {
    const date = new Date().toLocaleDateString().toString();
    const { data } = await axios.post("http://localhost:4000/users/", { name, email, date });
    dispatch({
      type: ADD_USER,
      payload: data,
    });
  };
}

export function editUser(userID) {
  return {
    type: EDIT_USER,
    payload: userID,
  };
}

export function cancelEdit() {
  return {
    type: CANCEL_EDIT,
  };
}

export function saveEdit(id, name, email, date) {
  return async function (dispatch) {
    await axios.put(`http://localhost:4000/users/${id}`, { name, email, date });
    dispatch({
      type: SAVE_EDIT,
      payload: {
        editableUserNumber: null,
        id,
        data: {
          name,
          email,
          date,
        },
      },
    });
  };
}

export function deleteUser(userID) {
  return async function (dispatch) {
    await axios.delete(`http://localhost:4000/users/${userID}`);
    dispatch({
      type: DELETE_USER,
      payload: userID,
    });
  };
}
