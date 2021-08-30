import React from 'react';

const Charsheet = function(props) {
  const character = JSON.parse(document.getElementById('character').textContent);
  return (
    <div>
      <div>
        <h2>{character.name}</h2>
      </div>
      <div>
        <b><label htmlFor="playbook">Playbook: </label></b>
        <span id="playbook">{character.playbook}</span>
      </div>
      <div>
        <b><label htmlFor="demeanor">Demeanor: </label></b>
        <span id="playbook">{character.demeanor}</span>
      </div>
      <div>
        <b><label htmlFor="training">Training: </label></b> 
        <span id="training">{character.training}</span>
      </div>
      <div>
        <b><label htmlFor="creativity">Creativity: </label></b> 
        <span id="creativity">{character.creativity}</span>
      </div>
      <div>
        <b><label htmlFor="focus">Focus: </label></b> 
        <span id="focus">{character.focus}</span>
      </div>
      <div>
        <b><label htmlFor="harmony">Harmony: </label></b> 
        <span id="harmony">{character.harmony}</span>
      </div>
      <div>
        <b><label htmlFor="passion">Passion: </label></b> 
        <span id="passion">{character.passion}</span>
      </div>
    </div>
  );
}

export default Charsheet;
