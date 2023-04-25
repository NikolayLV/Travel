import style from "./Destination.scss";
import back from "../Assets/dest2.png";


const Card = (props) => {

    return (
        <div className="card">
            <img className="place__img" src={props.place.image} alt="place"/>
            <p className="place__p">{props.place.location}</p>
            <h2 className="place__h2">{props.place.country}</h2>
        </div>
    )
}
const Destination = (props) => {
    let placeItems = props.places.map(place => <Card place={place}/>)
    return (
        <section className="dest">
            <div className="dest__main" style={{backgroundImage: `url(${back})`}}>
                <h1 className="dest__h1">Discovering the wonders of our planet, one adventure at a time</h1>
            </div>

            <div className="card__block">
                {placeItems}

            </div>


        </section>
    )
}


export default Destination;