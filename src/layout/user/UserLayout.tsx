import React from 'react'
import { Topbar } from '../../components'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <Topbar />
      <Outlet/>
    </div>
  )
}

export default UserLayout
