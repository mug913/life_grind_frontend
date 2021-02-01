import React from 'react';

const BackButton = (props) => {

  return (
    
  <React.Fragment>
    <div >
        <button onClick={props.back}>Back</button>
    </div>
  </React.Fragment>
  )
};

export default BackButton;