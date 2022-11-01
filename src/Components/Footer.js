import React from 'react'
import Logo_Black from './pic/Logo_Black.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container text-center top'>
            <div className='f_img'>
                <img src={Logo_Black} alt='' className='center' />
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
