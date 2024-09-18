import './Apps.css';
import Counter from './Counter';
import Header from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Notfound from './Notfound';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import enidImg from "./images/enid.jpg";
import wednesdayImg from "./images/wednesday.jpg"
import wedsMeme from "./images/w-meme.jpg"
import enidMeme from "./images/e-meme.jpg"
import enidgif from "./images/enid-smirk.gif"
import yokoImg from "./images/yoko.jpg"
import yokoEnid from "./images/enid-and-yoko.jpg"
import students from "./images/nevermorestudents.jpg"
import errorPic from "./images/notfound.jpg"
function App() {

  return (
    <div>
     <Router>
      
      <Header></Header>
      <Routes>
        <Route path="/" element={
          <div className='main-home'>
            <div className='wrapper-home'>
              <Home pfp={enidImg} name="Enid Sinclair" username="@adorablycanine" postText="Hi, everyone! welcome to the quad! :DD Enjoy browsing <333 
              Now if you'll excuse me, I still have to escape!!!" attImg={enidgif}/>
              <Home pfp={yokoImg} name="Yoko Tanaka"    username= "@fangsgobrr"  postText="I saw the post about the wanted werewolf and she's here with me. 
              I have her on a chokehold." attImg={yokoEnid}></Home>
              <Home pfp={wednesdayImg} name="Wednesday Addams" username="@fascinatingmacabre" postText="Do tell me the whereabouts of a certain she-wolf. 
              I'll be using her as a test subject for my newly-made decapitation device." attImg={enidMeme}/>
              <Home pfp={enidImg} name="Enid Sinclair" username="@adorablycanine" postText="SHE'S SO ADORABLE!" attImg={wedsMeme}/>
            </div>
          </div>
          } />
        <Route path="/about" element={<About students={students}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/counter" element={<Counter/>} />
        <Route path="*" element={<Notfound notfoundpic={errorPic}/>} />
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
