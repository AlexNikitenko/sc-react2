import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/b99901ac-b48e-433e-a0b0-4d28bdd005b4">Go To Profile</Link>
      <Link to="/dashboard/main/">Go To Main</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
