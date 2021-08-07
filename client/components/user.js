import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Head from './head'

const User = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">Profile</div>
          <div id="username">{user}</div>
          <div>
            <Link to="/dashboard">Go To Root</Link>
          </div>
          <div>
            <Link to="/dashboard/main">Go To Main</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

User.propTypes = {}

export default User
