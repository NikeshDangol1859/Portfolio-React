import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
  <div className="container">
    <Link className="navbar-brand" to="/">Nikesh Dangol</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>                
        <li className="nav-item">
          <Link className="nav-link" to="/resume">Resume</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

      
    </>
  )
}

export default Nav
