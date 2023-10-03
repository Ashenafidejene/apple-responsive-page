import React from 'react'

const Section = (props) => {
    return (
        <div>
      <div className="container">
          
      <div className="new-alert">
        {props.New}
      </div>
  
      <div className={`title-wraper bold ${props.Black}`}>
        {props.Title}
      </div> 
  
      <div className={`description-wrapper ${props.Black}`}>
        {props.description}
      </div>
  
      <div className={`price-wrapper ${props.grey}`}>
        {props.price}
      </div>
      <div className="links-wrapper">
        <ul>
          <li><a href="">Learn more</a></li>
          <li><a href="">Buy</a></li>
        </ul> 
      </div>
    </div>
        </div>
      )
}

export default Section
