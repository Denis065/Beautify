import { call, put, takeEvery } from 'redux-saga/effects'

const deleteUserFetch = async ({ id }) => {
  const response = await fetch(`/deleteuser`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      id,
    })
  })
  const reservations = await response.json()
  return reservations
}

function* fetchdeleteUser(action) {
  const reservations = yield call(deleteUserFetch, {
    id: action.payload.id,
  });
  yield put({ type: "INIT_RESERVATIONS", payload: reservations });
}


export function* deleteUserWatcher() {

  yield takeEvery("DELETE_USER", fetchdeleteUser);
}
