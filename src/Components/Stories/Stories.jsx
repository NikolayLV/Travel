import style from "./Stories.scss";
import back from "../Assets/back.jpg";

const Card = (props) => {
    return (
        <div className="art">
            <img className="art__img" src={props.article.image} alt="article"/>
            <div className="art__info">
                <p className="art__country">{props.article.country}</p>
                <p className="art__date">{props.article.date}</p>
            </div>
            <p className="art__topic">{props.article.topic}</p>
            <p className="art__text">{props.article.text}</p>
        </div>
    )
}

const Stories = (props) => {
    let articleItems = props.articles.map(article => <Card article={article}/>)
    return (
        <section className="article">
            <div className="article__block" style={{backgroundImage: `url(${back})`}}>
                <h1 className="article__h1">Travel Stories from different people globally</h1>
            </div>
            <div className="article__info">
                <h3 className="art__h3">Top Travel Sories</h3>
                <p className="art__p">Explore our latest stories from our active users</p>
            </div>

            <div className="art__block">
                {articleItems}
            </div>


        </section>
    )
}

export default Stories;