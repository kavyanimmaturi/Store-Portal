import React from 'react'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-cont'>
      <h1 className='title'>Welcome to the Invoices & Product Management Portal</h1>
      <p className='para'>Hello all, in this portal we can see the detailed invoices of products. <br/>
         Let's explore the portal and see the invoices for different products by searching in search bar and also 
         we can download the invoices in the PDF format. 
      </p>
      <div className='banner-btn'>
        <button className='about-btn'>About</button>
        <button className='view-btn'>View More</button>
  </div>
  </div>
  </div>
    
  )
}

export default Banner
