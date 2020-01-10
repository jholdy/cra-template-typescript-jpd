import { put, all, takeLatest, call } from "redux-saga/effects";

import { Creators, Types } from "../ducks/login";
import api from "../../services/api";
import ICreator from "../../interfaces/ICreator";
import IUser from "../../interfaces/IUser";

export function* getLoginSaga({ payload }: ICreator<{ user: IUser }>) {
  try {
    const request = yield call(api.get, "/users");
    yield put(Creators.getSuccess(request));
  } catch (err) {
    console.tron.error(err);
    yield put(Creators.getFailure(err));
  }
}

export default function* LoginSagas() {
  yield all([takeLatest(Types.GET_REQUEST, getLoginSaga)]);
}
