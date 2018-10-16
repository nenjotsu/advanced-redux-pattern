import { applyMiddleware, createStore, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import combinedReducers from "./reducers";
import combinedEpics from "./actions";
import { loadState } from "../helpers";
import multiDispatch from "./middleware/multi-dispatch";
import sampleModule from "./middleware/sample-module";
import error from "./middleware/error";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const stateFromLocalStorage = loadState();

const epicMiddleware = createEpicMiddleware(combinedEpics);

const store = createStore(
  combinedReducers,
  stateFromLocalStorage,
  composeEnhancers(
    applyMiddleware(epicMiddleware, multiDispatch, ...sampleModule, ...error)
  )
);

export default store;
