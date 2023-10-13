import React from 'react';
import password from '../../images/forSupport/tile-topic-password_2x.svg';
import repair from '../../images/forSupport/tile-topic-repair_2x.svg';
import subscription from '../../images/forSupport/tile-topic-billing_2x.svg'

const Support = () => {
  return (
    <>
    <div>
    <section className="internal-page-wrapper top-100 bottom-100 support">
      <div className="container">
        
      </div>
    </section>
  </div>
  <div>
  <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
          <div className="title-wraper bold">
            <h1 className='headerFor'>Apple Support</h1>
            <div className="button-container row justify-content-between">
              <div className="col">
              <button className='supportButton'><span><img src={password}/></span><a herf="/password"><h6 className='supporter'>forget Apple id or password</h6></a></button>
              </div>
              <div className="col">
              <button className='supportButton button2'><span><img src={repair}/></span><a herf="/repair"><h6 className='supporter'>Apple repair</h6></a></button>
              </div>
              <div className="col">
              <button className='supportButton  button3'><span><img src={subscription}/></span><a herf="/password"><h6 className='supporter'>billing and subscription </h6></a></button>
              </div>
            </div>
            <h1>Search for more topics</h1>
            <div className="title-wraper bold">
                <form class="search-form">
                <input type="text" class="search-input" placeholder="Search support " />
                <button type="submit"  class="search-button">Search</button>
          </form></div>
            </div>
          </div>
        </div>
  </div>
    </>

  )
}

export default Support
