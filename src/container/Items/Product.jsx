import React from 'react';

import './Product.css';
import { images } from '../../constants';
import { BsInstagram, BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs';
import ProductCard from './ProductCard';

const Product = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
      <div className="app__gallery-images" id='#Store'>
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsCaretLeftFill className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsCaretRightFill className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
        <button type="button" className='app__custom__button' > View ALL</button> 
      </div>
  );
};

export default Product;
