import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import { fetchDetails } from '../../Redux-store/slices/detailSlice';
import { openModal } from '../../Redux-store/slices/dataSlice';

const Details = ({ details, fetchDetails, loader, openModal, data }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchDetails();
    }, [fetchDetails]);
    return (
        <div className='w-[60vw] max-md:w-[100vw] mx-14 my-7'>
            {/* Heading */}
            <h1 className='text-[1.875rem] font-medium'>Create your first Card</h1>
            <p className='font-light'>Ready to design your card? Pick a field below to get started!</p>
            {/* Add Images  */}
            <h3 className='text-[1.4rem] font-medium mt-5'>Add images</h3>

            {/* Add your details  */}
            <h3 className='text-[1.4rem] font-medium mt-5'>Add your details</h3>
            {/* Personal */}
            <h4 className='text-[0.9rem] font-medium mt-5'>Personal</h4>
            <ul className='mt-3 flex flex-row detail_box flex-wrap gap-6'>
                {!loader && details.map(personal => (
                    personal.heading === "Personal" ? (
                        <li className={`${data.cardData[personal.openModal]?.saveData === 'true' ? 'isDesable' : 'isActive'} w-fit`} onClick={data.cardData[personal.openModal]?.saveData === 'true' ? null : () => dispatch(openModal({ openModal: personal.openModal }))} key={personal.id}>
                            <div className='flex flex-col justify-center items-center pt-[1.8rem] pb-2'>
                                <i className={`${personal.icon} fa-2xl`}></i>
                                <p className='font-normal text-[0.87em] mt-6 mx-3'>{personal.name}</p>
                            </div>
                        </li>
                    ) : null
                ))}
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
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.data,
    details: state.details.details,
    loader: state.details.loading,
});

export default connect(mapStateToProps, { fetchDetails, openModal })(Details);