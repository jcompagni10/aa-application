import {
  postApplication,
  getApplications,
  getApplication,
  updateApplicationStatus
} from "../util/application_api";

export const RECEIVE_APPLICATION = "RECEIVE_APPLICATION";
export const RECEIVE_APPLICATION_ERRORS = "RECEIVE_APPLICATION_ERRORS";
export const RECEIVE_APPLICATIONS = "RECEIVE_APPLICATIONS";

const receiveApplication = application => ({
  type: RECEIVE_APPLICATION,
  application
});

const receiveApplications = applications => ({
  type: RECEIVE_APPLICATIONS,
  applications
});

const receiveApplicationErrors = errors => ({
  type: RECEIVE_APPLICATION_ERRORS,
  errors
});

export const createApplication = appData => dispatch =>
  postApplication(appData).then(
    application => dispatch(receiveApplication(application)),
    response => dispatch(receiveApplicationErrors(response.responseJSON.errors))
  );

export const fetchApplications = () => dispatch =>
  getApplications().then(
    applications => dispatch(receiveApplications(applications)),
    response => console.log("Error: " + response)
  );

export const fetchApplication = (id) => dispatch =>
  getApplication(id).then(
    application => dispatch(receiveApplication(application)),
    response => console.log("Error: " + response)
  );

export const approveApplication = (id) => dispatch =>
  updateApplicationStatus('APPROVED', id).then(
    application => dispatch(receiveApplication(application)),
    response => console.log("Error: " + response)
  );

export const denyApplication = (id) => dispatch =>
  updateApplicationStatus('DENIED', id).then(
    application => dispatch(receiveApplication(application)),
    response => console.log("Error: " + response)
  );
