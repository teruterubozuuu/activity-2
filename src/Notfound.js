import "./Notfound.css"
import {Link } from 'react-router-dom';

function Notfound(props){
    return(
        <div className="error-container">
            <div id='error'>
                <img src={props.notfoundpic} alt="not found" className="errorPic"/>
                <h1 className="notFoundTitle">Oops!</h1>
                <p className="notFoundDesc">
                       We can't seem to find the page you're looking for.               
                </p>
                <button className="backToHome"><Link to="/" className="backHomeLink">Back to Home</Link></button>
            </div>
            </div>
    );
}

export default Notfound;