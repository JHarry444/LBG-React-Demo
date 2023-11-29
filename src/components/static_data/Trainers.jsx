import { useState } from "react";
import trainers from "../../data/trainers.json";
import Trainer from "../Trainer";

function Trainers() {
  const [filter, setFilter] = useState("");

  console.log("Filter:", filter);
  const trainerComponents = [];
  // looping through each trainer in the json file
  for (const trainer of trainers) {
    // if filter is blank OR the trainer's name matches the filter put them on the page
    if (filter.length === 0 || trainer.name === filter) {
      trainerComponents.push(
        <Trainer key={trainer.name + " " + trainer.specialism} name={trainer.name} age={trainer.age} specialism={trainer.specialism} />
      );
    }
  }

  function handleChange(event) {
    // browser triggers an event whenever the page is interacted with
    // this event is passed into any event handler function
    console.log("Event:", event);
    // the target of the event is whatever element it was triggered on
    console.log("Target:", event.target);
    // as it's an input I can grabn the contents with .value
    console.log("Value:", event.target.value);
    setFilter(event.target.value);
  }

  return (<div>
    <h2>Trainers</h2>
    {/* Controlled component (its value is mirrored in the state) */}
    <input type="text" value={filter} onChange={handleChange} />
    {/* <input type="text" value={filter} onChange={e => setFilter(e.target.value)}/> */}
    {trainerComponents}
  </div>);
}

export default Trainers;