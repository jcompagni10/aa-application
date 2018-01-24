import {
  RECEIVE_APPLICATION,
  RECEIVE_APPLICATIONS
} from "../actions/application";

let defaultState = {
  currentApplication: null,
  allApps: {}
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_APPLICATION:
      let newState = Object.assign({}, state);
      let appId = action.application.id;
      newState.currentApplication = appId;
      newState.allApps[appId] = action.application;
      return newState;
    case RECEIVE_APPLICATIONS:
      const allApps = action.applications;
      return Object.assign({}, state, { allApps });
    default:
      return state;
  }
};
