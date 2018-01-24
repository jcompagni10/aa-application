import React from "react";
import ApplicationIndexItem from "./application_index_item";

export default class ApplicationIndex extends React.Component {
  componentDidMount() {
    this.props.fetchApplications();
  }

  render() {
    let applications = Object.values(this.props.applications);
    return (
      <div className="application-index-container">
        <h4>Applications </h4>
        <ul className="applications">
          {applications.map(application => (
            <ApplicationIndexItem
              key={application.id}
              application={application}
            />
          ))}
        </ul>
      </div>
    );
  }
}
