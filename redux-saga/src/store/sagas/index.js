import { call, put, takeLatest } from "redux-saga/effects";
import { getData } from "../../utils/getJsonValue";

function* fetchUser() { // TRATATIVA
  // pega o dado e retorna em uma nova action do redux
  const counterNewValue = yield call(getData); 
  yield put({ type: "counter/async_increment", value: counterNewValue });
}

function* mySaga() { // Função responsárvel por receber as actions e disparar as tratativas
  // vai pegar a nossa última chamada para a action, e dar uma tratativa
  yield takeLatest("counter/async_request", fetchUser);
}

export default mySaga;
