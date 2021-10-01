import React, { useState } from 'react';
import './App.css';
import { RoundProps, rounds} from './utilities/bracket-organizer.ts';
import { Bracket } from 'react-brackets';


// const formBracket = () => {
// 	return <Bracket rounds={rounds} />;
// };

const App = () => {
  const [buttonPressed, setButtonPressed] = useState(false);

  const clickHandler = () => {
    setButtonPressed(true);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <a href="#" className="button" onClick={clickHandler}>Click Me!</a>
          {(buttonPressed) && <Bracket rounds={rounds} />}
        </div>  
      </header>
    </div>
  );
}

export default App;
