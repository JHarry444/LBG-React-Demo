import axios from "axios";
import { useState } from "react";

function CreateTrainers() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [specialism, setSpecialism] = useState("");

    return (<form onSubmit={e => {
        e.preventDefault();
        axios.post("http://localhost:5000/trainer", { name, age: Number.parseInt(age), specialism })
            .then(response => {
                console.log(response);
                setName("");
                setAge("");
                setSpecialism("");
            })
            .catch(err => console.error(err))
    }}>
        <label htmlFor="trainerName" className="form-label">Name</label>
        <input
            id="trainerName"
            name="name"
            className="form-control"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
        />
        <label htmlFor="trainerAge" className="form-label">Age</label>
        <input
            id="trainerAge"
            name="age"
            className="form-control"
            type="number"
            value={age}
            min={18}
            max={65}
            onChange={e => setAge(e.target.value)}
            required
        />
        <label htmlFor="trainerSpecialism" className="form-label">Specialism</label>
        <input
            id="trainerSpecialism"
            name="specialism"
            className="form-control"
            type="text"
            value={specialism}
            onChange={e => setSpecialism(e.target.value)}
            required
        />
        <div className="mt-2">
            <button className="btn btn-success" type="submit">Submit</button>
        </div>
    </form>);
}

export default CreateTrainers;