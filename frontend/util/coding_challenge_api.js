export const patchCodingChallenge = (url, code) =>
  $.ajax({
    method: "PATCH",
    url: "/api/coding_challenges",
    data: { coding_challenge: { url, code } }
  });
