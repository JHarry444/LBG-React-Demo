import './App.css';
import Header from './components/Header';
import Trainer from './components/Trainer';
import trainers from './data/trainers.json';

// react component called App
function App() {
  console.log("Trainers:", trainers);

  // const trainerArray = [
  //   <Trainer name="Jordan" age="29" specialism="software" />,
  //   <Trainer name="Andy" age="21" specialism="software" />,
  //   <Trainer name="Elliot" age="27" specialism="software" />,
  //   <Trainer />
  // ]

  const trainerComponents = [];
  // looping through each trainer in the json file
  for (const trainer of trainers) {
    console.log("trainer:", trainer);
    // add a blank trainer into the array
    trainerComponents.push(
      <Trainer key={trainer.name + " " + trainer.specialism} name={trainer.name} age={trainer.age} specialism={trainer.specialism} />
    );
    // Don't necessarily need to have a component in a separate file, can just write out all the html inside the loop
    // trainerComponents.push(
    //   <div>
    //     <p>Name: {trainer.name}</p>
    //     <p>Age: {trainer.age}</p>
    //     <p>Specialism: {trainer.specialism}</p>
    //   </div>
    // )
  }

  return (
    <div>
      <header></header>
      <Header />
      <h1>React App</h1>
      <p>hello</p>
      <p>world</p>
      <Trainer age={30} specialism="sdet" />
      {trainerComponents}
    </div>
  );
}

export default App;
