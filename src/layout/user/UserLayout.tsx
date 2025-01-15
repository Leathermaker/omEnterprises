import React from 'react'
import { Navbar, Topbar } from '../../components'
import { Outlet } from 'react-router-dom'

const UserLayout:React.FC = () => {
  return (
    <div>
      <Topbar />
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default UserLayout
