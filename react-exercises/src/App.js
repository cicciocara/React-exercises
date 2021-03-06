import React from 'react';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { ShowGithubUser } from './ShowGithubUser';
import { GitHubUserList } from './GitHubUserList';
import { GitHubUser } from './GitHubUser';

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
      <Routes>
        <Route path='/' element={<Welcome name='cicciocara' />} />
        <Route path='/counter' element={<Counter initialValue={30} />} />
        <Route path='/gitHubUser' element={<GitHubUser />} />
        <Route path='/users' element={<GitHubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=':user' element={<ShowGithubUser />} />
        </Route>
        <Route path='users/:username' element={<ShowGithubUser />} />
        <Route path='*' element={<p>Not fount :(</p>} />
      </Routes>
      <Link to='/'>HomePage</Link> | <Link to='/counter'>Counter</Link> | <Link to='/users'>GithubUser</Link>
    </div>

    /*Add an index route to the GithubUserList route 
    that shows the "Add a user and select it" message.*/
  );
}
