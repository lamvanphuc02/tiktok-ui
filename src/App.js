import logo from "./logo.svg";
import "./App.css";
import Button from "./component/Button";
// import Button from "~/component/Button";

function App() {
  return (
    <div className="App">
      {/* <Button /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. hello <Button />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;