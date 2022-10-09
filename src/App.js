import React from 'react'
import { AboutUs, Chef, FindUs, Footer, Brand, Header,Laurels } from './container';
import {Product} from './container'
import { Navbar , Store} from './components';
import './App.css';


function App() {
   return (
    <div>
    <Navbar />
    <Header />
    <Product />
    <Brand />
    <FindUs />
    <Footer />
  </div>
);
}
export default App