import React from 'react';
import {Link} from 'react-router-dom';

export default ({application})=> {
  return (
  <li className = "application-index-item">
    <span className= "applicant-name">
      {application.first_name} {application.last_name}
    </span>
    <span className="applicant-status">
      {application.status} 
    </span>
    <span className = "applicant-view-link">
      <Link to = {"/admin/" + application.id} >
        View
      </Link>
    </span>
  </li>
  );
};