import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Input } from "@material-tailwind/react";
import { updateCardData } from '../../../../Redux/actions/action';


export const Name = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    console.log(data);
    return (
        <>
            <Input className="!w-[404px]" color="indigo" value={data?.cardData?.name?.firstName || ''} size="lg" name='firstName' data-modal="name" label="First name" onChange={(e) => dispatch(updateCardData(e.target.getAttribute('data-modal'), e.target.name, e.target.value))} />
            <Input className="!w-[404px]" color="indigo" value={data?.cardData?.name?.middleName || ''} size="lg" name='middleName' data-modal="name" label="Middle name" onChange={(e) => dispatch(updateCardData(e.target.getAttribute('data-modal'), e.target.name, e.target.value))} />
            <Input className="!w-[404px]" color="indigo" value={data?.cardData?.name?.lastName || ''} size="lg" name='lastName' data-modal="name" label="Last name" onChange={(e) => dispatch(updateCardData(e.target.getAttribute('data-modal'), e.target.name, e.target.value))} />
        </>
    )
}
