import React, { useContext } from 'react'
import Allvisual from './Allvisual'
import ButtonsNav from './unVisual/ButtonsNav'
import GetDataContext from '../context/getDataContext'

// Homepage component contains the 2 components 

const HomePage = () => {
    return (
        <>
        <div>
            <h1 className='text-center text-2xl text-blue-500'>AirForce Project</h1>
        <ButtonsNav />
        <Allvisual />
        </div>
        </>
    )
}

export default HomePage