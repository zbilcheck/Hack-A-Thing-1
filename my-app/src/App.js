import logo from './logo.svg';
import './App.css';
import Main from './main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Main></Main>
      </header>
    </div>
  );
}

export default App;
