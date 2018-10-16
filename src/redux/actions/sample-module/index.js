import { createAction } from "redux-actions";
import * as TYPE from "./types";

export const getSampleModuleEpic = createAction(TYPE.GET_SAMPLE_MODULE_EPIC);
export const getSampleModuleSuccess = createAction(
  TYPE.GET_SAMPLE_MODULE_SUCCESS
);
export const getSampleModuleCancel = createAction(
  TYPE.GET_SAMPLE_MODULE_CANCEL
);
export const getSampleModule = createAction(TYPE.GET_SAMPLE_MODULE);

export const clearData = createAction(TYPE.CLEAR_DATA);
