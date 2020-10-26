import React from 'react';
import Header from './component/Header/';
import Categories from './component/Categories/';
import Products from './component/Products';
import Footer from './component/Footer/';
import Cart from './component/Cart/'

function App (){
    return(

    <>
        <Header/>
        <Categories/>
        <Cart />
        <Products/> 
        <Footer/>
    </>
    )
}

export default App;