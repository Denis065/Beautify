
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducers/rootReducer';
import { mySaga } from '../redux/sagas/sagas';
// import { myWatcher } from './sagas/saga'
import { portfolioWatcher } from './sagas/portfolioSaga'
import { portfolioCWatcher } from './sagas/portfolioCSaga'
import { adminAuthWatcher } from './sagas/adminAuthSaga';
import { adminReservationWatcher } from './sagas/adminReservationsSaga'
import { reservationCategories } from './sagas/reservationCategoriesSaga';
import { sessionWatcher } from './sagas/sessionSaga'
import { cabinetWatcher } from './sagas/cabinetSaga';
import { adminReservationChangeWatcher } from './sagas/adminReservationChangeSaga';
import { allMastersWatcher } from './sagas/allMastersSaga'
import { deleteMasterWatcher } from './sagas/adminDeleteMasterSaga';
import { deleteUserWatcher } from './sagas/deleteUserSaga'
import { adminChangePassWatcher } from './sagas/adminChangePassSaga';

const sagaMiddleware = createSagaMiddleware()

// sagaMiddleware.run(myWatcher)
// sagaMiddleware.run(portfolioWatcher)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(adminReservationWatcher)
sagaMiddleware.run(portfolioWatcher)
sagaMiddleware.run(mySaga)
sagaMiddleware.run(portfolioCWatcher)
sagaMiddleware.run(adminAuthWatcher)
sagaMiddleware.run(reservationCategories)
sagaMiddleware.run(sessionWatcher)
sagaMiddleware.run(cabinetWatcher)
sagaMiddleware.run(adminReservationChangeWatcher)
sagaMiddleware.run(deleteUserWatcher)
sagaMiddleware.run(allMastersWatcher)
sagaMiddleware.run(deleteMasterWatcher)
sagaMiddleware.run(adminChangePassWatcher);
