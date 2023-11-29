import Counter from './components/state/Counter';
import QuickExercise from './components/state/QuickEx';
import Trainers from './components/static_data/Trainers';

// react component called App
function App() {


  return (
    <div>
      <QuickExercise />
      <br />
      <Counter />
      <br />
      <Trainers />
    </div>
  );
}

export default App;
