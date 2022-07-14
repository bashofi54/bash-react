import logo from './logo.svg';
import './App.css';
import Komponen from './Materi/Komponen';
import Styling from './Materi/Styling';

function App() {
  return (
    <div className="App">
      <Komponen />
      <Styling />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bismillah <code>src/App.js</code>save to reload.
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
