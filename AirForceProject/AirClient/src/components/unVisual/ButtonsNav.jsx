import React from 'react'
import { NavLink } from 'react-router-dom'
import TextButtom from './TextButtom'
import VisualButton from './VisualButton'
import PlusButtom from './PlusButtom'

const ButtonsNav = () => {
    return (
        <div>
            <nav className='flex justify-around text-center pt-10 bg-pink-200'>

                <NavLink className="text-center p-5 text-2xl" to="/table">
                    <TextButtom />
                </NavLink>
                <NavLink className="text-center p-5 text-2xl" to="/">
                    <VisualButton />
                </NavLink>
                <div className="text-center p-5 text-2xl">
                    <PlusButtom />
                </div>



            </nav>
        </div>
    )
}

export default ButtonsNav