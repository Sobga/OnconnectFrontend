import { StrictEffect, takeLeading, call, put, all } from '@redux-saga/core/effects';
import { ERROR_MESSEGE, SAMPLE_USER_ID } from '../../static/constants';
import {  updateUsersSuggestions } from '../actions';
import * as ActionTypes from '../actionTypes';
import { getResourceById, getResourcesKeywords } from '../apis/resourceAPI';
import { getUsersSuggestions } from '../apis/userAPI';

export function* getUsersSuggestionsSaga() {
    yield takeLeading(ActionTypes.GET_USER_SUGGESTIONS, getUserSuggestions);
  }

  function* getUserSuggestions(_: any): Generator<StrictEffect, any, any> {
    const userSuggestionIDs = yield call(getUsersSuggestions,SAMPLE_USER_ID);
    console.log(userSuggestionIDs.length)
    if(userSuggestionIDs){
        yield all(
            userSuggestionIDs.map((suggestionObject: any) =>
              call(loadSingleSuggestion,suggestionObject)
            )
          );
    }
    else{
        console.log(ERROR_MESSEGE);
    }
  }

  function* loadSingleSuggestion(suggestionObject: any): Generator<StrictEffect, any, any>{
    const resourceID = suggestionObject?.ResourceID.id;
    const resource = yield call(getResourceById, resourceID);
    const resourceKeywords = yield call(getResourcesKeywords, resourceID);
    const resourceBody = {
        resource: resource,
        resourceKeywords: resourceKeywords
    }
    if(resource){
        yield put(updateUsersSuggestions(resourceBody));
    }
    else{
        console.log(ERROR_MESSEGE);
    }
  }