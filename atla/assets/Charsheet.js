import React from 'react';

const Charsheet = function(props) {
  const playbook_choices = JSON.parse(document.getElementById('playbook_choices').textContent);
  const demeanor_choices = JSON.parse(document.getElementById('demeanor_choices').textContent);
  const training_choices = JSON.parse(document.getElementById('training_choices').textContent);
  const character = JSON.parse(document.getElementById('character').textContent);
  return (
    <div>
      <h2>{character.name}</h2>
      <label htmlFor="playbook">Playbook:</label>
      <select id="playbook" readOnly value={character.playbook}>
        {
          playbook_choices.map((playbook_pair) => {
            return (
              <option value={playbook_pair[1]} key={playbook_pair[0]}>{playbook_pair[1]}</option>
            )
          })
        }
      </select>
      <br />
      <br />
      <label htmlFor="demeanor">Demeanor:</label>
      <select id="demeanor" readOnly value={character.demeanor}>
        {
          demeanor_choices.map((demeanor_pair) => {
            return (
              <option value={demeanor_pair[1]} key={demeanor_pair[0]}>{demeanor_pair[1]}</option>
            )
          })
        }
      </select>
      <br />
      <br />
      <label htmlFor="training">Training:</label>
      <select id="training" readOnly value={character.training}>
        {
          training_choices.map((training_pair) => {
            return (
              <option value={training_pair[1]} key={training_pair[0]}>{training_pair[1]}</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default Charsheet;
