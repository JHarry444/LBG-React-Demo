// remember to import the useState function
import { useState } from "react";

function Counter() {

    // react tracks this value for us
    // count GETS the value from react
    // setCount SETS the value
    // but it is NOT stored here
    let [count, setCount] = useState(0);
    // shortcut: usf

    console.log("Count:", count);

    return (<div className="container" style={{ maxWidth: "350px" }}>
        <div className="row">
            <h2>Counter</h2>
        </div>
        <div className="row">
            <input className="form-control" type="number" readOnly value={count} />
        </div>
        <div className="row mt-1">
            <div className="col">
                <button className="btn btn-primary" onClick={() => setCount(count - 5)}>-5</button>
            </div>
            <div className="col">
                <button className="btn btn-primary" onClick={() => setCount(count - 1)}>-1</button>
            </div>
            <div className="col">
                <button className="btn btn-primary" onClick={() => setCount(0)}>R</button>
            </div>
            <div className="col">
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+1</button>
            </div>
            <div className="col">
                <button className="btn btn-primary" onClick={() => setCount(count + 5)}>+5</button>
            </div>
        </div>
    </div>);
}

export default Counter;