import React from 'react'
import "./Home.css";
import banner from './components/banner.png';
// import Imagecarousel from './Imagecarousel';
import books from './components/books.png';
import BuyingPage from './BuyingPage';
function Home() {
  const handleClick=()=>{
    <BuyingPage/>
    alert("you clicked")
  }


  return (
    <>
    <div className="home">
    
    <div className="top_banner">
    <h1 className='top_header'>Online books
     made easier</h1>
      <img className="home_image" src={books}/>
      </div>
    <div className="banner">
    <div className="banner_one">
    
    <h1>Buy old books online</h1>
    <button className="button_buy">Start Buying</button>
    </div>

    <div className="banner_two">
    
    <h1>Sell old books online</h1>
    <button className="button_sell">Start Selling</button>
    </div>
    </div>



    </div>
    
 </> )
}

export default Home
