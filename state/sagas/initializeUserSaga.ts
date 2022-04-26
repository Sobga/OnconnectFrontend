import { StrictEffect, takeLeading, call, put } from '@redux-saga/core/effects';
import { ERROR_MESSEGE, SAMPLE_USER_ID } from '../../static/constants';
import { selectUser } from '../actions';
import * as ActionTypes from '../actionTypes';
import { getUser } from '../apis/userAPI';

export function* initializeUserSaga() {
    yield takeLeading(ActionTypes.INITIALIZE_USER, initializeUser);
  }

  function* initializeUser(_: any): Generator<StrictEffect, any, any> {
    //sample user for demo
    const user = yield call(getUser,SAMPLE_USER_ID);
    if(user){
        yield put(selectUser(user));
    }
    else{
        console.log(ERROR_MESSEGE);
    }
  }