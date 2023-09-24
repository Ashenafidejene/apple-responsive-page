import React from 'react'

const Section = () => {
    return (
        <div>
      <div className="container">
          
      <div className="new-alert">
        {this.props.New}
      </div>
  
      <div className={`title-wraper bold ${this.props.Black}`}>
        {this.props.Title}
      </div> 
  
      <div className={`description-wrapper ${this.props.Black}`}>
        {this.props.description}
      </div>
  
      <div className={`price-wrapper ${this.props.grey}`}>
        {this.props.price}
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
