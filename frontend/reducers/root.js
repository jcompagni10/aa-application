import { combineReducers } from "redux";
import applications from './applications_reducer';
import errors from './errors_reducer';

export default combineReducers({
  applications,
  errors
});
