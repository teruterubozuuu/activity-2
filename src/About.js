import "./About.css"
function About(props){
    return(
        <div className="about-main">
            <div className="about-wrapper">
                <h1>About Us</h1>
                <img src={props.students} alt="nevermore students" className="nevermoreImg"/>
                <p>The Quad is a place for the latest Nevermore gossip!
                <br></br>Anyone can hang out, spill teas, and maybe cause chaos in this platform :DD</p>
            </div>
        </div>
    );
}

export default About;