import profilePic from "../assets/son-goku.jpg";
import "./card.css";

function Card() {
    return (
        <div className="card">
            <img alt="Son-Goku" className="card-img" src={profilePic}/>
            <h2 className="card-title">Son Goku</h2>
            <p className="card-text">I make youtube videos and play video games.</p>
        </div>);
}

export default Card;