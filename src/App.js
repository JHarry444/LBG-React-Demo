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
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">Home</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/state">State</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/data">Data</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/requets">Requests</Link>
                </li>
              </ul>
            </div>
          </div>
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
