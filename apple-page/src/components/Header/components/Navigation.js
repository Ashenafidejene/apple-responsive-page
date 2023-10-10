import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
const Navigation = (props) => {
    if(props.flag)
    {
        return (
            
            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to={props.urlLink}>{props.urlName}</Link></li>
        )
    }
    else{
        return ( 
            <li className="nav-item"><Link className="nav-link js-scroll-trigger"  to={props.urlLink}><img className='a' src={props.pic} alt={props.urlName}/></Link></li>
        )
    }
}

export default Navigation
