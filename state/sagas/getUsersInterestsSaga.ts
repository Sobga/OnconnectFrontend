import { StrictEffect, takeLeading, call, put } from '@redux-saga/core/effects';
import { ERROR_MESSEGE, SAMPLE_USER_ID } from '../../static/constants';
import { selectUser, updateUserInterests } from '../actions';
import * as ActionTypes from '../actionTypes';
import { getUsersInterests } from '../apis/userAPI';

export function* getUsersInterestsSaga() {
    yield takeLeading(ActionTypes.GET_USERS_INTERESTS, getUserInterests);
  }

  function* getUserInterests(_: any): Generator<StrictEffect, any, any> {
    //sample user for demo
    const userInterests = yield call(getUsersInterests,SAMPLE_USER_ID);
    if(userInterests){
        yield put(updateUserInterests(userInterests));
    }
    else{
        console.log(ERROR_MESSEGE);
    }
  }