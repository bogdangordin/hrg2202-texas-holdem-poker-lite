/*
PokerLite
Bogdan Gordin
7/14/22
Attempt at writing a very lite poker Texas Hold'em object oriented
*/

import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
// import { BrowserRouter, Routes, Link, Route, useParams } from "react-router-dom";
import $ from 'jquery';

const axios = require('axios');
var path = require('path');

import LoginSignup from './LoginSignup.jsx';
import GameLobby from './GameLobby.jsx';





function App() {

  const [currState, setCurrState] = useState('loginsignup');
  const [currUser, setCurrUser] = useState('Guest');


  useEffect(() => {
    console.log(`hello ${currUser}`)
  }, [])

  return (
    <section id='app'>
      { currState === 'loginsignup' && <LoginSignup setCurrUser={setCurrUser} setCurrState={setCurrState}/> }
      { currState === 'gamelobby' && <GameLobby currUser={currUser}/> }
      {/* { currState === 'game' && <Game currUser={currUser}/> } */}

    </section>
  )
}

export default App;


// { currState === 'loginsignup' && <LoginSignup setCurrUser={setCurrUser} setCurrState={setCurrState}/> }
//       { currState === 'story' && <Story currUser={currUser}/> }