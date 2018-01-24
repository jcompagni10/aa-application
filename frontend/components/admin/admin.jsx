import React from "react";
import ApplicationIndex from "./application_index";
import ApplicationPane from "./application_pane";
import { Route } from "react-router-dom";
export default ({
  applications,
  currentApplication,
  fetchApplications,
  fetchApplication,
  approveApplication,
  denyApplication
}) => (
  <div className="admin-area">
    <h2> Admin Area</h2>
    <ApplicationIndex
      applications={applications}
      fetchApplications={fetchApplications}
    />
    <Route
      path="/admin/:application_id"
      render={({ match }) => (
        <ApplicationPane
          match={match}
          currentApplication={currentApplication}
          approveApplication={approveApplication}
          denyApplication={denyApplication}
          fetchApplication={fetchApplication}
        />
      )}
    />
  </div>
);
