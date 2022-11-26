import React from 'react'
import Mycard from './Mycard.js'
import books from './components/books.png'
import './Imagecarousel.css'
const Imagecarousel = () => {

    return (
        <div className="product-carousel">

            <h1>Categories</h1>
            <div className="product-container">
            
                <Mycard cardno='1' name="+2 Books" img={books}  />
                <Mycard cardno='2' name="Bachelors" />
                <Mycard cardno='3' name="Entrance Preparation" />
                <Mycard cardno='4' name="School Books" />
    
            </div>
        </div>
    )
}

export default Imagecarousel