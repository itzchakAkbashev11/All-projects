import React from 'react'
import Notes from '../pages/Notes'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from '../assets/NavBar'
import NavBarFlow from '../assets/NavBarFlow'
import Layout from '../pages/Layout'
import Folders from '../pages/Folders'
import CardNote from '../pages/CardNote'

const AppRoutes = () => {
    return (
        <Routes>
        
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home />} />
                <Route path='/folders' element={<Folders />} />
                <Route path='/folders/notes' element={<Notes />} />
                <Route path='*' element={<h1 className='text-4xl'>404 not found</h1>} />
            </Route>
        </Routes>
    )
}

export default AppRoutes