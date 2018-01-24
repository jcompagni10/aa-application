import React from "react";
import AppCode from "./app_code";
import AppButtons from './app_buttons';

export default class ApplicationPane extends React.Component {
  componentWillReceiveProps(newProps) {
    let appId = parseInt(newProps.match.params.application_id);
    if (
      !this.props.currentApplication ||
      appId !== this.props.currentApplication.id
    ) {
      this.props.fetchApplication(appId);
    }
  }

  componentWillMount() {
    let appId = parseInt(this.props.match.params.application_id);
    this.props.fetchApplication(appId);
  }

  render() {
    let application = this.props.currentApplication;
    if (!application) return null;
    return (
      <div className="full-applicant-info">
        <div className="applicant-info">
          <h5>Application Info:</h5>
          <ul>
            <li> <b>first name:</b> {application.first_name} </li>
            <li> <b>last name:</b> {application.last_name} </li>
            <li> <b>zip:</b> {application.zip} </li>
            <li> <b>email:</b> {application.email} </li>
            <li> <b>status:</b> {application.status} </li>
          </ul>
          <AppButtons
            application={application}
            approveApp={this.props.approveApplication}
            denyApp={this.props.denyApplication}
          />
        </div>
        <AppCode code={application.code} />
      </div>
    );
  }
}
