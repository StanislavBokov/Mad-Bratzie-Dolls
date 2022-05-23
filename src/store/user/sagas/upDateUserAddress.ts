/* eslint-disable @typescript-eslint/no-unused-vars */
import { takeLatest, put } from 'typed-redux-saga';
import actionTypes from '../actionTypes';
import { updateUserState } from '../reducer';

export function* upDateUserWorker() {

  try {
    const account =  yield window.ethereum.request({ method: 'eth_requestAccounts' });
    yield put(updateUserState({ address:account }));
      
  } catch (err) {
    console.error(err);
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.UPDATE_ADDRESS, upDateUserWorker);
}
