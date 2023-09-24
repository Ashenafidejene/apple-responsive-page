import React from 'react'

const Navigation = () => {
    if(this.props.flag)
    {
        return (
            
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href={this.props.urlLink}>{this.props.urlName}</a></li>
        )
    }
    else{
        return ( 
            <li className="nav-item"><a className="nav-link js-scroll-trigger"  href={this.props.urlLink}><img src={this.props.pic} alt={this.props.urlName}/></a></li>
        )
    }
}

export default Navigation
