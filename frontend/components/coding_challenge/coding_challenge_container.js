import { connect } from "react-redux";
import CodingChallenge from "./coding_challenge";
import { submitCodingChallenge} from '../../actions/coding_challenge';

const mapStateToProps = state => ({
  errors: state.errors.challengeErrors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitCodingChallenge: code =>(
    dispatch(submitCodingChallenge(ownProps.match.params.challenge_url, code))
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(CodingChallenge);
