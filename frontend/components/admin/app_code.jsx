import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

const codeMirrorOptions = {
  lineNumbers: true,
  mode: "javascript",
  theme: "monokai",
  readOnly: true
};

export default ({ code }) => {
  if (code) {
    return (
      <div className="app-code-container">
        <h5>Application Code:</h5>
        <CodeMirror value={code} options={codeMirrorOptions} />
      </div>
    );
  } else {
    return <h5>Applicant hasn't submitted a coding challenge yet</h5>;
  }
};
