import CreateTrainers from "./CreateTrainers";
import GetTrainers from "./GetTrainers";

function TrainerRequests() {
    return (<div className="container">
        <div className="row">
            <div className="col-2">
                <CreateTrainers />
            </div>
            <div className="col">
                <GetTrainers />
            </div>
        </div>
    </div>);
}

export default TrainerRequests;