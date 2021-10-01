import logo from './logo.svg';
import './App.css';
import {RoundProps} from './utilities/bracket-organizer.ts';

const list = ["a ", "b ", "c", "d"];

const formBracket = () => {
	return <Bracket rounds={rounds} />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {formBracket}
        </a>
      </header>
    </div>
  );
}

// given an array arr and length n (optional), shuffle array
const shuffle = (arr, n) => {
	if (n === undefined) {
		n = arr.length;
	}
	else if (n <= 0) {
		n = arr.length;
		console.warn('Requested samples is not greater than 0. Using full array.');
	}
	else if (n > arr.length) {
		n = arr.length;
		console.warn('Requested more samples than there are available. Using full array.');
	}
	let nInd = n;

	let currIndex = arr.length, tempValue, randIndex;
	// While there remain elements to shuffle...
	while (0 !== currIndex) {
		// Pick a remaining element...
		randIndex = Math.floor(Math.random() * currIndex);
		currIndex -= 1;

		// And swap it with the current element.
		tempValue = arr[currIndex];
		arr[currIndex] = arr[randIndex];
		arr[randIndex] = tempValue;
	}
	return arr.slice(0, nInd);
};


export default App;
