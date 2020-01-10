import { put, all, takeLatest } from "redux-saga/effects";

import { Creators, Types } from "../ducks/login";
import api from "../../services/api";

export function* getLoginSaga({ name }) {
  try {
    //const request = yield call(api.get, '/users');
    yield put(Creators.getSuccess({ user: { nome: "jholdy" } }));
  } catch (err) {
    console.tron.error(err);
    yield put(Creators.getFailure(err));
  }
}

export default function* LoginSagas() {
  yield all([takeLatest(Types.GET_REQUEST, getLoginSaga)]);
}
