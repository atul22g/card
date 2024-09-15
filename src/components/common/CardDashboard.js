import React, { useEffect, useState } from 'react';
import CardPrev from '../cardPrev/CardPrev'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { dbService } from '../../appwrite/auth';
import { storeData } from '../../data/slices/databaseSlice';
import { useLocation } from 'react-router-dom';

const CardDashboard = () => {


    const [data, setData] = useState();
    const location = useLocation();
    const headers = location.search;
    const user_ID = useSelector(state => state.auth.userData.$id);
    const dispatch = useDispatch();

    useEffect(() => {
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
                        <button type="button" className="addColor bg-white outline-[#2fd67a] mt-3 m-2 outline outline-1 font-medium rounded-lg text-sm px-4 py-2 ml-2">Add <i className="fa-solid fa-plus-large pl-1"></i></button>
                    </Link>
                    <ul>
                        {data ? (data.map((item, index) => {
                            return (
                            item.UserID === user_ID ?
                                <li key={index} className='border-b-2 border-r-2 cursor-pointer border-solid border-gray-100 textTheme'><Link to={`/dashboard?${item.$id}`}> {item.Time} </Link></li> : ''
                            )
                        })) : ''}
                    </ul>
                </div>
                {
                    headers ?
                        <>
                            <div className='flex flex-col card-view-con w-[20rem]'>
                                <CardPrev />
                            </div>
                        </> : ''
                }
            </div>
        </>
    )
}

export default CardDashboard