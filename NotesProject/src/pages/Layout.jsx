import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarFlow from '../assets/NavBarFlow'
import MyFooter from './MyFooter'

const Layout = () => {
  return (
    <div className='min-h-[100vh] flex flex-col justify-between '>
        <div>
            <NavBarFlow/>
            <Outlet/>
        </div>
        <MyFooter/>
    </div>
  )
}

export default Layout