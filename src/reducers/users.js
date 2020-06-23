import { ADD_USER, GET_USERS, EDIT_USER, CANCEL_EDIT, SAVE_EDIT, DELETE_USER } from "../actions/actionTypes";

const initialState = {
  usersList: [],
  editableUserNumber: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };

    case GET_USERS:
      return {
        ...state,
        usersList: action.payload,
      };

    case EDIT_USER:
      return {
        ...state,
        editableUserNumber: action.payload,
      };
    case CANCEL_EDIT:
      return {
        ...state,
        editableUserNumber: null,
      };
    case SAVE_EDIT:
      return {
        ...state,
        editableUserNumber: action.payload.editableUserNumber,
        usersList: state.usersList.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...action.payload.data,
              id: user.id,
            };
          }
          return user;
        }),
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
}
