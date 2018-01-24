import React from 'react';
import {Link} from 'react-router-dom';

export default ({application}) => (
  <div className = "success-wrapper">
    <h3>
      Great Job, {application.first_name}! Your application has been submited
    </h3>
    <h4>
      Instructions for continuing with the next portion of the application
      proccess have been sent to <i>{application.email}.</i>
    </h4>
    <br/>
    <p>
      Or take the coding challenge now by going&nbsp;
      <Link to = {"/coding_challenge/" + application.challenge_url}>
        here
      </Link>
    </p>
  </div>
);