import PropTypes from "prop-types";

function King(props) {
    return (<div>
        <h4>{props.name}</h4>
        <p>Country: {props.country}</p>
        <p>House: {props.house}</p>
        <p>Years: {props.years}</p>
    </div>);
}

King.propTypes = {
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
}



export default King;