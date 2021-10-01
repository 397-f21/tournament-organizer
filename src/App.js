import logo from './logo.svg';
import './App.css';
import { RoundProps, rounds} from './utilities/bracket-organizer.ts';
import { Bracket } from 'react-brackets';


// const formBracket = () => {
// 	return <Bracket rounds={rounds} />;
// };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Bracket rounds={rounds} />
        </div>  
      </header>
    </div>
  );
}

export default App;
