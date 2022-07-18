/*
PokerLite
Bogdan Gordin
7/14/22
Attempt at writing a very lite poker Texas Hold'em object oriented
*/

import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';





const axios = require('axios');





function LoginSignup(props) {

  const [currUserInput, setCurrUserInput] = useState('Guest');
  const [currPassInput, setCurrPassInput] = useState('');

  const [currError, setCurrError] = useState('');



  const changeInput = (event) => {
    setCurrError('');

    if (event.target.id === 'username') {
      setCurrUserInput(event.target.value);
    } else if (event.target.id === 'password') {
      setCurrPassInput(event.target.value);
    }
  }


  const clickedLogin = (event) => {
    if (currUserInput === 'Guest' || currUserInput === 'guest') {
      props.setCurrUser(currUserInput);
      props.setCurrState('story');
      return 0;
    }

    if (currUserInput.length <= 3 || currUserInput.length >= 65 || currPassInput.length <= 5 || currPassInput.length >= 26) {
      setCurrError("username doesn't exist or password is incorrect");
      return 0;
    }

    axios.get('/login', {
      params: {
        username: currUserInput,
        password: currPassInput
      }
    })
      .then(function (response) {

        console.log(response.data);

      }).catch(function (error) {
        console.log(error);
      });

    console.log(`check database if ${currUserInput} with password ${currPassInput} exist in database and show story`)
    props.setCurrUser(currUserInput);
    props.setCurrState('story');
  }



  const clickedSignup = (event) => {
    if (currUserInput === 'Guest' || currUserInput === 'guest') {
      setCurrError(`invalid signup with ${currUserInput}`)
      return 0;
    }

    if (currUserInput.length <= 3 || currUserInput.length >= 65) {
      setCurrError('username needs to be 4 - 64 characters long');
      return 0;
    } else if (currPassInput.length <= 5 || currPassInput.length >= 26) {
      setCurrError('password needs to be 6 - 26 characters long');
      return 0;
    }

    axios.post('/signup', {
      username: currUserInput,
      password: currPassInput
    })
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });

    props.setCurrUser(currUserInput);
    props.setCurrState('story');
  }



  return (
    <section id='LoginSignup'>

      <div style={{ margin: '25px' }}>
        <TextField id="username" label="Username" variant="outlined" onChange={(e) => { changeInput(e) }} defaultValue='Guest' />
      </div>

      <div style={{ margin: '25px' }}>
        <TextField id="password" label="Password" variant="outlined" onChange={(e) => { changeInput(e) }} />
      </div>

      <div style={{ margin: '25px' }}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button id='login' onClick={(e) => { clickedLogin(e) }}>login</Button>
          <Button id='signup' onClick={(e) => { clickedSignup(e) }}>signup</Button>
        </ButtonGroup>
      </div>

      <div>
        {currError}
      </div>

    </section>
  )
}

export default LoginSignup;