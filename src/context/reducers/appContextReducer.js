import {
    SOURCE_DATA,
  } from "../actions/appContextActions";
  
  const initialState: any = {
    sourceData: [],
    authuser: {},
    userLoggedInInfo: {},
    cartInfo: [],
  };
  
  export const AppContextReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SOURCE_DATA:
        return {
          ...state,
          sourceData: action.payload
        };
      default:
        return state;
    }
  };
  