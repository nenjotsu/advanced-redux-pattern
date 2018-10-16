import { getAjaxRequestEpic } from "../../actions/api";
import {
  getSampleModule,
  getSampleModuleSuccess
} from "../../actions/sample-module";

import * as TYPE from "../../actions/sample-module/types";
import { url } from "../../../helpers";
import { showSpinner, hideSpinner } from "../../actions/ui";

const getSampleModuleFlow = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === TYPE.GET_SAMPLE_MODULE_EPIC) {
    dispatch([
      showSpinner(),
      getAjaxRequestEpic({
        url: url.posts,
        body: null,
        onCancel: TYPE.GET_SAMPLE_MODULE_CANCEL,
        onSuccess: getSampleModuleSuccess
      })
    ]);
  }
};

const getSampleModuleSuccessFlow = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === TYPE.GET_SAMPLE_MODULE_SUCCESS) {
    dispatch([getSampleModule(action.payload), hideSpinner()]);
  }
};

const getSampleModuleSuccessCancelFlow = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === TYPE.GET_SAMPLE_MODULE_CANCEL) {
    dispatch(hideSpinner());
  }
};

export default [
  getSampleModuleFlow,
  getSampleModuleSuccessFlow,
  getSampleModuleSuccessCancelFlow
];
