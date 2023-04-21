import style from "./Destination.scss";
import back from "../Assets/dest2.png";

const Destination = () => {
    return (
        <section className="dest">
            <div className="dest__main" style={{backgroundImage: `url(${back})`}}>
                <h1 className="dest__h1">Discovering the wonders of our planet, one adventure at a time</h1>
            </div>




        </section>
    )
}


export default Destination;