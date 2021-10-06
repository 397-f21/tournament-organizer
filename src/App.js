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
