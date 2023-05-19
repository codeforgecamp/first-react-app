import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to CodeForge First React App</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - JSX
        </a>
      </header>
    </div>
  );
}
export default App;

export function TobiApp() {
  return <div
  className="tobi-app"
  >This is the Tobi Application</div>;
}
