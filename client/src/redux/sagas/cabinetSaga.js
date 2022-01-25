import { call, put, takeEvery } from 'redux-saga/effects'

const CabinetFetch = async () => {
  // в ссылке может быть неправильный сервер
  const response = await fetch(`/profile`)
  const responseJson = await response.json()
  console.log(" 1 fetch 2", responseJson);
  return responseJson
}

function* fetchCabinet() {
  const reservation = yield call(CabinetFetch);
  yield put({ type: "INIT_CABINET", payload: reservation });
}


export function* cabinetWatcher() {
  yield takeEvery("CABINET_FETCH", fetchCabinet);
}
