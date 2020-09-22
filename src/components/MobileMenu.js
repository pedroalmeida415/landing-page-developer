import React from "react"
import FacebookIcon from "../assets/svgs/facebook-brands.inline.svg"
import TwitterIcon from "../assets/svgs/twitter-brands.inline.svg"
import InstagramIcon from "../assets/svgs/instagram-brands.inline.svg"
import "../styles/mobileMenu.scss"

const MobileMenu = () => (
  <nav id="mobileMenu" className="mobileMenu">
    <div className="container">
      <div className="row flex-column align-items-center w-100">
        <button className="col-12 navItem mb-2">Menu001</button>
        <button className="col-12 navItem mb-2">MenuMenu002</button>
        <button className="col-12 navItem mb-2">M003</button>
        <button className="col-12 navItem mb-2">MenuM004</button>
        <button className="col-12 navItem mb-2">Menu5</button>
        <button className="col-12 navItem mb-2">Me6</button>
        <button className="col-12 navItem mb-5">SuperMenu5</button>
        <div className="col-12 d-flex">
          <FacebookIcon className="mr-4" />
          <InstagramIcon className="mr-4" />
          <TwitterIcon />
        </div>
      </div>
    </div>
  </nav>
)

export default MobileMenu
