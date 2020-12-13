import React from 'react'
import Product from './Product'
import HomeImage from ''
import './../styles/Home.css'

function Home() {
    return (
       <div className="home__container">
           <img src={HomeImage} alt="" className="home__image"/>
           <div className="home__row">
               <Product/>
           </div>
           <div className="home__row">

           </div>
           <div className="home__row">
               
           </div>
       </div>
    )
}

export default Home
