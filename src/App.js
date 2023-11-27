import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Trainer from './components/Trainer';

// react component called App
function App() {
  return (
    <div>
      <header></header>
      <Header/>
      <h1>React App</h1>
      <p>hello</p>
      <p>world</p>
      <Trainer name="Jordan H" age="29" specialism="software"/>
      <Trainer name="Andy" age="21" specialism="software"/>
      <Trainer name="Elliot" age="27" specialism="software"/>
      <Trainer />
    </div>
  );
}

export default App;
