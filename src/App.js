import React, { useState } from 'react';
import './App.css';
import { RoundProps, rounds} from './utilities/bracket-organizer.ts';
import { Bracket } from 'react-brackets';


// const formBracket = () => {
// 	return <Bracket rounds={rounds} />;
// };

const App = () => {
  const [buttonPressed, setButtonPressed] = useState(false);

  const [names, setNames] = useState(['bob']); //names is a list

  const clickHandler = () => {
    setButtonPressed(true);
  }

  const addName = (name) => {  //name is a str
    setNames(names => [...names, name]);
    //console.log(name);
  }
  return (
    <div className="App">
      <header className="App-header">
      <div className="names-list">
      <ol>{ 
          names.map((name, key)=>
            <li key={key}>{name}</li>
            ) 
          
        }</ol>
        </div>

        <div>
          <form>
            {!(buttonPressed) && <input type='text'></input>}
            {!(buttonPressed) && <input type='submit' onClick={e => addName(e.target.value)}></input>}
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
