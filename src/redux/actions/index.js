import { combineEpics } from "redux-observable";

import API from "./api/epics";

const rootEpic = (action$, store) =>
  combineEpics(...API)(action$, store).catch((error, stream) => {
    console.error(error);
    return stream;
  });

export default rootEpic;
