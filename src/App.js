import sum from "./sum";
import logo from "./logo.svg";
import "./App.css";
import grand from "./products.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Testing in App.js</p>
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <label>
          Enter the year of making a picture:
          <input className="outputYear"></input>
        </label>
        <label>
          Lead rating, if you don't remember year:
          <input className="rarity"></input>
        </label>
        <p>
          I win <strong>{grand?.length && sum}</strong> free pictures
        </p>
      </header>
    </div>
  );
}

export default App;
