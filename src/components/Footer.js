import React from 'react'
import "../css/Footer.css"

const Footer = () => {
  return (
    <div className='footer bg-dark'>
        <div className='d-flex container justify-content-between connect-us'>
            <p>Connect Us</p>
            <div>
                <a target="_blank" href="https://www.youtube.com/c/NomadicShepherd/" rel="noreferrer noopener">
                <i className="fa-brands fa-youtube"></i></a>
                <a target="_blank" href="https://github.com/ashish009kum" rel="noreferrer noopener" className='mx-3'>
                <i className="fa-brands fa-github"></i></a>
            </div>
        </div>
        <p className='py-2 m-0 text-center'>&#169; 2022 Copyright: Made with &#10084; by shepherds</p>
    </div>
  )
}

export default Footer