import React from 'react'
import CardData from './content/CardData'

const CardPrev = () => {
    return (
        <>
            {/* card */}
            <div className="w-[28vw] rounded-lg mb-5 shadow-card my-4 mx-9">
                {/* Card Header */}
                <div className='w-[100%] min-h-[14vh] rounded-t-lg themeBg cardHeader'>
                    <div className='cardHeaderInner'></div>
                </div>
                {/* Card Body */}
                <div className='w-[100%] min-h-[3.1vh] rounded-b-lg flex flex-col gap-2 bg-white px-4 py-3 pt-6 pb-4'>
                <CardData/>
                </div>
            </div>
        </>
    )
}

export default CardPrev