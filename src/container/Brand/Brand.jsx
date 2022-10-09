import React from 'react';
import { images } from '../../constants';
import './Brand.css';

const Brand = () => (
  <div className='app__brand'>
    <h1 className='app__brand-heading headtext__cormorant' color='white' id='Brand'>brand Philosophy </h1>
    <div className='app__brand_element-container'>
    <div className= 'app__brand_card flex__center' >
      <div >
      <img src={images.award01} alt="brand_image"/>
      </div>
        <div>
        <h2 className='app__header-h1'>Organic</h2>
        <span className='p__opensans app__brand-text'>The effects of pearl farming on coral reefs to learn what practices can help sustain the reefs. The critically endangered ecosystems are home to many species of fish that help maintain ocean biodiversity and provide nutrients for mollusks. Climate change and bleaching from pollution threaten these delicate reefs. Pearl farming diversifies these economies and is able to coexist with tourism and the fishing sector. In fact, pearl farming also provides more income opportunities for residents so they don’t have to rely on fishing, which reduces the risk of overfishing.</span>
      </div>
    </div>
    <div className="app__brand_card flex__center" >
      <div>
        <img src={images.award02} alt="brand_image"/>
      </div>
      <div>
        <h2 className='app__header-h1'>Sustainable</h2>
        <a className='p__opensans app__brand-text'>A big part of the brand’s philosophy and day-to-day business practice is the protection and preservation of the natural environment – the source of J. Hunter’s astounding pearls. To ensure the nutrient rich bays stay pristine, the company adheres to a strict environmental code of practice, which has had the added benefit of increasing fish stocks for local communities, who rely on fisheries for food and incom</a>
      </div>
    </div>
    <div className="app__brand_card flex__center" >
      <div>
        <img src={images.award03} alt="brand_image"/>
      </div>
      <div>
        <h2 className='app__header-h1'>Recycle</h2>
        <a className='p__opensans app__brand-text'>The “jewels from waste” art is a real art, as well as one of the musts of fashion,  oysters,perls shells from the waves used to make bracelets and necklaces, plastic, but also corks or cloth.
        These jewels are born from the desire to give new life to some waste materials, seeing beauty, poetry and magic in rejection. And so the fashion world is revolutionizing towards a broader concept of sustainability.
        It's called "Green Jewelry": sustainable jewels are not only beautiful and original, but also represent a symbol that embodies the commitment to safeguard the environment
        </a>
      </div>
    </div>
  </div>
</div>
);

export default Brand;
