import React, { useState } from 'react';
import 'regenerator-runtime/runtime'
import { playbook_stats } from './constants';

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
    },
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const get_base_url = function() {
  let full_url = window.location.toString();
  let url_arr = full_url.split('/');
  url_arr.pop();
  return url_arr.join('/');
}

const get_host = () => {
  let host = window.location.host;
  return 'http://' + host;
}

const NewCharacter = function(props) {
  const playbook_choices = JSON.parse(document.getElementById('playbook_choices').textContent);
  const demeanor_choices = JSON.parse(document.getElementById('demeanor_choices').textContent);
  const background_choices = JSON.parse(document.getElementById('background_choices').textContent);
  const training_choices = JSON.parse(document.getElementById('training_choices').textContent);
  const stat_choices = ['Creativity', 'Focus', 'Harmony', 'Passion']
  let [charName, setCharName] = useState();
  let [playbook, setPlaybook] = useState();
  let [background, setBackground] = useState();
  let [demeanor, setDemeanor] = useState();
  let [training, setTraining] = useState();
  let [creativity, setCreativity] = useState();
  let [focus, setFocus] = useState();
  let [harmony, setHarmony] = useState();
  let [passion, setPassion] = useState();
  let [statBonus, setStatBonus] = useState();

  const submitCharacter = (e) => {
    e.preventDefault();
    let data = {
      "name": charName,
      "playbook": playbook,
      "background": background,
      "demeanor": demeanor,
      "training": training,
      "creativity": creativity,
      "focus": focus,
      "harmony": harmony,
      "passion": passion,
    };
    let api_url = get_host() + '/api/character/';
    postData(api_url, data)
      .then(res => {
        window.location.replace(get_base_url() + '/' + res['id']);
      });
    
  }

  const url = get_base_url();
  return (
    <form onSubmit={submitCharacter}>
      <label>Character Name:</label>
      <input type="text" name="name" onChange={e => setCharName(e.target.value)} value={charName} />
      <br />
      <br />
      <label htmlFor="playbook">Playbook:</label>
      <select id="playbook"
              name="playbook"
              onChange={e => {
                setPlaybook(e.target.value);
                setCreativity(playbook_stats[e.target.value]['Creativity'] + (statBonus == 'Creativity' ? 1 : 0) );
                setFocus(playbook_stats[e.target.value]['Focus'] + (statBonus == 'Focus' ? 1 : 0) );
                setHarmony(playbook_stats[e.target.value]['Harmony'] + (statBonus == 'Harmony' ? 1 : 0) );
                setPassion(playbook_stats[e.target.value]['Passion'] + (statBonus == 'Passion' ? 1 : 0) );
              }}
              value={playbook}
      >
        <option selected="selected" disabled></option>
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
      <label htmlFor="background">Background:</label>
      <select id="background" name="background" onChange={e => setBackground(e.target.value)} value={background}>
        <option selected="selected" disabled></option>
        {
          background_choices.map((background_pair) => {
            return (
              <option value={background_pair[1]} key={background_pair[0]}>{background_pair[1]}</option>
            )
          })
        }
      </select>
      <br />
      <br />
      <label htmlFor="demeanor">Demeanor:</label>
      <select id="demeanor" name="demeanor" onChange={e => setDemeanor(e.target.value)} value={demeanor}>
        <option selected="selected" disabled></option>
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
      <select id="training" name="training" onChange={e => setTraining(e.target.value)} value={training}>
        <option selected="selected" disabled></option>
        {
          training_choices.map((training_pair) => {
            return (
              <option value={training_pair[1]} key={training_pair[0]}>{training_pair[1]}</option>
            )
          })
        }
      </select>
      <br />
      <br />
      <div>
        <label htmlFor="statBonus">Stat Bonus:</label>
        <select id="statBonus"
                name="statBonus"
                onChange={e => {
                  setStatBonus(e.target.value);
                  setCreativity(playbook_stats[playbook]['Creativity'] + (e.target.value == 'Creativity' ? 1 : 0) );
                  setFocus(playbook_stats[playbook]['Focus'] + (e.target.value == 'Focus' ? 1 : 0) );
                  setHarmony(playbook_stats[playbook]['Harmony'] + (e.target.value == 'Harmony' ? 1 : 0) );
                  setPassion(playbook_stats[playbook]['Passion'] + (e.target.value == 'Passion' ? 1 : 0) );
                }}
                value={statBonus}
        >
          <option selected="selected" disabled></option>
          {
            stat_choices.map((bonus) => {
              return (
                <option value={bonus} key={bonus}>{bonus}</option>
              )
            })
          }
        </select>
      </div>
      <label htmlFor="creativity">Creativity</label>
      <input type="number" name="creativity" readOnly value={creativity} />
      <br />
      <label htmlFor="focus">Focus</label>
      <input type="number" name="focus" readOnly value={focus} />
      <br />
      <label htmlFor="harmony">Harmony</label>
      <input type="number" name="harmony" readOnly value={harmony} />
      <br />
      <label htmlFor="passion">Passion</label>
      <input type="number" name="passion" readOnly value={passion} />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewCharacter;
