import { call, put, takeEvery } from 'redux-saga/effects'

const adminReservationChangeFetch = async ({ id, clientName, clientNumber, master, service, date, time }) => {
  console.log('dsvdsvdsvfsadfhfsdh', id, clientName, clientNumber, master, service, date, time);
  const response = await fetch(`/adminchangereservation`, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      id,
      clientName,
      clientNumber,
      master,
      service,
      date,
      time,
    })
  })

  const reservations = await response.json();
  return reservations;
}

function* fetchAdminReservationChange(action) {
  const reservations = yield call(adminReservationChangeFetch, {
    id: action.payload.id,
    clientName: action.payload.clientName,
    clientNumber: action.payload.clientNumber,
    master: action.payload.master,
    service: action.payload.service,
    date: action.payload.date,
    time: action.payload.time,

  });
  yield put({ type: "INIT_RESERVATIONS", payload: reservations });
}


export function* adminReservationChangeWatcher() {

  yield takeEvery("CHANGE_RESERVATION_FORM", fetchAdminReservationChange);
}
