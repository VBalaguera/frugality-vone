import logo from './logo.svg';
import WeatherApp from './components/WeatherApp'; 
import Joke from './components/Joke'
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header ">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className='App-title'>frugality</h1>
      </header>
      <WeatherApp />
      <Joke />
      <footer className="App-footer">
        
      </footer>
    </div>
  );
}

export default App;
