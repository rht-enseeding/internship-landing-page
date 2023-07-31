// import { takeLatest } from "redux-saga/effects";
// import { GET_ASSIGNMENTS } from "../constants/assignmentConstants";
// import { handleGetAssignment } from "./handlers/assignmentHandler";

// export function* watcherSaga() {
//   yield takeLatest(GET_ASSIGNMENTS, handleGetAssignment);
// }

import { all, fork } from "redux-saga/effects";
// import assignmentRequest from "./requests/assignmentRequest";
// import { userSaga } from "./requests/assignmentRequest";
import * as assignmentSagas from "./requests/assignmentSaga";
import * as projectSagas from "./requests/projectSaga";
import * as teacherSelectionSagas from "./requests/teacherSelectionSaga";

export default function* rootSaga() {
  // yield all([assignmentRequest()]);
  // yield all([
  //   fork(userSaga),
  //   fork(userSaga2)
  // ]);
  yield all(
    [
      ...Object.values(assignmentSagas),
      ...Object.values(projectSagas),
      ...Object.values(teacherSelectionSagas),
    ].map(fork)
  );
}
