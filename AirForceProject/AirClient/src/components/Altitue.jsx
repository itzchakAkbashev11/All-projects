import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

const Altitue = ({ altitue }) => {
    const arrowPosition = (320 / 3000) * altitue;

    return (
        <>
            <div className='flex py-8'>
            <h1 className='pr-3' >Altitue:</h1>
                <div className='border-4 border-black w-28 h-80 relative'>
                    <div className="h-full w-full flex justify-center items-center text-center relative">
                        <div className="h-full w-1  absolute left-1/2 transform -translate-x-1/2"></div>
                        <div className="absolute top-0 w-full flex flex-col items-center">
                            <h1 className="text-xs mt-2 font-bold">3000</h1>
                            <h1 className="text-xs mt-20 font-bold">2000</h1>
                            <h1 className="text-xs mt-20 font-bold">1000</h1>
                            <h1 className="text-xs mt-20 font-bold">0</h1>
                        </div>
                    </div>
                </div>
                <div className='w-12 h-80 relative'>
                    {/* Directs the arrow according to the altitue */}
                    <FaArrowLeftLong color='blue' size={35} style={{ position: 'absolute', bottom: `${arrowPosition-arrowPosition/10}px`, left: '20%', zIndex: 1 }} />
                </div>
            </div>
        </>
    )
}

export default Altitue