import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div>
        <div id="title">Main</div>
        <Link to="/dashboard/profile/b99901ac-b48e-433e-a0b0-4d28bdd005b4">Go To Profile</Link>
      </div>
      <div>
        <Link to="/dashboard">Go To Root</Link>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
