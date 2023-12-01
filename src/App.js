import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Trainer from './components/Trainer';
import About from './components/routing/About';
import Home from './components/routing/Home';
import Counter from './components/state/Counter';
import KingSolution from './components/static_data/KingSolution';
import TrainerRequests from './components/requests/TrainerRequests';
import 'bootstrap/dist/css/bootstrap.min.css';

// react component called App
function App() {


  return (
    <>
      <Router>
        <nav className='navbar'>
          <Link className='nav-link' to='/'>HOME</Link>
          <Link className='nav-link' to='/about'>About</Link>
          <Link className='nav-link' to='/state'>State</Link>
          <Link className='nav-link' to='/data'>Data</Link>
          <Link className='nav-link' to='/requests'>Requests</Link>
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
