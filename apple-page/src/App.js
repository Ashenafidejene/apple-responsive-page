import React, { Component } from 'react'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 import './App.css';
import "./components/css/bootstrap.css";
import "./components/css/styles.css";
import Header from './components/Header/Header';
import LastSection from './components/Footer/LastSection';
import Main from './components/pages/Main/Main'
import Cart from './components/pages/cart/Cart';
import Ipad from './components/pages/ipad/Ipad';
import Iphone from './components/pages/iphone/Iphone';
import Mac from './components/pages/Mac/Mac';
import Music from './components/pages/music/Music';
// import PageNotFound  from './components/pages/NotFound/PageNotFound';
import PageError from './components/pages/NotFound/PageError';
import Search from './components/pages/search/Search';
import Support from './components/pages/support/Support';
import Tv from './components/pages/tv/Tv';
import Watch from './components/pages/watch/Watch';
import Product from './components/pages/iphone/Product';
import AboutMe from './components/pages/AboutMe/AboutMe';
import { Routes,Route } from 'react-router-dom';

const App = ()=>{

    return (
    <div className="App">

    <Header/>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/cart" element={<Cart/>}/> 
    <Route path="/ipad" element={<Ipad/>}/>
    <Route path="/iphone" element={<Iphone/>}/>
    <Route path="/iphone/:phoneId" element={<Product/>}/>
    <Route path="/mac" element={<Mac/>}/>
    <Route path="/music" element={<Music/>}/>
    <Route path="/*" element={<PageError/>}/> 
    <Route path="/search" element={<Search/>}/>
    <Route path="/support" element={<Support/>}/>
    <Route path="/tv" element={<Tv/>}/>
    <Route path="/watch" element={<Watch/>}/>
    <Route  path="/AboutMe" element={<AboutMe/>}/>
    </Routes> 
    <LastSection/>
    </div>
    )
}
export default App;





