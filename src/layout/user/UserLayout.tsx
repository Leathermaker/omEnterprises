import React from 'react'
import { Footer, Navbar, Topbar } from '../../components'
import { Outlet } from 'react-router-dom'

const UserLayout:React.FC = () => {
  return (
    <div>
      <Topbar />
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default UserLayout
