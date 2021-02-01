import React from 'react';

const ForwardButton = (props) => {

  return (
    
  <React.Fragment>
    <div >
        <button onClick={props.forward}>Forward</button>
    </div>
  </React.Fragment>
  )
};

export default ForwardButton;