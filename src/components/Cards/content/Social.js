import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { updateCardData } from '../../../Redux-store/slices/dataSlice';
import { findCardInon } from '../../func/AllFunc';

const Personal = ({ data, isOpen, details, color, saveData }) => {
    const [icon, setIcon] = useState()
    useEffect(() => {
        let ficon = findCardInon(details, isOpen)
        setIcon(ficon)
    }, [details, isOpen])
    return (
        <>
            {Object.keys(saveData).map((key) => (
                <>{saveData[key]?.icon !== undefined &&
                    <div key={key} className='flex card_social gap-2 min-h-[38px] w-full'>
                        {/* {console.log(key)} */}
                        {/* Icon */}
                        <div className={`bg-[rgb(${color})] w-12 h-11 icon_con flex justify-center items-center Social`}>
                            <i className={`${saveData[key].icon} fa-lg text-white`}></i>
                        </div>
                        {/* Text */}
                        <div className='w-full flex text_con flex-col justify-center items-start p-1'>
                            <span>{saveData[key]?.value}</span>
                            <span>{saveData[key]?.label}</span>
                        </div>
                    </div>}
                </>
            ))}
            {data[isOpen] !== '{}' && isOpen && data[isOpen]?.saveData !== 'true' && data[isOpen]?.icon !== undefined ?
                <div className='flex card_social gap-2 min-h-[38px] w-full'>
                    {/* Icon */}
                    <div className={`bg-[rgb(${color})] w-12 h-11 icon_con flex justify-center items-center Social`}>
                        <i className={`${icon} fa-lg text-white`}></i>
                    </div>
                    {/* Text */}
                    <div className='w-full flex text_con flex-col justify-center items-start p-1'>
                        <span>{data[isOpen]?.value}</span>
                        <span>{data[isOpen]?.label}</span>
                    </div>
                </div> : null
            }
        </>
    )
}

const mapStateToProps = state => ({
    saveData: state.data?.savecardData,
    data: state.data.cardData,
    isOpen: state.data.isOpen,
    color: state.colors.color,
    details: state.details.details,
});

export default connect(mapStateToProps, { updateCardData })(Personal);