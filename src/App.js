import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import CustomizedInputs from './components/EmailForm';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA8RoTUEttZFascJuwVrFNGWqif0jHHjQA",
  authDomain: "freedom-generator-62f3f.firebaseapp.com",
  databaseURL: "https://freedom-generator-62f3f.firebaseio.com",
  projectId: "freedom-generator-62f3f",
  storageBucket: "freedom-generator-62f3f.appspot.com",
  messagingSenderId: "1037332833586",
  appId: "1:1037332833586:web:1f76502a8c7b5b6fb5232b",
  measurementId: "G-38JED0N9JE"
};
firebase.initializeApp(firebaseConfig);


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/email" component={CustomizedInputs} />
      </Switch>
    </Router>
  );
}

export default App;