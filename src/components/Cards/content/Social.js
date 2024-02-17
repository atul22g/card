import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { updateCardData } from '../../../Redux-store/slices/dataSlice';
import { openModal } from '../../../Redux-store/slices/dataSlice';

const Personal = ({ data, isOpen }) => {
    const dispatch = useDispatch();
    return (
        <>
            {/* Name */}
            {/* Default */}
            {isOpen === 'name' && !data?.name?.firstName && !data?.name?.middleName && !data?.name?.lastName ?
                <div className={`card_personal text-3xl card_personal_comman font-bold themeOutLine outline-offset-[1px] outline ${isOpen === 'name' ? 'card_personal_active' : ''}`}>Name</div>
                : null}
            {/* Name */}
            {data.name && (data?.name?.firstName || data?.name?.middleName || data?.name?.lastName) ?
                <div onClick={() => dispatch(openModal('name'))} className={`card_personal font-bold text-3xl themeOutLine outline-offset-[1px] outline ${isOpen === 'name' ? 'card_personal_active' : ''}`}>{data?.name?.firstName} {data?.name?.middleName} {data?.name?.lastName}</div>
                : null}
        </>
    )
}

const mapStateToProps = state => ({
    data: state.data.cardData,
    isOpen: state.data.isOpen,
    color: state.colors.color
});

export default connect(mapStateToProps, { updateCardData })(Personal);