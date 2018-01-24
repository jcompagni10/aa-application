import { connect } from "react-redux";
import Admin from "./admin";
import {
  fetchApplications,
  fetchApplication,
  approveApplication,
  denyApplication
} from "../../actions/application";

const mapStateToProps = state => {
  let currentAppId = state.applications.currentApplication;
  let currentApplication = state.applications.allApps[currentAppId];
  return {
    applications: state.applications.allApps,
    currentApplication
  };
};

const mapDispatchToProps = dispatch => ({
  fetchApplications: () => dispatch(fetchApplications()),
  fetchApplication: id => dispatch(fetchApplication(id)),
  approveApplication: id => dispatch(approveApplication(id)),
  denyApplication: id => dispatch(denyApplication(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
