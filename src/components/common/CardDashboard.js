import React, { useEffect, useState } from 'react';
// import CardPrev from '../Cards/CardPrev'
import { connect, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { dbService } from '../../appwrite/auth';
// import databaseSlice from '../../data/slices/databaseSlice';

const CardDashboard = () => {
    const [data, setData] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        const addData = async () => {
            let data = await dbService.fetchdata();
            setData(data)
            // dispatch(databaseSlice(storeData))
        }
        addData();
    }, [])

    return (
        <>
            <div className="card-MainContainer">
                <div className="card-sideContainer">
                    <Link to={'/card'} className='header'>
                        {/* <h2>Cards</h2><i className=" fa-solid fa-plus"></i> */}
                        <button type="button" className="addColor bg-white outline-[#2fd67a] mt-3 m-2 outline outline-1 font-medium rounded-lg text-sm px-4 py-2 ml-2">Add <i className="fa-solid fa-plus-large pl-1"></i></button>
                    </Link>
                    <ul>
                        {/* <li className='textTheme'>Work</li> */}
                    </ul>
                </div>
                {/* 
                <div className='flex flex-col'>
                    <div className='card-view-con'>
                        <ul>
                            <li>Card View</li>
                            <li>QR Code</li>
                        </ul>
                    </div>
                    <CardPrev />
                </div> */}
            </div>
        </>
    )
}

export default CardDashboard

// export default connect()(CardDashboard);