import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdEject} from 'react-icons/md';
import {Store} from '../../components';
import images from  '../../constants/images';
import { Route,Routes} from 'react-router-dom';

import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  <Routes>
    <Route path='/Store' element={<Store/>} exact></Route>
  </Routes>
  return(
  <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.sevens} alt="app__logo"/>
    <div className='app__navbar-links'>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><Link to={'/Store'}>Store</Link></li>
        <li className="p__opensans"><a href="#Brand">Our Brand</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
    </div>
    </div>
    <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Cart</a>
      </div>
    <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdEject fontSize={24} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
  </nav>
  )
  };

export default Navbar;
