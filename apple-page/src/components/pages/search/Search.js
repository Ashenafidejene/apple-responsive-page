import React from 'react'
import searchIcon from '../../images/icons/search-icon.png'
const Search = () => {
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
                <form class="search-form">
                <label><img className='a' src={searchIcon}/></label>
                <input type="text" class="search-input" placeholder="Search apple.com " />
                <button type="submit" class="search-button">Search</button>
          </form></div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
  
}

export default Search
