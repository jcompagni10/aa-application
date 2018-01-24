import { connect } from "react-redux";
import ApplicationSuccess from "./application_success";

const mapStateToProps = state => {
  let currentAppId = state.applications.currentApplication;
  let application = state.applications.allApps[currentAppId];
  return { application };
};

export default connect(mapStateToProps, null)(ApplicationSuccess);
