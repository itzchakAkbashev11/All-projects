import React, { useContext } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Loading from '../shared/Loading'
import Products from '../components/products/Products'
import UserContext from '../context/userContext'
import Logout from '../components/Logout'

const AppRoutes = () => {
    const { user } = useContext(UserContext)
    return (
        <Routes>
            <Route path='/' element={<Navbar />}>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/loading' element={<Loading on={true} />} />
                {user && <Route path='/products' element={<Products />} />}
             
                <Route path='/logout' element={<Logout />} />
                <Route path='*' element={<h1 className='text-4xl'>404 not found</h1>} />
            </Route>
        </Routes>
    )
}

export default AppRoutes