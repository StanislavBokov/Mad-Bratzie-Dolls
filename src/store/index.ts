
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './user/reducer';
import actionTypes from './user/actionTypes';
import watcher from './user/sagas/upDateUserAddress';
// import { upDateUserWorker } from './user/sagas/upDateUserAddress';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [actionTypes.UPDATE_ADDRESS]
    }
  }).concat(sagaMiddleware)
});
sagaMiddleware.run(watcher);

export default store;