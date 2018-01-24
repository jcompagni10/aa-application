import {
  RECEIVE_APPLICATION_ERRORS,
  RECEIVE_APPLICATION
} from "../actions/application";
import {RECEIVE_CHALLENGE_ERRORS} from '../actions/coding_challenge';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_APPLICATION_ERRORS:
      return Object.assign({}, {applicationErrors: action.errors});
    case RECEIVE_CHALLENGE_ERRORS:
      return Object.assign({}, {challengeErrors: action.errors});
    case RECEIVE_APPLICATION:
      return {};
    default:
      return state;
  }
};
