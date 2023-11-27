// Component names MUST be capitalised
function Trainer(props) {
    // components return html
    console.log("Props:", props);
    console.log("Name:", props.name);
    console.log("Age:", props.age);
    console.log("Specialism:", props.specialism);
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Specialism: {props.specialism}</p>
        </div>
    );
}

// lets you import the function into another file
export default Trainer;