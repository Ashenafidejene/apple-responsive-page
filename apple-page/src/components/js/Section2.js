import React from 'react'

const Section2 = () => {
    return (
        <div className={`col-sm-12 col-md-6 ${this.props.OuterCon}`}>
        <div className={this.props.InnerCon}>
        <div className={`top-logo-wrapper ${this.props.Vis}`}>
             <div className="logo-wrapper">
                 <img src={this.props.Logo}/>
            </div>
         </div>
            <div className={`title-wraper ${this.props.white}`}>
                {this.props.Title}
            </div> 
            <div className={`description-wraper ${this.props.whiteD}`}>
                {this.props.description} <br/>{this.props.description2}
            </div>
            <div className="price-wrapper">
                {this.props.price}<sup>{this.props.price1}</sup>
            </div>

            <div className={`links-wrapper ${this.props.white}`}>
                <ul>
                    <li><a href="">{this.props.link}<sup className={`Vis ${this.props.show}`}>2</sup></a></li>
                    <li ><a className={this.props.off} href="">{this.props.link2}</a></li>
                </ul> 
            </div>
        </div>
    </div>
    )
}

export default Section2
