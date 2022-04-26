import * as ActionTypes from './actionTypes';


const initialState = {
    user: "a", 
    userInterests: [],
    selectedSources: [], 
    keywords: [], 
    synonyms: [] 
}

export function mainReducer (state = initialState, action: any){
    switch (action.type) {
      case ActionTypes.SELECT_USER:
        return {
            ...state,
            user: action.payload
        };
        case ActionTypes.UPDATE_USER_INTERESTS:
          return {
              ...state,
              userInterests: action.payload
          };
        case ActionTypes.UPDATE_SELECTED_SOURCES:
            return {
                ...state,
                selectedSources: [...state.selectedSources, action.payload]
            }
        case ActionTypes.UPDATE_KEYWORDS_SYNONYMS:
            return {
                ...state,
                keywords: action.payload
            };
      default:
        return state;
    }
  };