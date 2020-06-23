import { combineReducers } from "redux";
import users from "./users";
import category from "./category";
export default combineReducers({
  users,
  category,
});
