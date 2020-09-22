import React from "react"
import "../styles/navbar.scss"

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="row align-items-center w-100">
        <button className="col-2 navItem">Menu001</button>
        <button className="col-2 navItem">MenuMenu002</button>
        <button className="col-1 navItem">M003</button>
        <button className="col-2 navItem">MenuM004</button>
        <button className="col-1 navItem">Menu5</button>
        <button className="col-1 navItem">Me6</button>
        <button className="col-3 navItem">SuperMenu5</button>
      </div>
    </div>
  </nav>
)

export default Navbar
