import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
        <header className='pb-6'>
            <nav className='bg-slate-900 p-4 flex justify-between items-center'>
                <div>
                    <Link className='text-white me-3' to="/">HOME</Link>
                    <Link className='text-white me-3' to="/notes">NOTES</Link>
                </div>
            </nav>
        </header>
        <Outlet/>
        </>
    )
}

export default NavBar