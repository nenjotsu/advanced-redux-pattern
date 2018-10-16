import { combineReducers } from "redux";
import sampleModule from "./sample-module";
import ui from "./ui";

export default combineReducers({
  ui,
  sampleModule
});
