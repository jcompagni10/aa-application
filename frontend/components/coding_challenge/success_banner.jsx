import React from 'react';

export default ({visible}) => {
  if (visible){
    return (
    <div className="success-banner alert alert-success">
      <h3>
        You Coding Challenge has been submited, we will get in touch with 
        you soon about next steps for the application process. 
      </h3>
    </div>
    );
  } else{
    return null;
  }
};