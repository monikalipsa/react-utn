// import logo from './logo.svg';
import Title  from './components/Title';
import './App.css';
import Mascota from './components/Mascota';

function App() {
  return (
    <div className="App">
      <Title />
          <Mascota />  
      <header className="App-header">
        <img src='images/gato.jpg' alt='gato'/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
