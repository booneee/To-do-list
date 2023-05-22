import todoReducer from "./Todo";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
