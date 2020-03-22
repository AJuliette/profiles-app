import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProfileEntry from './ProfileEntry';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ProfileEntry name="Andy" job="Software Engineer" country="UK"/>
    <ProfileEntry name="Rachel" job="Accountant" country="Germany"/>
    <ProfileEntry name="Ellen" job="Software Engineer" country="UK"/>
    <ProfileEntry name="Colin" job="Accountant" country="Germany"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
