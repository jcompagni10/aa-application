import { patchCodingChallenge } from "../util/coding_challenge_api";

export const RECEIVE_CHALLENGE_ERRORS = "RECEIVE_CHALLENGE_ERRORS";

const recieveChallengeErrors = errors => ({
  type: RECEIVE_CHALLENGE_ERRORS,
  errors
});

export const submitCodingChallenge = (url, code) => dispatch =>
  patchCodingChallenge(url, code).then(
    // no actions needed for succesful submission
    application => true,
    response => dispatch(recieveChallengeErrors(response.responseJSON.errors))
  );
