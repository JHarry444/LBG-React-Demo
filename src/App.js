import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Trainer from './components/Trainer';
import trainers from './data/trainers.json';

// react component called App
function App() {
  console.log("Trainers:", trainers);

  return (
    <div>
      <header></header>
      <Header/>
      <h1>React App</h1>
      <p>hello</p>
      <p>world</p>
      <Trainer/>
      <Trainer name="Andy" age="21" specialism="software"/>
      <Trainer name="Elliot" age="27" specialism="software"/>
      <Trainer />
    </div>
  );
}

export default App;
