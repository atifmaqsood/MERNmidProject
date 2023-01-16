import React from 'react'
import { Link, to } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary br">
  <div className="container-fluid text-center">
    <Link className="navbar-brand text-center" to ="/Histroy">Histroy</Link>
  </div>
</nav>
    </div>
  )
}

export default Navbar