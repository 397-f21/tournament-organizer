import React, { useState } from 'react';
import './App.css';
import { RoundProps, rounds} from './utilities/bracket-organizer.ts';
import { Bracket } from 'react-brackets';


// const formBracket = () => {
// 	return <Bracket rounds={rounds} />;
// };

const App = () => {
  const [buttonPressed, setButtonPressed] = useState(false);

  const [names, setNames] = useState(['Bob', 'Rob']);

  const clickHandler = () => {
    setButtonPressed(true);
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="names-list">
        { 
          names.map(name =>
            <div>{name}</div>
            ) 
        }
        </div>

        <div>
          <form>
            {!(buttonPressed) && <input type='text'></input>}
            {!(buttonPressed) && <input type='submit'></input>}
          </form>
        </div>
        <div>
          {(!buttonPressed) && <a href="#" className="button" onClick={clickHandler}>Click Me!</a>}
          {(buttonPressed) && <Bracket rounds={rounds} />}
        </div>  
      </header>
    </div>
  );
}

export default App;
