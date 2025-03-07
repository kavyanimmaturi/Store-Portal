import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard-cont">
        <div className='dashboard'>
      <h2>Welcome to the dashboard ....</h2>
      <p>You are managing:</p>
      <div className='details'>
      <Link to="/invoices" className='links'>View Invoices</Link>
      </div>
    </div>
    </div>

    </div>
  )
}

export default Dashboard
