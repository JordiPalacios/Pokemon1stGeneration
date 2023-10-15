import { Link } from "react-router-dom";

function UrlNotFound() {
    return ( 
        <div className="urlNotFound">
            <img src="src\assets\img\snorlax.png" alt="Snorlax"/>
            <h1>Error... Pokemon Not Foud</h1>
            <Link to={`/pokemon`}>
                <button>Go Home</button>
            </Link>
        </div>
     );
}

export default UrlNotFound;