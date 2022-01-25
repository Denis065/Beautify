import { call, put, takeEvery } from 'redux-saga/effects'

const sessionFetch = async () => {
  const response = await fetch(`/session`)
  const session = await response.json()
  return session
}

function* fetchSession() {
  const session = yield call(sessionFetch);
  yield put({ type: 'INIT_SESSION', payload: { session } });
}


export function* sessionWatcher() {
  yield takeEvery("SESSION_FETCH", fetchSession);

}
