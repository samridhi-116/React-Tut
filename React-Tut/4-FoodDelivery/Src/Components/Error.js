import { useRouteError } from "react-router-dom";
import error from "../Assets/error.jpg"
import { Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div className="error-pg">
            <img src={error} className="error-img"/>
            <p className="error">{err.status + ": " + err.statusText}</p>
            <br/>
            <Link to ="/"><button className="error-btn">Return to Safety</button></Link>
        </div>
    )
}

export default Error;