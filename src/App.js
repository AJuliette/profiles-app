import React from 'react';
import ProfileWidget from './ProfileWidget';
import avatar from './avatar.png';
import './App.css';

const profiles = [
  { name: 'Andy', hob: 'Software Engineer', country: 'UK'},
  { name: 'Rachel', hob: 'Accountant', country: 'Germany'},
  { name: 'Ellen', hob: 'Software Engineer', country: 'UK'},
  { name: 'Colin', hob: 'Accountant', country: 'Germany'}

]

function App() {
  return (
    <div>
      <ProfileWidget profiles={profiles} />
    </div>
  )
}

export default App;
