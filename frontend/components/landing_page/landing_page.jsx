import React from 'react';
import {Link} from 'react-router-dom';

export default ()=>(
  <div>
    <h1> Welcome to App Academy</h1>
    <Link to ="/application" className = "btn btn-primary">
      Apply Now
    </Link>
    <Link to = "/admin" className = "btn btn-warning">
      Manage Applications
    </Link>
  </div>
);