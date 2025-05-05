import { Link } from "react-router-dom";

export const PageNotFound = () => {
    return ( 
        <div className="urlNotFound">
            <img src="src/assets/img/snorlax.png" alt="Snorlax"/>
            <h1>Error... Pokemon Not Foud</h1>
            <Link to={`/`}>
                <button>Go Home</button>
            </Link>
        </div>
    );
}