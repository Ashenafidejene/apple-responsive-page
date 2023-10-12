import React from 'react'
import watch from '../../images/icons/watch-series5-logo.png'
import Section from '../Main/js/Section'
import image1 from '../../images/forWatch/watch3.png'
import image2 from '../../images/forWatch/3rdwatch.jpg'
const Watch = () => {
  return (
    <>
    <section className='watch_warpper-hightlight-wrapper'>
      <div className='top-logo warpper'>
        <img src={watch}/>
      </div>
    <Section description="Smarter. Brighter. Mightier." price="From $399"/>
    </section>
    <section className="internal-page-wrapper top-100">
    <div className="container">
    <div className="row justify-content-center text-center">
    
    </div>
    <div className="row justify-content-center text-center product-holder h-100">
                      <div className={`col-sm-12 col-md-6 my-auto`}>
                        <div className="starting-price">
                        <div className='top-logo warpper'>
                        <img src={watch}/>
                        </div>
                       <h1 className='black'>
                         Next level adventure.</h1>
                        </div>
                        <div className="monthly-price">$799</div>
                        {/* <div className="product-details">{details}</div> */}
                      </div>
  
                      <div className={`col-sm-12 col-md-6`}>
                        <div className="prodict-image">
                          <img src={image1} />
                        </div>
                      </div>
                    </div>
    </div>
    </section>
    </>
  )
}

export default Watch
