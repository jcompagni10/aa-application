import { connect } from "react-redux";
import Application from "./application";
import { createApplication } from "../../actions/application";

const mapStateToProps = state => ({
  application: state.application,
  errors: state.errors.applicationErrors
});

const mapDispatchToProps = dispatch => ({
  createApplication: application => dispatch(createApplication(application))
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
