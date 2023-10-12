import React from 'react'
import Section from '../Main/js/Section'

const Ipad = () => {
  return (
    <>
    <section className='ipad_warpper-hightlight-wrapper'>
      <Section New="New" Title="iPad Pro" price="From $799" />
    </section>
    <section className='ipad_warpper-hightlight-wrapper-second'>
      <Section New="New" Title="iPad" Black="black" grey="grey" price="From $449" />
    </section>
    </>
  )
}

export default Ipad
