import React from 'react';

export default ({application, approveApp, denyApp}) => {
  if (application.code && application.status === "PENDING") {
    let appId = application.id;
    return (
      <div className="appButtons">
        <button
          className="btn btn-success"
          onClick={() => approveApp(appId)}
        >
          Approve
        </button>
        <button
          className="btn btn-danger"
          onClick={() => denyApp(appId)}
        >
          Deny
        </button>
      </div>
    );
  } else{
    return null;
  }
};
