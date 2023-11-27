import logo from './logo.svg';
import './App.css';
import Trainer from './components/Trainer';
import Header from './components/Header';

// react component called App
function App() {
  return (
    <div>
      <header></header>
      <Header/>
      <h1>React App</h1>
      <p>hello</p>
      <p>world</p>
      <Trainer />
      <Trainer />
      <Trainer />
      <Trainer />
    </div>
  );
}

export default App;
