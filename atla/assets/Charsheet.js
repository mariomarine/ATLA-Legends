import React, { useState } from 'react';
import 'regenerator-runtime/runtime';

const character = JSON.parse(document.getElementById('character').textContent);
const get_host = () => {
  let host = window.location.host;
  return 'http://' + host;
}

async function patchNotes(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
    },
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

let api_url = get_host() + '/api/update-character-notes/';

const Charsheet = function(props) {
  let [fatigue, setFatigue] = useState(character.fatigue);
  let [balance, setBalance] = useState(character.balance);
  let [afraid, setAfraid] = useState(character.afraid);
  let [angry, setAngry] = useState(character.angry);
  let [foolish, setFoolish] = useState(character.foolish);
  let [guilty, setGuilty] = useState(character.guilty);
  let [insecure, setInsecure] = useState(character.insecure);
  let [notes, setNotes] = useState(character.notes);
  let [saved_confirmation, setSavedConfirmation] = useState();

  let submitNotes = () => {
    setSavedConfirmation("");
    patchNotes(api_url, {'notes': notes, 'id': character.id})
      .then(res => {
        setSavedConfirmation("Saved");
      });
  }

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
        <b><label htmlFor="background">Background: </label></b>
        <span id="background">{character.background}</span>
      </div>
      <div>
        <b><label htmlFor="demeanor">Demeanor: </label></b>
        <span id="demeanor">{character.demeanor}</span>
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
      <br />
      <div>
        <b><label htmlFor="fatigue">Fatigue: </label></b>
        <input id="fatigue" name="fatigue" value={fatigue} onChange={e => setFatigue(e.target.value)} type="number" />
      </div>
      <br />
      <div>
        <span id="balance_high">{character.balance_high}</span>
        <br />
        <b><label htmlFor="balance">Balance: </label></b>
        <input id="balance" name="balance" value={balance} onChange={e => setBalance(e.target.value)} type="number" />
        <br />
        <span id="balance_low">{character.balance_low}</span>
      </div>
      <br />
      <div>
        <b><label htmlFor="afraid">Afraid: </label></b>
        <input id="afraid" type="checkbox" checked={afraid} onChange={e => setAfraid(e.target.checked)} />
      </div>
      <div>
        <b><label htmlFor="angry">Angry: </label></b>
        <input id="angry" type="checkbox" checked={angry} onChange={e => setAngry(e.target.checked)} />
      </div>
      <div>
        <b><label htmlFor="foolish">Foolish: </label></b>
        <input id="foolish" type="checkbox" checked={foolish} onChange={e => setFoolish(e.target.checked)} />
      </div>
      <div>
        <b><label htmlFor="guilty">Guilty: </label></b>
        <input id="guilty" type="checkbox" checked={guilty} onChange={e => setGuilty(e.target.checked)} />
      </div>
      <div>
        <b><label htmlFor="insecure">Insecure: </label></b>
        <input id="insecure" type="checkbox" checked={insecure} onChange={e => setInsecure(e.target.checked)} />
      </div>
      <div>
        <b><label htmlFor="notes">Notes: </label></b>
        <textarea id="notes" name="notes" value={notes} onChange={e => setNotes(e.target.value)} />
        <button onClick={submitNotes}>Save Notes</button>
        <span>{saved_confirmation}</span>
      </div>
        
    </div>
  );
}

export default Charsheet;
