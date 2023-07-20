import React from "react"
import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import "../styles.css"
import logo from "./Logo.png"

const Navbar = () => {
  const { user } = useUser()

  return (
    <nav className="navbar">
      <h1>
        LOST IN TRANSLATION
        <img src={logo} height="75px" alt="logo" />
      </h1>

      {user !== null && (
        <>
          <NavLink to="/translate" className="nav-link">
            Translate
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
        </>
      )}
      <br />
      <br />
      <br />
    </nav>
  )
}

export default Navbar
