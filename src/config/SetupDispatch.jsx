import React, { useReducer } from "react";
import { StateContext, DispatchContext } from "../context/context";
import { AppContextReducer } from "../context/reducers/appContextReducer";
import Setup from "./Setup";

const SetupDispatch = props => {
  const [appContextState, appContectDispatch] = useReducer(AppContextReducer, {
    sourceData: {},
    authuser: {}
  });
  return (
    <DispatchContext.Provider value={appContectDispatch}>
      <StateContext.Provider value={appContextState}>
        <Setup />
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};
export default SetupDispatch;
