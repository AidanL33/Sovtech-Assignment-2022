import React, { useState } from 'react'
import './Header.css'
import Logo_Black from '../pic/Logo_Black.png'

const Header = () => {

    // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })

    // toggle menu
    const [Mobile, setMobile] = useState(false)

  return (
    <>
      <header classNmae="header">
        <div className="container d_flex">
            <div className="logo">
                <img src={Logo_Black} alt="" />
            </div>

            <div className="navlink">

              <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>

                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>

              </ul>

              <button className="toggle" onClick={() => setMobile(!Mobile)}>
                {Mobile ? <i className="fas fa-times close home-btn"></i> : <i className="fas fa-bars open"></i>}
              </button>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
