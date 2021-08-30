import React from 'react';
import ReactDOM from "react-dom";
import Charsheet from './Charsheet';

const BaseComponent = function(props) {
  return (
    <div>
      <Charsheet />
    </div>
  )
}

ReactDOM.render(<BaseComponent />, window.react_mount);
