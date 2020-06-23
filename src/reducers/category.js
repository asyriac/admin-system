import { ADD_CATEGORY, GET_CATEGORIES, EDIT_CATEGORY, CANCEL_EDIT_CATEGORY, SAVE_EDIT_CATEGORY, DELETE_CATEGORY } from "../actions/actionTypes";

const initialState = {
  categoryList: [],
  editableCategoryNumber: null,
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categoryList: [...state.categoryList, action.payload],
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categoryList: action.payload,
      };
    case EDIT_CATEGORY:
      return {
        ...state,
        editableCategoryNumber: action.payload,
      };
    case CANCEL_EDIT_CATEGORY:
      return {
        ...state,
        editableCategoryNumber: null,
      };
    case SAVE_EDIT_CATEGORY:
      return {
        ...state,
        editableCategoryNumber: action.payload.editableCategoryNumber,
        categoryList: state.categoryList.map((category) => {
          if (category.id === action.payload.id) {
            return {
              ...action.payload.data,
              id: category.id,
            };
          }
          return category;
        }),
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categoryList: state.categoryList.filter((category) => category.id !== action.payload),
      };
    default:
      return state;
  }
}
