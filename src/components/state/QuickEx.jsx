function QuickExercise() {

    function logger() {
        console.log("named func");
    }

    return ( <div>
        <button onClick={logger}>Button 1</button>
        <button onClick={function() { console.log("Anonymous function"); }}>Button 2</button>
        <button onClick={() => console.log("Arrow function")}>Button 3</button>
    </div> );
}

export default QuickExercise;