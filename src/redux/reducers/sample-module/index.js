import { handleActions } from "redux-actions";
import * as ACTION from "../../actions/sample-module";
import model from "./model";

export default handleActions(
  {
    [ACTION.getsampleModule]: (state, action) => {
      console.log(action);
      return {
        ...state,
        sampleModuleList: action.payload
      };
    }
  },
  model
);
