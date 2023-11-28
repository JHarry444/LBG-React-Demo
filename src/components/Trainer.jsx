// Component names MUST be capitalised
function Trainer(props) {
    // components return html
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