import React from 'react'
import { Link } from 'react-router-dom'
import tvLogo from '../../images/icons/apple-tv-logo.png'
import img from '../../images/forTv/apple-tv-4k-the-techportal.jpg'
import img2 from '../../images/forTv/Apple-TV_ST.jpg'
const Tv = () => {
  return(
  <section className="internal-page-wrapper top-100">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-12">
        <br />
        <br />
        <br />
        <div className="title-wraper bold">
          <div className="top-logo warpper">
            <img src={tvLogo} alt="TV Logo" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center product-holder h-100 top-100 bottom-100">
        <div className="col-sm-12 col-md-6 my-auto order-1">
          <div className="product-title">HomePod</div>
          <div className="product-brief">The ultimate TV experience is calling.</div>
          <div className="starting-price">Starting at $129</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <Link to="/#">Learn more</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 order-2">
          <div className="product-image">
            <img src={img} alt="Product Image" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center product-holder h-100 top-100 bottom-100">
        <div className="col-sm-12 col-md-6 my-auto order-2">
          <div className="product-title">Apple TV 4K</div>
          <div className="product-brief">The future hits home.</div>
          <div className="starting-price">Starting at $234</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <Link to="/#">Learn more</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 order-1">
          <div className="product-image">
            <img src={img2} alt="Product Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
export default Tv
