/* eslint-disable @typescript-eslint/no-unused-vars */
import { takeLatest, put } from 'typed-redux-saga';
import actionTypes from '../actionTypes';
import { updateUserState } from '../reducer';
import { CONTACT_ABI, CONTACT_ADDRESS } from '../../../config';
import Web3 from 'web3';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const abi:any = CONTACT_ABI;
export function* upDateUserWorker() {

  try {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    const accounts = yield web3.eth.requestAccounts();
    
    const contactList = yield new web3.eth.Contract(abi, CONTACT_ADDRESS);
    contactList.methods.count().call().then((data) => console.log(data));
    
    
    yield put(updateUserState({ address:accounts }));
    console.log(accounts[0]);
    
      
  } catch (err) {
    console.error(err);
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.UPDATE_ADDRESS, upDateUserWorker);
}
