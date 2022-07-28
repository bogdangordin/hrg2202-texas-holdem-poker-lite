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
const DECK = ['1H', '2H', '3H','4H', '5H' ,'6H' ,'7H' ,'8H' ,'9H','10H' ,'JH' ,'QH' ,'KH','1D',
'2D', '3D','4D', '5D' ,'6D' ,'7D' ,'8D' ,'9D','10D' ,'JD' ,'QD' ,'KD','1C', '2C', '3C','4C',
'5C' ,'6C' ,'7C' ,'8C' ,'9C','10C' ,'JC' ,'QC' ,'KC','1S', '2S', '3S','4S', '5S' ,'6S' ,'7S',
'8S' ,'9S','10S' ,'JS' ,'QS' ,'KS']

function GameLobby(props) {

  const [currHand, setCurrHand] = useState(['*','*']);
  const [currNumPlayers, setCurrNumPlayers] = useState(1);
  const [currDeck, setCurrDeck] = useState(['1H', '2H', '3H','4H', '5H' ,'6H' ,'7H' ,'8H' ,'9H','10H' ,'JH' ,'QH' ,'KH','1D',
  '2D', '3D','4D', '5D' ,'6D' ,'7D' ,'8D' ,'9D','10D' ,'JD' ,'QD' ,'KD','1C', '2C', '3C','4C',
  '5C' ,'6C' ,'7C' ,'8C' ,'9C','10C' ,'JC' ,'QC' ,'KC','1S', '2S', '3S','4S', '5S' ,'6S' ,'7S',
  '8S' ,'9S','10S' ,'JS' ,'QS' ,'KS']);



  useEffect(() => {
    console.log(`ur cards are: ${currHand[0]} ${currHand[1]}`);
    console.log(currDeck);
  });


  const clickedButton = (event) => {
    console.log(event.target.id);





    if (event.target.id === 'getcards') {
      setCurrHand([ currDeck.pop(), currDeck.pop()]);
    } else if (event.target.id === 'reset') {
      setCurrHand(['*','*']);

      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
      };


      setCurrDeck(shuffleArray(['1H', '2H', '3H','4H', '5H' ,'6H' ,'7H' ,'8H' ,'9H','10H' ,'JH' ,'QH' ,'KH','1D',
      '2D', '3D','4D', '5D' ,'6D' ,'7D' ,'8D' ,'9D','10D' ,'JD' ,'QD' ,'KD','1C', '2C', '3C','4C',
      '5C' ,'6C' ,'7C' ,'8C' ,'9C','10C' ,'JC' ,'QC' ,'KC','1S', '2S', '3S','4S', '5S' ,'6S' ,'7S',
      '8S' ,'9S','10S' ,'JS' ,'QS' ,'KS']));

    }

  }



  return (
    <section id='GameLobby'>

      <div>
        Please setup the game {props.currUser}
      </div>

      <div>
        <Button id='getcards' onClick={(e) => { clickedButton(e) }}>Get Cards</Button>
      </div>
      <div>
        <Button id='reset' onClick={(e) => { clickedButton(e) }}>Reset Cards</Button>
      </div>

    </section>
  )
}

export default GameLobby;

// const [currStory, setCurrStory] = useState('');


  // useEffect(() => {
  //   var interval = setInterval(() => getStory(), 5000);
  // }, []);

//   const changeInput = (event) => {
//     setCurrStoryInput(event.target.value);
//   }

// const clickedSubmit = (event) => {
//   console.log(`check if ${props.currUser} has global cooldown`);

//   axios.post('/story', {
//     username: props.currUser,
//     sentence: currStoryInput
//   })
//     .then(function (response) {
//       getStory();
//     }).catch(function (error) {
//       console.log(error);
//     });

// }

// const getStory = () => {
//   axios.get('/story')
//     .then(function (response) {

//       setCurrStory(response.data);

//     }).catch(function (error) {
//       console.log(error);
//     });
// };

// <div>
//         {`hello ${props.currUser}`}
//       </div>

//       <div style={{ color: 'black', margin: '25px', width: '750px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
//         {currStory}
//       </div>

//       <div style={{ width: '750px' }}>
//         <TextField id="storyInput" label='max length 250 characters' multiline fullWidth onChange={(e) => { changeInput(e) }} inputProps={{ maxLength: 250 }}></TextField>
//         <Button id='submitButton' onClick={(e) => { clickedSubmit(e); }} >submit</Button>
//       </div>

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