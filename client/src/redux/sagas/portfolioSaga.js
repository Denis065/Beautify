import { call, put, takeEvery } from 'redux-saga/effects'

const portfolioFetch = async () => {

  // в ссылке может быть неправильный сервер
  const response = await fetch(`/portfolio`)
  const masters = await response.json()
  console.log(" 1 fetch 2", response);
  return masters
}

function* fetchPortfolio() {
  const portfolio = yield call(portfolioFetch);
  yield put({ type: "INIT_PORTFOLIO", payload: portfolio });
}


export function* portfolioWatcher() {
  yield takeEvery("PORTFOLIO_FETCH", fetchPortfolio);
}
