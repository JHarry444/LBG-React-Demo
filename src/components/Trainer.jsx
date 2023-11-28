// Imports the prop-types library from the node_modules folder
import PropTypes from 'prop-types' ;

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

Trainer.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    specialism: PropTypes.string,
}

// lets you import the function into another file
export default Trainer;