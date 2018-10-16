import qs from "query-string";
import { ajax } from "rxjs/observable/dom/ajax";
import * as TYPE from "./types";
import { showSpinner, hideSpinner } from "../ui";
import { onErrorApi } from "../error";
import { retryStrategy, headersJson } from "./helpers";
import "rxjs";

export const getAjaxRequestEpic = action$ =>
  action$.ofType(TYPE.GET_AJAX_REQUEST_EPIC).mergeMap(action => {
    const { url, onSuccess, onCancel, body } = action.payload;
    const inlineQuery = body === null ? "" : `?${qs.stringify(body)}`;
    return ajax
      .get(`${url}${inlineQuery}`, headersJson)
      .retryWhen(retryStrategy)
      .mergeMap(result => [onSuccess(result.response)])
      .catch(err => [onErrorApi(err), hideSpinner()])
      .startWith(showSpinner())
      .takeUntil(action$.ofType(onCancel));
  });

export const patchAjaxRequestEpic = action$ =>
  action$.ofType(TYPE.PATCH_AJAX_REQUEST_EPIC).mergeMap(action => {
    const { url, onSuccess, onCancel, body } = action.payload;
    return ajax
      .patch(url, body, headersJson)
      .retryWhen(retryStrategy)
      .mergeMap(result => [onSuccess(result.response)])
      .catch(err => [onErrorApi(err), hideSpinner()])
      .startWith(showSpinner())
      .takeUntil(action$.ofType(onCancel));
  });

export const postAjaxRequestEpic = action$ =>
  action$.ofType(TYPE.POST_AJAX_REQUEST_EPIC).mergeMap(action => {
    const { url, onSuccess, onCancel, body } = action.payload;
    return ajax
      .post(url, body, headersJson)
      .retryWhen(retryStrategy)
      .mergeMap(result => [onSuccess(result.response)])
      .catch(err => [onErrorApi(err), hideSpinner()])
      .startWith(showSpinner())
      .takeUntil(action$.ofType(onCancel));
  });

export const putAjaxRequestEpic = action$ =>
  action$.ofType(TYPE.PUT_AJAX_REQUEST_EPIC).mergeMap(action => {
    const { url, onSuccess, onCancel, body } = action.payload;
    return ajax
      .post(url, body, headersJson)
      .retryWhen(retryStrategy)
      .mergeMap(result => [onSuccess(result.response)])
      .catch(err => [onErrorApi(err), hideSpinner()])
      .startWith(showSpinner())
      .takeUntil(action$.ofType(onCancel));
  });
export const deleteAjaxRequestEpic = action$ =>
  action$.ofType(TYPE.PUT_AJAX_REQUEST_EPIC).mergeMap(action => {
    const { url, onSuccess, onCancel, body } = action.payload;
    return ajax
      .delete(`${url}?${qs.stringify(body)}`, headers)
      .retryWhen(retryStrategy)
      .mergeMap(result => [onSuccess(result.response)])
      .catch(err => [onErrorApi(err), hideSpinner()])
      .startWith(showSpinner())
      .takeUntil(action$.ofType(onCancel));
  });

export default [
  getAjaxRequestEpic,
  patchAjaxRequestEpic,
  postAjaxRequestEpic,
  putAjaxRequestEpic,
  deleteAjaxRequestEpic
];
