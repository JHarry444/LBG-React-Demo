import { useState } from "react";
import kings from "../../data/kings.json";
import King from "./King";

function KingSolution() {
    const [filter, setFilter] = useState("");



    const kingComponents = [];

    for (const king of kings) {
        console.log("King:", king);

        // debugger;
        if (filter && !king.nm.toLowerCase().startsWith(filter.toLowerCase())) continue; // skips the rest of the current loop
        // if (filter !== "" && !king.nm.toLowerCase().includes(filter.toLowerCase())) continue; // skips the rest of the current loop
        kingComponents.push(
            <King
                key={king.nm + " " + king.yrs}
                country={king.cty}
                house={king.hse}
                name={king.nm}
                years={king.yrs}
            />
        )
    }

    function handleChange(event) {
        setFilter(event.target.value);
    }

    return (<div>
        <h2> Kings </h2>
        <input type="text" placeholder="Enter filter here" value={filter} onChange={handleChange} />
        {/* <input type="text" placeholder="Enter filter here" value={filter} onChange={e => setFilter(e.target.value)} /> */}
        {kingComponents}
    </div>
    );
}

export default KingSolution;