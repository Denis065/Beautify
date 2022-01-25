import { call, put, takeEvery } from 'redux-saga/effects'

const deleteMasterFetch = async ({ id }) => {
  const response = await fetch(`/deletemaster`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      id,
    })
  })
  const masters = await response.json()
  return masters
}

function* fetchDeleteMaster(action) {
  const masters = yield call(deleteMasterFetch, {
    id: action.payload.id,
  });
  yield put({ type: "INIT_ALL_MASTERS", payload: masters });
}

export function* deleteMasterWatcher() {

  yield takeEvery("DELETE_MASTER", fetchDeleteMaster);
}
