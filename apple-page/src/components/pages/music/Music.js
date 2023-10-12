import React from 'react'
import Test from '../Test'
import music from '../../images/forMusic/apple-music logo.png'
const Music = () => {
  return (
    <div>
    <section className="internal-page-wrapper top-100 bottom-100">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
          <br/>
                    <br/>
                    <br/>
                    <br/>
            <div className="title-wraper bold">
            <div className='top-logo warpper'>
                        <img src={music}/>
              </div>
              <h1 className='black'>Hear sound all around.</h1>
              <button class="red-button">Try 1 month free</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
export default Music
