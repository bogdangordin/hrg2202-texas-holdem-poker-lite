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
import TextField from '@mui/material/TextField';



const axios = require('axios');





function Story(props) {

  const [currStory, setCurrStory] = useState('');
  const [currStoryInput, setCurrStoryInput] = useState('');


  useEffect(() => {
    var interval = setInterval(() => getStory(), 5000);
  }, []);

  const changeInput = (event) => {
    setCurrStoryInput(event.target.value);
  }

  const clickedSubmit = (event) => {
    console.log(`check if ${props.currUser} has global cooldown`);

    axios.post('/story', {
      username: props.currUser,
      sentence: currStoryInput
    })
      .then(function (response) {
        getStory();
      }).catch(function (error) {
        console.log(error);
      });

  }


  const getStory = () => {
    axios.get('/story')
      .then(function (response) {

        setCurrStory(response.data);

      }).catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section id='Story'>

      <div>
        {`hello ${props.currUser}`}
      </div>

      <div style={{ color: 'black', margin: '25px', width: '750px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
        {currStory}
      </div>

      <div style={{ width: '750px' }}>
        <TextField id="storyInput" label='max length 250 characters' multiline fullWidth onChange={(e) => { changeInput(e) }} inputProps={{ maxLength: 250 }}></TextField>
        <Button id='submitButton' onClick={(e) => { clickedSubmit(e); }} >submit</Button>
      </div>

    </section>
  )
}

export default Story;


// axios.post('/words', rsvp)
//     .then(function (response) {
//       console.log(response);

//       that.setState({
//         submited: false,
//         confirmed: true
//       });

//     }).catch(function (error) {
//       console.log(error);
//     });