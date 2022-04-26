import { StrictEffect, takeLeading, call, put } from '@redux-saga/core/effects';
import { ERROR_MESSEGE, SAMPLE_USER_ID } from '../../static/constants';
import { selectUser, updateKeywordsSynonyms, updateUserInterests } from '../actions';
import * as ActionTypes from '../actionTypes';
import { getKeywords, getSynonyms } from '../apis/resourceAPI';

export function* getKeywordsSynonymsSaga() {
    yield takeLeading(ActionTypes.GET_KEYWORDS_SYNONYMS, getKeywordsSynonyms);
  }

  function* getKeywordsSynonyms(_: any): Generator<StrictEffect, any, any> {
    const keywords = yield call(getKeywords);
    //const synonyms = yield call(getSynonyms); do we ever need this?
    if(keywords){
        yield put(updateKeywordsSynonyms(keywords));
    }
    else{
        console.log(ERROR_MESSEGE)
    }
  }