import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
{/* לינקים למעבר לכתובות אחרות עם סימון של כפתור לחוץ */}
            <nav className='text-center p-4 display-6'>
                <NavLink className= "text-center p-4 display-6" to="/"> Home</NavLink>
                <NavLink className= "text-center p-4 display-6" to="/page1">page1 </NavLink>
                <NavLink className= "text-center p-4 display-6" to="/maps">maps </NavLink>
            </nav>
        </div>
    )
}

export default Header