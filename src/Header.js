import './Header.css';
import {Link } from 'react-router-dom';
function Header(){
    return(
        <>
        <header>
            <div className='header-wrapper'>
                <div className='title-cont'>
                <p className='blog-title'>The Quad</p>
                </div>
                    <ul>
                        <li><Link to="/" className='navLinks'>Home</Link></li>
                        <li><Link to="/about" className='navLinks'>About</Link></li>
                        <li><Link to="/contact" className='navLinks'>Contact</Link></li>
                        <li><Link to="/counter" className='navLinks'>Counter for funsies!</Link></li>
                    </ul>
                </div>
        </header>
        </>
    );
}

export default Header;