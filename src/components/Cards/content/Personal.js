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

            {/* JobTitle */}
            {/* Default */}
            {isOpen === 'jobTitle' && !data?.jobTitle?.jobTitle ?
                <div className={`card_personal card_personal_comman themeOutLine font-semibold text-2xl outline-offset-[1px] outline ${isOpen === 'jobTitle' ? 'card_personal_active' : ''}`}>Job title</div>
                : null}
            {/* Name */}
            {data.jobTitle && data.jobTitle.jobTitle ?
                <div onClick={() => dispatch(openModal('jobTitle'))} className={`card_personal font-semibold text-2xl themeOutLine outline-offset-[1px] outline ${isOpen === 'jobTitle' ? 'card_personal_active' : ''}`}>{data?.jobTitle?.jobTitle}</div>
                : null}

            {/* Department */}
            {/* Default */}
            {isOpen === 'department' && !data?.department?.department ?
                <div className={`card_personal card_personal_comman text-2xl themeOutLine font-semibold outline-offset-[1px] outline ${isOpen === 'department' ? 'card_personal_active' : ''}`}>Department</div>
                : null}
            {/* Name */}
            {data.department && data.department.department ?
                <div onClick={() => dispatch(openModal('department'))} className={`card_personal text-2xl font-semibold themeOutLine outline-offset-[1px] outline ${isOpen === 'department' ? 'card_personal_active' : ''}`}>{data?.department?.department}</div>
                : null}


            {/* Comany */}
            {/* Default */}
            {isOpen === 'company' && !data?.company?.company ?
                <div className={`card_personal card_personal_comman themeOutLine text-2xl font-semibold outline-offset-[1px] outline ${isOpen === 'company' ? 'card_personal_active' : ''}`}>Company Name</div>
                : null}
            {/* Name */}
            {data.company && data.company.company ?
                <div onClick={() => dispatch(openModal('company'))} className={`card_personal font-semibold text-2xl themeOutLine outline-offset-[1px] outline ${isOpen === 'company' ? 'card_personal_active' : ''}`}>{data?.company?.company}</div>
                : null}

            {/* Headline */}
            {/* Default */}
            {isOpen === 'headline' && !data?.headline?.headline ?
                <div className={`card_personal card_personal_comman themeOutLine text-sm outline-offset-[1px] outline ${isOpen === 'headline' ? 'card_personal_active' : ''}`}>Headline</div>
                : null}
            {/* Name */}
            {data.headline && data.headline.headline ?
                <div onClick={() => dispatch(openModal('headline'))} className={`card_personal text-[#525f66] text-sm themeOutLine outline-offset-[1px] outline ${isOpen === 'headline' ? 'card_personal_active' : ''}`}>{data?.headline?.headline}</div>
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