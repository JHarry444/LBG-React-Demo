import axios from "axios";
import { useState } from "react";

function CreateTrainers() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [specialism, setSpecialism] = useState("");

    function handleSubmit(event) {
        debugger;
        event.preventDefault();
        axios.post("http://localhost:5000/trainer", {name, age, specialism}) 
        .then(response => console.log(response))
        .catch(err => console.error(err))
    }

    return (<form onSubmit={handleSubmit}>
        <label>Name
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </label>
        <br />
        <label>Age
            <input
                type="number"
                value={age}
                min={18}
                max={65}
                onChange={e => setAge(e.target.value)}
            />
        </label>
        <br />
        <label>Specialism
            <input
                type="text"
                value={specialism}
                onChange={e => setSpecialism(e.target.value)}
            />
        </label>
        <br />
        <button type="submit">Submit</button>
    </form>);
}

export default CreateTrainers;