import React, { useEffect } from 'react'
import CardData from './content/CardData'
import { useDispatch, useSelector } from 'react-redux';
import { storeSingleData } from '../../data/slices/databaseSlice';
import { useLocation } from 'react-router-dom';
import { dbService } from '../../appwrite/auth';

const CardPrev = () => {
    const id = useSelector(state => state.database.singleDataId);
    const location = useLocation();
    const dispatch = useDispatch();
    const deleteBtnFunc = (id) => {
        if (window.confirm("Are You Sure")) {
            console.log(id);
        }
    }
    useEffect(() => {
        const addOneData = async () => {
            const headers = location.search;
            let data = await dbService.fetchOnedata(headers);
            dispatch(storeSingleData(data))
        }
        addOneData()
    }, [location])

    return (
        <>
            {/* card */}
            <div className="w-[100%] rounded-lg mb-5 shadow-card my-4 mx-9">
                {/* Card Header */}
                <div className='w-[100%] min-h-[14vh] rounded-t-lg themeBg cardHeader cardHeaderbtnCon'>
                    <div className='cardHeaderbtn editBtn'><i className="fa-solid fa-pen-to-square"></i></div>
                    <div onClick={() => deleteBtnFunc(id)} className='cardHeaderbtn deleteBtn'><i className="fa-solid fa-trash"></i></div>
                    <div className='cardHeaderInner'></div>
                </div>
                {/* Card Body */}
                <div className='w-[100%] min-h-[3.1vh] rounded-b-lg flex flex-col gap-2 bg-white px-4 py-3 pt-6 pb-4'>
                    <CardData />
                </div>
            </div>
        </>
    )
}

export default CardPrev