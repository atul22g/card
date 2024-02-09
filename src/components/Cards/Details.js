import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchDetails } from '../../Redux/actions/action';
// import { useDispatch } from 'react-redux';

const Details = ({ details, fetchDetails, loader }) => {
    // const dispatch = useDispatch();

    useEffect(() => {
        fetchDetails();
    }, [fetchDetails]);
    console.log(details);
    return (
        <div className='w-[60vw] max-md:w-[100vw] mx-14 my-7'>
            {/* Heading */}
            <h1 className='text-[1.875rem] font-medium'>Create your first card</h1>
            <p className='font-light'>Ready to design your card? Pick a field below to get started!</p>
            {/* Add Images  */}
            <h3 className='text-[1.4rem] font-medium mt-5'>Add images</h3>

            {/* Add your details  */}
            <h3 className='text-[1.4rem] font-medium mt-5'>Add your details</h3>
            <h4 className='text-[0.9rem] font-medium mt-5'>Personal</h4>
            <ul className='mt-3 flex flex-row flex-wrap gap-6'>
                {!loader && details.map(data => (
                    <>
                    {data.heading === "Personal" ?
                    <li className='w-fit rounded-lg bg-[#f9fafb] cursor-pointer hover:shadow-details' key={data.id}>
                        <div className='flex flex-col justify-center items-center pt-[1.8rem] pb-2'>
                            <i className={data.icon}></i>
                            <p className='font-normal text-[0.87em] mt-6 mx-3'>{data.name}</p>
                        </div>
                    </li> : null
                    }
                    </>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    details: state.data.details,
    loader: state.data.loading,
});

export default connect(mapStateToProps, { fetchDetails })(Details);