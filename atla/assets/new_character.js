import React from 'react';
import ReactDOM from "react-dom";
import NewCharacter from './NewCharacter';

const BaseComponent = function(props) {
  return (
    <div>
      <NewCharacter />
    </div>
  )
}

ReactDOM.render(<BaseComponent />, window.react_mount);
