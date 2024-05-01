import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import TextData from '../components/TextData'

// in approutes we create a route to go through

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/table" element={<TextData/>} />
                    {/* <Route path="/clock" element={<Clock HSI={0} />} />
                    <Route path="/alt" element={<Altitue altitue={3000} />} />
                    <Route path="/adi" element={<Adi adi={12} />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes