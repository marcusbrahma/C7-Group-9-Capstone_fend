import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import images from  '../../constants/images';
import Navbar from '../Navbar/Navbar';

import './Store.css';

const Store = (props) => {
  const [products, setproducts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/',{
      'method':'GET',
      headers : {
        'Content-Type':'application/json'
      }
    })
    .then(response => response.json())
    .then(response => setproducts(response))
    .catch(error => console.log(error))

  },[])

return(
  <div> 
    <Navbar />
    <h1>Store</h1>
    products={products}
    {props.products && props.products.map(products =>{
            return (
              <div>
                <h2> { products.Name} </h2>
                <div> { products.Image }</div>
                <p> { products.price } </p>
                <hr/>
              </div>
            )

            })}
  </div>
)
};
export default Store;