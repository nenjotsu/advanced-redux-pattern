import { createAction } from "redux-actions";
import * as TYPE from "./types";

export const showSpinner = createAction(TYPE.SHOW_SPINNER);
export const hideSpinner = createAction(TYPE.HIDE_SPINNER);
