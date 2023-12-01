import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Trainer from './components/Trainer';
import About from './components/routing/About';
import Home from './components/routing/Home';
import Counter from './components/state/Counter';
import KingSolution from './components/static_data/KingSolution';
import TrainerRequests from './components/requests/TrainerRequests';
// react component called App
function App() {


  return (
    <>
      <Router>
        <nav>
          <Link to='/'>HOME</Link>
          <Link to='/about'>About</Link>
          <Link to='/state'>State</Link>
          <Link to='/data'>Data</Link>
          <Link to='/requests'>Requests</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/me' element={<Trainer name='Jordan' age={29} specialism='software' />} />
          <Route path='/state' element={<Counter />} />
          <Route path='/data' element={<KingSolution />} />
          <Route path='/requests' element={<TrainerRequests />} />
        </Routes>
        <footer>
          <small>I'm a footer!</small>
        </footer>
      </Router>
    </>

  );
}

export default App;
