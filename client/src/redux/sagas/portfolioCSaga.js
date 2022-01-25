import { call, put, takeEvery } from 'redux-saga/effects'

const portfolioFetchC = async ({ masterId }) => {
  const response = await fetch(`/portfolio/${masterId}`)
  const masters = await response.json()

  return masters
}

function* fetchPortfolioC(action) {
  const services = yield call(portfolioFetchC, { masterId: action.payload.masterId });
  yield put({ type: 'INIT_MASTER_SERVICES', payload: { services, masterId: action.payload.masterId } });
}


export function* portfolioCWatcher() {

  yield takeEvery("PORTFOLIO_CARD_FETCH", fetchPortfolioC);

}
