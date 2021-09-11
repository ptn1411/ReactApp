import logo from './logo.svg';
import './App.scss';
import Mycomponents from './Example/Mycomponents.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Mycomponents />
      </header>
    </div>
  );
}

export default App;
