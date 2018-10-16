import { createAction } from "redux-actions";
import * as TYPE from "./types";

export const getAjaxRequestEpic = createAction(TYPE.GET_AJAX_REQUEST_EPIC);
