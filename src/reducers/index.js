import { combineReducers } from "redux";
import authorReducer from "./authorReducer";
import postReducer from "./postReducer";

export default combineReducers({posts: postReducer, users: authorReducer});