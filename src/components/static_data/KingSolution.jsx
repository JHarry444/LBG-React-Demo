import kings from "../../data/kings.json";
import King from "./King";

function KingSolution() {

    const kingComponents = [];

    for (const king of kings) {
        console.log("King:", king);

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

    return (<div>
        <h2> Kings </h2>
        {kingComponents}
    </div>
    );
}

export default KingSolution;