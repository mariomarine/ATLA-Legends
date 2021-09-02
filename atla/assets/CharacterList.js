import React from 'react';

const get_base_url = function() {
  let full_url = window.location.toString();
  let url_arr = full_url.split('/');
  url_arr.pop();
  return url_arr.join('/');
}

const Charsheet = function(props) {
  const characters = JSON.parse(document.getElementById('characters').textContent);
  const url = get_base_url();
  return (
    <ul>
      {
        characters.map((character) => {
          return (
            <li key={character.id}>
              <a href={url + '/' + character.id}>
                {character.name} - {character.training} - {character.background} - {character.demeanor}
              </a>
            </li>
          )
        })
      }
    </ul>
  );
}

export default Charsheet;
