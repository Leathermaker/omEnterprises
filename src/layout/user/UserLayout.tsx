import React from 'react'
import { Footer, Navbar, Topbar } from '../../components'
import { Outlet } from 'react-router-dom'
import axios from 'axios'

const UserLayout: React.FC = () => {

  const runMachine = async () => {
    try {
     await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1`)
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    runMachine()
  }, [])
  return (
    <div className='h-auto'>
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default UserLayout
