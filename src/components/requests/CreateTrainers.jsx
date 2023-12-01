import axios from "axios";
import { useState } from "react";

function CreateTrainers() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [specialism, setSpecialism] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:5000/trainer", { name, age, specialism })
            .then(response => console.log(response))
            .catch(err => console.error(err))
    }

    return (<form onSubmit={handleSubmit}>
        <label className="form-label">Name
            <input
                className="form-control"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </label>
        <br />
        <label className="form-label">Age
            <input
                className="form-control"
                type="number"
                value={age}
                min={18}
                max={65}
                onChange={e => setAge(e.target.value)}
            />
        </label>
        <br />
        <label className="form-label">Specialism
            <input
                className="form-control"
                type="text"
                value={specialism}
                onChange={e => setSpecialism(e.target.value)}
            />
        </label>
        <br />
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>);
}

export default CreateTrainers;