import React from "react"
import "../styles/header.scss"

import FacebookIcon from "../assets/svgs/facebook-brands.inline.svg"
import TwitterIcon from "../assets/svgs/twitter-brands.inline.svg"
import InstagramIcon from "../assets/svgs/instagram-brands.inline.svg"
import MenuIcon from "../assets/svgs/menu.inline.svg"
import Navbar from "./Navbar"
import MobileMenu from "./MobileMenu"

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu")
    mobileMenu.classList.toggle("visible")
  }
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-9">
              <h1>Developer</h1>
            </div>
            <div className="col-3 iconsWrapper">
              <FacebookIcon className="mr-4" />
              <InstagramIcon className="mr-4" />
              <TwitterIcon />
            </div>
            <div onClick={toggleMobileMenu} className="col-2 menuWrapper">
              <MenuIcon />
            </div>
          </div>
        </div>
        <MobileMenu />
      </header>
      <Navbar />
    </>
  )
}

export default Header
