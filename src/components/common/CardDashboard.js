import React, { useEffect, useState } from 'react';
import CardPrev from '../cardPrev/CardPrev'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { dbService } from '../../appwrite/auth';
import { storeData } from '../../data/slices/databaseSlice';
import { useLocation } from 'react-router-dom';

const CardDashboard = () => {
    
    
    const [data, setData] = useState();
    const location = useLocation();
    const headers = location.search;
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log("Workingg..");
        const addData = async () => {
            let data = await dbService.fetchdata();
            setData(data)
            dispatch(storeData(data))
        }
        addData();
    }, [dispatch])

    return (
        <>
            <div className="card-MainContainer">
                <div className="card-sideContainer">
                    <Link to={'/card'} className='header'>
                        {/* <h2>Cards</h2><i className=" fa-solid fa-plus"></i> */}
                        <button type="button" className="addColor bg-white outline-[#2fd67a] mt-3 m-2 outline outline-1 font-medium rounded-lg text-sm px-4 py-2 ml-2">Add <i className="fa-solid fa-plus-large pl-1"></i></button>
                    </Link>
                    <ul>
                        {data ? (data.map((item) => (
                            <li key={item.$id} className='border-b-2 border-r-2 cursor-pointer border-solid border-gray-100 textTheme'><Link to={`/dashboard?${item.$id}`}> {item.Time} </Link></li>
                        ))) : ''}
                    </ul>
                </div>
                {
                    headers ?
                        <>
                            <div className='flex flex-col'>
                                <div className='card-view-con'>
                                    <ul>
                                        <li>Card View</li>
                                        <li>QR Code</li>
                                    </ul>
                                </div>
                                <CardPrev />
                            </div>
                        </> : ''
                }
            </div>
        </>
    )
}

export default CardDashboard