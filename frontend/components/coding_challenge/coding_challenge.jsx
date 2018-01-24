import React from 'react';
import {Controlled as CodeMirror} from "react-codemirror2";
import Errors from '../misc/errors';
import SuccessBanner from './success_banner';
require("codemirror/mode/javascript/javascript");
require("codemirror/addon/edit/matchbrackets.js");
require("codemirror/addon/edit/closebrackets.js");

export default class CodingChallenge extends React.Component{
  constructor(){
    super();
    this.state = {
      code: "",
      submitDisabled: false,
      submitSuccesful: false
    };
    this.codeMirrorOptions = {
      lineNumbers: true,
      mode: "javascript",
      theme: "monokai",
      extraKeys: {
        Tab: function(cm) {
          var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
          cm.replaceSelection(spaces);
        }
      },
      matchBrackets: true,
      autoCloseBrackets: true
    };
  }

  updateCode(_, _2, newCode) {
    this.setState({
      code: newCode
    });
  }

  handleSubmit(){
    this.setState({submitDisabled: true});
    this.props.submitCodingChallenge(this.state.code)
    .then(
      // show success banner on succesful submission
      ()=> this.setState({submitSuccesful: true}),
      // reenable submit button on failure
      ()=> this.setState({submitDisabled: false})
    );
  }

  render() {
    return (
       <div className = "coding-challenge-wrapper">
         <SuccessBanner visible = {this.state.submitSuccesful}/>
         <article>
           <h4>Instructions:</h4>
           <p>
             Write that given an input, student, determines if that student
            should be admited to admited to a bootcamp. 
           </p>
         </article>
         <Errors errors = {this.props.errors} />
          <CodeMirror
            value={this.state.code}
            onBeforeChange={this.updateCode.bind(this)}
            options={this.codeMirrorOptions}
          />
          <button className = "btn btn-primary" onClick = {this.handleSubmit.bind(this)} disabled = {this.state.submitDisabled} >
          Submit!
          </button>
       </div>
    );
  }
}