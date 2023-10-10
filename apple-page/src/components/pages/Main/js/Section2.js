import React from 'react'

const Section2 = (props) => {
    return (
        <div className={`col-sm-12 col-md-6 ${props.OuterCon}`}>
        <div className={props.InnerCon}>
        <div className={`top-logo-wrapper ${props.Vis}`}>
             <div className="logo-wrapper">
                 <img src={props.Logo}/>
            </div>
         </div>
            <div className={`title-wraper ${props.white}`}>
                {props.Title}
            </div> 
            <div className={`description-wraper ${props.whiteD}`}>
                {props.description} <br/>{props.description2}
            </div>
            <div className="price-wrapper">
                {props.price}<sup>{props.price1}</sup>
            </div>

            <div className={`links-wrapper ${props.white}`}>
                <ul>
                    <li><a href="">{props.link}<sup className={`Vis ${props.show}`}>2</sup></a></li>
                    <li ><a className={props.off} href="">{props.link2}</a></li>
                </ul> 
            </div>
        </div>
    </div>
    )
}

export default Section2
