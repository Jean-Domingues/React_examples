import { call, put, takeLatest } from "redux-saga/effects";
import { getData } from "../../utils/getJsonValue";

function* fetchUser() {
  const counterNewValue = yield call(getData);
  yield put({ type: "counter/async_increment", value: counterNewValue });
}

function* mySaga() {
  yield takeLatest("counter/async_request", fetchUser);
}

export default mySaga;
