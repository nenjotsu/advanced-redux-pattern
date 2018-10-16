import * as TYPE from "../../actions/error/types";

const onErrorApi = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === TYPE.ON_ERROR_API) {
    console.error("error", action.payload, dispatch);
  }
};

export default [onErrorApi];
