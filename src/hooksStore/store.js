import { useState, useEffect } from 'react';
let globalState = {};
// listeners should be an arry full of functions which i called to update all component
//that are using my hook for that i will push setstate to it 
let listeners = [];
let actions = {};
// because the component which use this hook will be re ender because of usestate
//so the solution is value true false
export const useStore = (shouldListen = true) => {
  //here i need only second index the function because everx time a component using stateHook
  // will renender because whatever any state change the component will renender
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };
// this loop only to inform every listener for this new update
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    // this means every component using this hhok will have its function will be added to
    //listerners array
    if (shouldListen){
      listeners.push(setState);
    }
   

    return () => {
      if (shouldListen){
        listeners = listeners.filter(li => li !== setState);
      }
      
    };
  }, [setState , shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};