import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { updateCardData } from '../../../Redux-store/slices/dataSlice';
// import { openModal } from '../../../Redux-store/slices/dataSlice';y
import { findCardInon } from '../../func/AllFunc';

const Personal = ({ data, isOpen, details }) => {
    const [icon, setIcon] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
        let ficon = findCardInon(details, isOpen)
        setIcon(ficon)
    }, [isOpen])
    return (
        <>
        </>
    )
}

const mapStateToProps = state => ({
    data: state.data.cardData,
    isOpen: state.data.isOpen,
    color: state.colors.color,
    details: state.details.details,
});

export default connect(mapStateToProps, { updateCardData })(Personal);