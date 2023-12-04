import PropTypes from "prop-types";

function King(props) {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h4>{props.name}</h4>
                    <div className="card-text">
                        <p>Country: {props.country}</p>
                        <p>House: {props.house}</p>
                        <p>Years: {props.years}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

King.propTypes = {
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    years: PropTypes.string.isRequired,
}



export default King;