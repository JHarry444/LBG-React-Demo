import Counter from './components/state/Counter';
import MyButton from './components/state/MyButton';
import QuickExercise from './components/state/QuickEx';
import KingSolution from './components/static_data/KingSolution';
import Trainers from './components/static_data/Trainers';

// react component called App
function App() {


  return (
    <div>
      <QuickExercise />
      <br/>
      <Counter/>
    </div>
  );
}

export default App;
