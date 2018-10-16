import { handleActions } from "redux-actions";
import * as ACTION from "../../actions/sample-module";
import model from "./model";

export default handleActions(
  {
    [ACTION.getSampleModule]: (state, action) => {
      console.log("action.payload", action.payload);
      return {
        ...state,
        sampleModuleList: action.payload
      };
    },
    [ACTION.clearData]: (state, action) => ({
      ...state,
      sampleModuleList: []
    })
  },
  model
);
