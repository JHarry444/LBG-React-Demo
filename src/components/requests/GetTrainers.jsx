import { useEffect, useState } from "react";
import Trainer from "../Trainer";
import axios from "axios";


function GetTrainers() {
    const [filter, setFilter] = useState("");
    const [trainers, setTrainers] = useState([]);

    // only runs the request when the component loads (so only once)
    useEffect(function () {
        axios
            .get("http://localhost:5000/trainer")
            .then(response => {
                console.log("Response:", response);
                // updates the trainers state with the data from the response
                setTrainers(response.data);
                console.log("Trainers:", trainers);
            }).catch(err => console.error(err));
    }, []);

    const trainerComponents = [];
    for (const trainer of trainers) {
        if (filter.length === 0 || trainer.name === filter) {
            trainerComponents.push(
                <Trainer key={trainer.name + " " + trainer.specialism} name={trainer.name} age={trainer.age} specialism={trainer.specialism} />
            );
        }
    }

    return (<div>
        <h2 style={{ textAlign: "center" }}>Trainers</h2>
        <input className="form-control" type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Enter search term here..." />
        <div className="container mt-2">
            <div className="row row-cols-3 g-4">
                {trainerComponents}
            </div>
        </div>
    </div>);
}


export default GetTrainers;