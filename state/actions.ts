import { UserType, ResourceType, KeywordType, UserInterestType } from '../static/types';
import * as ActionTypes from './actionTypes';

export const initializeUser = (
  ) => ({
    type: ActionTypes.INITIALIZE_USER
  });


export const selectUser = (
    user: UserType & any
) => ({
    type: ActionTypes.SELECT_USER,
    payload: user
});

export const getUsersInterests = () => ({
    type: ActionTypes.GET_USERS_INTERESTS
})

export const updateUserInterests = (
    userInterests: UserInterestType[] & any
) => ({
    type: ActionTypes.UPDATE_USER_INTERESTS,
    payload: userInterests
})

export const updateUserInterest = (
    userInterest: UserInterestType & any
) => ({
    type: ActionTypes.UPDATE_USER_INTEREST,
    payload: userInterest
})

export const getUsersSuggestions = () => ({
    type: ActionTypes.GET_USER_SUGGESTIONS
})

export const updateUsersSuggestions = (
    resource: ResourceType & any
) => ({
    type: ActionTypes.UPDATE_SELECTED_SOURCES,
    payload: resource
})

export const getKeywordsSynonyms = () => ({
    type: ActionTypes.GET_KEYWORDS_SYNONYMS
})

export const updateKeywordsSynonyms = (
    keywords: KeywordType[] & any
) => ({
    type: ActionTypes.UPDATE_KEYWORDS_SYNONYMS,
    payload: keywords
})

export const addInterest = (keyword: KeywordType & any) => ({
    type: ActionTypes.ADD_INTEREST,
    payload: keyword
})

export const removeInterest = (keyword: KeywordType & any) => ({
    type: ActionTypes.REMOVE_INTEREST,
    payload: keyword
})