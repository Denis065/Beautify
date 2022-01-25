import { call, put, takeEvery } from 'redux-saga/effects'

const allMastersFetch = async () => {
  const response = await fetch(`/allmasters`)
  const masters = await response.json()
  return masters
}

function* fetchAllMasters() {
  const masters = yield call(allMastersFetch)
  yield put({ type: 'INIT_ALL_MASTERS', payload: masters })
}

export function* allMastersWatcher() {
  yield takeEvery("ALL_MASTERS_FETCH", fetchAllMasters);
}
