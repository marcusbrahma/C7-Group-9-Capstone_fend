import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading titel="Seven seas pearls"/>
      <h1 className='app__header-h1'> Real Pearl Jewellery </h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Pearls are natures marvels; originated from dust and engineered to precious stone, and has capability to add elegance style and luxury to any type of fashion products - worn by royalties, nobles, elites and influencers.
here you can find collection with value, sustainability and fashion with door step trial and delivery option. </p>
      <div className="custom__button_div">
      <button type="button" className="custom__button" > Get Now</button>
      <button type="button" className="custom__button" > Know about us</button>   
      </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
