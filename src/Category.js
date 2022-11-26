import React from 'react'
import './Category.css';
import Link from 'next/link'
import BuyingPage from './BuyingPage';
import books from './components/books.png'

const Category = () => {
  return (
    <>
  
   
    <h1>Categories</h1>
    <div className="category">
    
   
    
    <div className="cat_one">
    
    <h1>+2 Books</h1>
    <Link href="/buyingpage"><a className="btn-buy-books">Buy Books</a></Link>
    </div>

    <div className="cat_two">
    
    <h1>Bachelors </h1>
    <button className="button_buyo" href="/buyingpage">Buy Books</button>
    </div>
    <div className="cat_three">
    
    <h1>Entrance Preparation</h1>
    <button className="button_buyo">Buy Books</button>
    </div>
    <div className="cat_four">
    
    <h1>School Books</h1>
    <button className="button_buyo">Buy Books</button>
    </div>
    </div>


</>
    
    
  )
}

export default Category
