import React, { useState } from 'react';
import './App.css';
import { RoundProps, rounds} from './utilities/bracket-organizer.ts';
import { Bracket } from 'react-brackets';
import { shuffle } from './utilities/team-shuffler';
import NameInput from './components/NameInput';
import './index.css';

const App = () => {
  const [buttonPressed, setButtonPressed] = useState(false);

  const [names, setNames] = useState([]); //names is a list

  const clickHandler = () => {

    // make this a function later (rounds up to the next power of 2);
    let numGiven = names.length;
    let nextPowOf2 = Math.pow(2, Math.round(Math.log(numGiven) / Math.log(2)));

    let n = numGiven - 1;
    while ((n & n - 1) !== 0) {
      n = n & n - 1;
    }
    n = n << 1;


    console.log("numGiven: " + numGiven);
    console.log("nextPowerOf2: " + n);
    for (let i = 0; i < nextPowOf2 - numGiven; i++) {
      names.push("BYE");
    }
    setNames(names);
    setButtonPressed(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TourneyGen</h1>
        <NameInput names={names} setNames={setNames} buttonPressed={buttonPressed} />
        <div>
          {(!buttonPressed) && <a href="#" className="button" onClick={clickHandler}>Generate Bracket</a>}
          {(buttonPressed) && <Bracket rounds={rounds(shuffle(names))} />}
        </div>  
      </header>
    </div>
  );
}

export default App;
