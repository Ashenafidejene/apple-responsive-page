import React from 'react'

const Navigation = (props) => {
    if(props.flag)
    {
        return (
            
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href={props.urlLink}>{props.urlName}</a></li>
        )
    }
    else{
        return ( 
            <li className="nav-item"><a className="nav-link js-scroll-trigger"  href={props.urlLink}><img src={props.pic} alt={props.urlName}/></a></li>
        )
    }
}

export default Navigation
