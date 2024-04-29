import React from 'react'
import CardPrev from '../Cards/CardPrev'

const CardDashboard = () => {
    return (
        <>
            <div className="card-MainContainer">
                <div className="card-sideContainer">
                    <div className='header'>
                        <h2>Cards</h2><i className=" fa-solid fa-plus"></i>
                    </div>
                    <ul>
                        <li className='textTheme'>Work</li>
                    </ul>
                </div>

                <div className='flex flex-col'>
                    <div className='card-topContainer'>
                        {/* Edit */}
                        <button type="button" className="textTheme themeOutLine mt-3 m-2 outline outline-1 font-medium rounded-lg text-sm px-4 py-2 ml-5">Edit <i className="fa-solid fa-pen-to-square pl-1"></i></button>
                        {/* Delete */}
                        <button type="button" className="bg-white outline-gray-200 mt-3 m-2 outline outline-1 font-medium rounded-lg text-sm px-4 py-2 ml-2">Delete <i className="fa-solid fa-trash pl-1"></i></button>
                    </div>
                <div className='card-view-con'>
                    <ul>
                        <li>Card View</li>
                        <li>QR Code</li>
                    </ul>
                </div>
                <CardPrev/>
                </div>
            </div>
        </>
    )
}

export default CardDashboard