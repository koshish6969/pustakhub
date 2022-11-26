import React from 'react'
import './Mycard.css'
const Mycard = (props) => {
    return (
        <div className="card_main">
        
        <div className='mycard'> 
        
        {props.name}

        
        </div>
        </div>
        
    )
}

export default Mycard