import React from 'react';
import ReactDOM from "react-dom";
import CharacterList from './CharacterList';

const BaseComponent = function(props) {
  return (
    <div>
      <CharacterList />
    </div>
  )
}

ReactDOM.render(<BaseComponent />, window.react_mount);
