import "./Home.css"

function Home(props){
    return(
        <div className="container">
            <div className="post-wrapper">
                <div className="post"> 
                    <div className="img-name-cont">
                        <img src={props.pfp} className="pfp" alt="profile-pic"></img>
                        <div className="username-wrapper">
                            <p className="name">{props.name}</p>
                            <p className="username">{props.username}</p>
                        </div>
                    </div>
                    <p className="post-text">{props.postText}</p>
                    <img src={props.attImg} alt="attached file" className="attchImg"></img>
                </div>
            </div>  
        </div>
    );
}

export default Home;