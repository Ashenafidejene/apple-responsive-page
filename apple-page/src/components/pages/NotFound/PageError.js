import React from 'react'
import { Link } from 'react-router-dom'
const PageError = () => {
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
                        <h1>404 page does not found </h1>
                        <h3> please go to <Link to='/'> home</Link> </h3>
                   </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
      )
}

export default PageError
