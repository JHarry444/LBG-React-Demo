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

    return (<div>
        <input type="number" readOnly value={count} />
        <br />
        <button onClick={() => setCount(count + 1)}>+1</button>
    </div>);
}

export default Counter;