import React, { useState } from 'react';
import './App.css';
import { RoundProps, rounds} from './utilities/bracket-organizer.ts';
import { Bracket } from 'react-brackets';
import NameInput from './components/NameInput';

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
          {(!buttonPressed) && <a href="#" className="button" onClick={clickHandler}>Click Me!</a>}
          {(buttonPressed) && <Bracket rounds={rounds(names)} />}
        </div>  
      </header>
    </div>
  );
}

export default App;
