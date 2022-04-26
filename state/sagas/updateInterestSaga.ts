import { StrictEffect, takeLeading, call, put } from '@redux-saga/core/effects';
import { ERROR_MESSEGE, SAMPLE_USER_ID } from '../../static/constants';
import { KeywordType } from '../../static/types';
import { getUsersInterests, selectUser, updateKeywordsSynonyms, updateUserInterest, updateUserInterests } from '../actions';
import * as ActionTypes from '../actionTypes';
import { getKeywords, getSynonyms } from '../apis/resourceAPI';
import { postInterest, deleteInterest } from '../apis/userAPI';

export function* updateInterestsSaga() {
    yield takeLeading([ActionTypes.ADD_INTEREST, ActionTypes.REMOVE_INTEREST], updateInterests);
  }

  function* updateInterests(action: any): Generator<StrictEffect, any, any> {
    const requestBody = [{"id": action.payload.id}];
    let interestPosted;
    if(action.type===ActionTypes.ADD_INTEREST){
        interestPosted = yield call(postInterest,SAMPLE_USER_ID,requestBody);
    }
    else{
        interestPosted = yield call(deleteInterest,SAMPLE_USER_ID,requestBody);
    }
    if(interestPosted){
        yield put(getUsersInterests());
    }
  }
