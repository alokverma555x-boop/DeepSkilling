import './App.css';
import { Home } from './Components/Home';
import { About } from './About';
import { Contact } from './Contact';

function App() {
  return (
    <div className="container">
      <Home />
      <About />
      <Contact />
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </div>
  );
}

export default App;