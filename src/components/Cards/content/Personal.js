import React from 'react'
import { connect } from 'react-redux';
import { updateCardData } from '../../../Redux/actions/action';

const Personal = ({ data, isOpen, color }) => {
    return (
        <>
            {/* Name */}
            {/* Default */}
            {isOpen === 'name' && !data?.name?.firstName && !data?.name?.middleName && !data?.name?.lastName ?
                <div className={`card_personal card_personal_comman outline-offset-[1px] outline`} style={{
                    outlineColor: `rgb(${color})`,
                    outlineWidth: `${isOpen === 'name' ? '1px' : '0px'}`
                }}>Name</div>
                : null}
            {/* Name */}
            {data.name && (data?.name?.firstName || data?.name?.middleName || data?.name?.lastName) ?
                <div className={`card_personal outline-offset-[1px] outline`} style={{
                    outlineColor: `rgb(${color})`,
                    outlineWidth: `${isOpen === 'name' ? '1px' : '0px'}`
                }}>{data?.name?.firstName} {data?.name?.middleName} {data?.ame?.lastName}</div>
                : null}
        </>
    )
}

const mapStateToProps = state => ({
    data: state.cardData.cardData,
    isOpen: state.modal.isOpen,
    color: state.colors.color
});

export default connect(mapStateToProps, { updateCardData })(Personal);