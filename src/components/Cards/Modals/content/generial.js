import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Input  } from "@material-tailwind/react";
import { updateCardData } from '../../../../Redux-store/slices/dataSlice';

export const Social = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const isSocialName = useSelector(state => state.data.isSocialName);
    return (
        <>
            <Input className="!w-[404px]" color="indigo" value={data?.cardData[isSocialName]?.value || ''} size="lg" name='value' label="Value" onChange={(e) => dispatch(updateCardData({modal: isSocialName,field: e.target.name,value: e.target.value}))} />
            <Input className="!w-[404px]" color="indigo" value={data?.cardData[isSocialName]?.label || ''} size="lg" name='label' label="Label (Optional)" onChange={(e) => dispatch(updateCardData({modal: isSocialName,field: e.target.name,value: e.target.value}))} />
        </>
    )
}