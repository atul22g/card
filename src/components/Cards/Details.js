import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../../data/slices/detailSlice';
import { openModal, setCardData } from '../../data/slices/dataSlice';
import { isEmpty } from '../func/AllFunc';
import { dbService } from "../../appwrite/auth";
import { useLocation } from 'react-router-dom';
import { storeSingleData } from '../../data/slices/databaseSlice';


const Details = ({ details, fetchDetails, loader, openModal, data, user }) => {
    const [fetched, setFetched] = useState(false);
    const sData = useSelector(state => state.database.singleData);
    const dispatch = useDispatch();
    const location = useLocation();
    const headers = location.search;

    useEffect(() => {
        if (!fetched) {
            const addOneData = async () => {
                try {
                    let data = await dbService.fetchOnedata(headers);
                    dispatch(storeSingleData(data));
                } catch (error) {
                    console.error(error);
                }
            };

            const storeOneData = (sData) => {
                dispatch(setCardData(sData));
            };

            if (headers) {
                storeOneData(sData);
                addOneData();
            }
            fetchDetails();
        }

        if (isEmpty(headers)) {
            setFetched(true);
        }
        if (!isEmpty(sData)) {
            setFetched(true);
        }

    }, [dispatch, fetchDetails, headers, details, fetched, sData]);

    return (
        <div className='w-[60vw] max-md:w-[100vw] mx-14 my-7 absolute card_con_right left-[33vw] top-0 bottom-0 right-0'>
            {/* Heading */}
            <h1 className='text-[1.875rem] font-medium'>Create your first Card</h1>
            <p className='font-light'>Ready to design your card? Pick a field below to get started!</p>

            {/* Add your details  */}
            <h3 className='text-[1.4rem] font-medium mt-5'>Add your details</h3>
            {/* Personal */}
            <h4 className='text-[0.9rem] font-medium mt-5'>Personal</h4>
            <ul className='mt-3 flex flex-row detail_box flex-wrap gap-6'>
                {!loader && details.map((personal) => {
                    return (
                        personal.heading === "Personal" ? (
                            <li className={`${data.cardData[personal.openModal]?.saveData === 'true' ? 'isDesable' : 'isActive'} w-fit`} onClick={data.cardData[personal.openModal]?.saveData === 'true' ? null : () => dispatch(openModal({ openModal: personal.openModal }))} key={personal.id}>
                                <div className='flex flex-col justify-center items-center pt-[1.8rem] pb-2'>
                                    <i className={`${personal.icon} fa-2xl`}></i>
                                    <p className='font-normal text-[0.87em] mt-6 mx-3'>{personal.name}</p>
                                </div>
                            </li>
                        ) : null)
                })}
            </ul>
            {/* General */}
            <h4 className='text-[0.9rem] font-medium mt-5'>General</h4>
            <ul className='mt-3 flex flex-row detail_box flex-wrap gap-6'>
                {!loader && details.map(General => (
                    General.heading === "General" ? (
                        <li className={`${data.cardData[General.socialName]?.saveData === 'true' ? 'isDesable' : 'isActive'} w-fit`} onClick={data.cardData[General.socialName]?.saveData === 'true' ? null : () => dispatch(openModal({ openModal: General.openModal, name: General.socialName }))} key={General.id}>
                            <div className='flex flex-col justify-center items-center pt-[1.8rem] pb-2'>
                                <i className={`${General.icon} fa-2xl`}></i>
                                <p className='font-normal text-[0.87em] mt-6 mx-3'>{General.name}</p>
                            </div>
                        </li>
                    ) : null
                ))}
            </ul>
            {/* Social */}
            <h4 className='text-[0.9rem] font-medium mt-5'>Social</h4>
            <ul className='mt-3 flex flex-row detail_box flex-wrap gap-6'>
                {!loader && details.map(General => (
                    General.heading === "Social" ? (
                        <li className={`${data.cardData[General.socialName]?.saveData === 'true' ? 'isDesable' : 'isActive'} w-fit`} onClick={data.cardData[General.socialName]?.saveData === 'true' ? null : () => dispatch(openModal({ openModal: General.openModal, name: General.socialName }))} key={General.id}>
                            <div className='flex flex-col justify-center items-center pt-[1.8rem] pb-2'>
                                <i className={`${General.icon} fa-2xl`}></i>
                                <p className='font-normal text-[0.87em] mt-6 mx-3'>{General.name}</p>
                            </div>
                        </li>
                    ) : null
                ))}
            </ul>
            {/* Messaging */}
            <h4 className='text-[0.9rem] font-medium mt-5'>Messaging</h4>
            <ul className='mt-3 flex flex-row detail_box flex-wrap gap-6'>
                {!loader && details.map(General => (
                    General.heading === "Messaging" ? (
                        <li className={`${data.cardData[General.socialName]?.saveData === 'true' ? 'isDesable' : 'isActive'} w-fit`} onClick={data.cardData[General.socialName]?.saveData === 'true' ? null : () => dispatch(openModal({ openModal: General.openModal, name: General.socialName }))} key={General.id}>
                            <div className='flex flex-col justify-center items-center pt-[1.8rem] pb-2'>
                                <i className={`${General.icon} fa-2xl`}></i>
                                <p className='font-normal text-[0.87em] mt-6 mx-3'>{General.name}</p>
                            </div>
                        </li>
                    ) : null
                ))}
            </ul>
            {/* Business */}
            <h4 className='text-[0.9rem] font-medium mt-5'>Business</h4>
            <ul className='mt-3 flex flex-row detail_box flex-wrap gap-6'>
                {!loader && details.map(General => (
                    General.heading === "Business" ? (
                        <li className={`${data.cardData[General.socialName]?.saveData === 'true' ? 'isDesable' : 'isActive'} w-fit`} onClick={data.cardData[General.socialName]?.saveData === 'true' ? null : () => dispatch(openModal({ openModal: General.openModal, name: General.socialName }))} key={General.id}>
                            <div className='flex flex-col justify-center items-center pt-[1.8rem] pb-2'>
                                <i className={`${General.icon} fa-2xl`}></i>
                                <p className='font-normal text-[0.87em] mt-6 mx-3'>{General.name}</p>
                            </div>
                        </li>
                    ) : null
                ))}
            </ul>
            {/* Payment */}
            <h4 className='text-[0.9rem] font-medium mt-5'>Payment</h4>
            <ul className='mt-3 flex flex-row detail_box flex-wrap gap-6 pb-2'>
                {!loader && details.map(General => (
                    General.heading === "Payment" ? (
                        <li className={`${data.cardData[General.socialName]?.saveData === 'true' ? 'isDesable' : 'isActive'} w-fit`} onClick={data.cardData[General.socialName]?.saveData === 'true' ? null : () => dispatch(openModal({ openModal: General.openModal, name: General.socialName }))} key={General.id}>
                            <div className='flex flex-col justify-center items-center pt-[1.8rem] pb-2'>
                                <i className={`${General.icon} fa-2xl`}></i>
                                <p className='font-normal text-[0.87em] mt-6 mx-3'>{General.name}</p>
                            </div>
                        </li>
                    ) : null
                ))}
            </ul>
            <div className='cardBottom_sticky sticky bottom-0 h-7 flex justify-between items-center gap-3 py-14 px-2'>
                <p className='font-[.875rem] w-[60vw] bg-white py-1'>Creatd by ❤️ by  <a className='text-[#3192d8]' href='https://github.com/Atugatran'>Atugatran</a></p>
                {
                    !headers ? (
                        <button onClick={() => dbService.AddData(user, data.savecardData,)} className={`${isEmpty(data.cardData) ? 'disable-btn' : 'Primay-btn'} btn w-[18vw]`} type="button">Create Card</button>
                    ) : (
                        <button onClick={() => dbService.updateData(headers, user, data.savecardData)} className={`${isEmpty(data.cardData) ? 'disable-btn' : 'Primay-btn'} btn w-[18vw]`} type="button">Update Card</button>
                    )


                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.data,
    user: state.auth.userData,
    details: state.details.details,
    loader: state.details.loading,
});

export default connect(mapStateToProps, { fetchDetails, openModal })(Details);