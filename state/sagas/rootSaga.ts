import { all } from '@redux-saga/core/effects';
import { getKeywordsSynonymsSaga } from './getKeywordsSaga';
import { getUsersSuggestionsSaga } from './getSuggestionsSaga';
import { getUsersInterestsSaga } from './getUsersInterestsSaga';
import { initializeUserSaga } from './initializeUserSaga';
import { updateInterestsSaga } from './updateInterestSaga';

export default function* rootSaga(){
    yield all([initializeUserSaga(),
        getUsersInterestsSaga(),
        getUsersSuggestionsSaga(),
        getKeywordsSynonymsSaga(),
        updateInterestsSaga()]);
}