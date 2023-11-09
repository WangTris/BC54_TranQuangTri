import { combineReducers } from "redux";
import { shoeReducer } from "./shoe";

export let rootReducer = combineReducers({
  shoeReducer: shoeReducer,
});
