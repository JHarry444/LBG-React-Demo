// Imports the prop-types library from the node_modules folder
import PropTypes from 'prop-types';
import './Trainer.css';
// Component names MUST be capitalised
function Trainer(props) {
    // components return html
    return (
        <div className='col'>
            <div className='card'>
                <div className='card-body'>
                    <div className='card-text'>
                        <h5 className='card-title '>{props.name}</h5>
                        <p>Age: {props.age}</p>
                        <p>Specialism: {props.specialism}</p>
                    </div>
                </div>
            </div>
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