import React from 'react';
import { useState } from 'react';
import { DisplayLanguage } from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';

function onLogin(state) {
  return console.log(state);
}

function onChangeCounter(counter) {
  console.log(`Current counter is now:  ${counter}`);
}

const numbers = [1, 2, 3, 4, 5];

const list = [
  { name: 'Pisolo', id: 1, age: 21 },
  { name: 'Brontolo', id: 2, age: 20 },
  { name: 'Cucciolo', id: 3, age: 19 },
  { name: 'Eolo', id: 4, age: 12 },
  { name: 'Mammolo', id: 5, age: 11 },
  { name: 'Gongolo', id: 6, age: 18 },
  { name: 'Dotto', id: 7, age: 20 },
];

export function App() {
  const [language, setLanguage] = useState('it');

  function handleLanguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select value={language} onChange={handleLanguage}>
        <option value='it'>Italiano</option>
        <option value='en'>English</option>
      </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  );
}
