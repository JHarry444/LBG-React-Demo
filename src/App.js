import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Trainer from './components/Trainer';
import About from './components/routing/About';
import Home from './components/routing/Home';

// react component called App
function App() {


  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/me' element={<Trainer name='Jordan' age={29} specialism='software' />}/>
    </Routes>
  </Router>
  );
}

export default App;
