import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'
// import Header from './header'

const Dashboard = () => {
  return (
    <div>
      {/* <Header /> */}
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Dashboard</div>
          <div>
            <Link to="/dashboard/profile/b99901ac-b48e-433e-a0b0-4d28bdd005b4">Go To Profile</Link>
          </div>
          <div>
            <Link to="/dashboard/main">Go To Main</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
