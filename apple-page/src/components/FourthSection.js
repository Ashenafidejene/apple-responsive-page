import React from 'react'
import Section2 from './js/Section2'
import Section from './js/Section'
const FourthSection = () => {
    return (
        <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
            <div className="row">
               
                <Section2  Vis="Vis"  OuterCon="left-side-wrapper" InnerCon="left-side-container" Title=" iPhone 11 " description="Just the right amount of everything." price="From $18.70/mo. or $499 with trade‑in." price1="1" link="Learn more" link2="Apply now"  />
    
                <Section2  Vis="Vis"  OuterCon="right-side-wrapper" InnerCon="right-side-container" white="white" Title="Get the latest CDC response to COVID-19." link="Watch the PSA" off="off" />				
            </div>
        </div> 
    </section>
      )
}

export default FourthSection
