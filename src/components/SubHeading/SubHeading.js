import React from 'react';
import { images } from '../../constants';


const SubHeading = ({titel}) => (
  <div style={{marginBottom: '1rem'}}>
    <p className='p__cormorant'>{titel}</p>
    <img src={images.headerclose} alt="headerclose_image" className="headerclose__img"></img>
  </div>
);

export default SubHeading;
