import { all, fork } from "redux-saga/effects";
import login from "../sagas/login";

export default function* rootSaga() {
  yield all([fork(login)]);
}
