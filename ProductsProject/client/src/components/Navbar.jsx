import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import UserContext from '../context/userContext'
import axios from 'axios'
import { LOGOUT_URL } from '../routes/urls'

const Navbar = () => {
    const { user, setUser } = useContext(UserContext)
 
    return (
        <>
            <header className='pb-6'>
                <nav className='bg-slate-900 p-4 flex justify-between items-center'>
                    <div>
                        <Link className='text-white me-3' to="/">HOME</Link>
                        {
                            !user &&
                            <>
                                <Link className='text-white me-3' to="/signup">SIGNUP</Link>
                                <Link className='text-white me-3' to="/login">LOGIN</Link>
                            </>
                        }

                        <Link className='text-white me-3' to="/products">PRODUCTS</Link>
                    </div>
                    {
                        user &&
                        <Link
                        to="/logout"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded me-3 focus:outline-none focus:shadow-outline"
                        >
                            Logout
                            </Link>
                    }

                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Navbar