import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchColors } from '../../Redux/actions/action';
// import { useDispatch } from 'react-redux';

const CardText = ({ details }) => {
    // const dispatch = useDispatch();

    useEffect(() => {
        fetchColors();
    }, [fetchColors]);
    return (
        <div className='w-[60vw] mx-14 my-7'>
            {/* Heading */}
            <h1 className='text-[1.875rem] font-medium'>Create your first card</h1>
            <p className='font-light'>Ready to design your card? Pick a field below to get started!</p>
            {/* Add Images  */}
            <h3 className='text-[1.4rem] font-medium mt-5'>Add images</h3>

            {/* Add your details  */}
            <h3 className='text-[1.4rem] font-medium mt-5'>Add your details</h3>
        </div>
    )
}

const mapStateToProps = state => ({
    details: state.data
});

export default connect(mapStateToProps)(CardText);