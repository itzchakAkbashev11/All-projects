import React, { useContext } from 'react'
import Clock from '../components/Clock'
import Altitue from '../components/Altitue'
import Adi from '../components/Adi'
import GetDataContext from '../context/getDataContext'

// Allvisual component show the all visual themes in one component

const Allvisual = () => {
  const { data, setData } = useContext(GetDataContext)

  return (
    <>
      <div className='flex justify-around text-center lg:flex-row flex-col mx-auto p-10 items-center'>
        <Altitue altitue={data.atltitue} className="lg:w-1/3" />
        <Clock HSI={data.his} className="lg:w-1/3" />
        <Adi adi={data.adi} className="lg:w-1/3" />
      </div>

    </>
  )
}

export default Allvisual