import axios from "axios";
import { ADD_CATEGORY, GET_CATEGORIES, EDIT_CATEGORY, CANCEL_EDIT_CATEGORY, SAVE_EDIT_CATEGORY, DELETE_CATEGORY } from "./actionTypes";

export function addCategory(name, subcategory) {
  return async function (dispatch) {
    const subcat = subcategory.split(" ");
    const { data } = await axios.post("http://localhost:4000/categories/", { name, subcat });
    dispatch({
      type: ADD_CATEGORY,
      payload: data,
    });
  };
}

export function getCategories() {
  return async function (dispatch) {
    const { data } = await axios.get("http://localhost:4000/categories");
    dispatch({
      type: GET_CATEGORIES,
      payload: data,
    });
  };
}

export function editCategory(categoryID) {
  return {
    type: EDIT_CATEGORY,
    payload: categoryID,
  };
}

export function cancelEdit() {
  return {
    type: CANCEL_EDIT_CATEGORY,
  };
}

export function saveEdit(id, name, subcategory) {
  return async function (dispatch) {
    const subcat = subcategory.split(" ");
    await axios.put(`http://localhost:4000/categories/${id}`, { name, subcat });
    dispatch({
      type: SAVE_EDIT_CATEGORY,
      payload: {
        editableCategoryNumber: null,
        id,
        data: {
          name,
          subcat,
        },
      },
    });
  };
}

export function deleteCategory(id) {
  return async function (dispatch) {
    await axios.delete(`http://localhost:4000/categories/${id}`);
    dispatch({
      type: DELETE_CATEGORY,
      payload: id,
    });
  };
}
