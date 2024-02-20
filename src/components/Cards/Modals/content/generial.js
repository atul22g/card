import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Input } from "@material-tailwind/react";
import { updateCardData } from '../../../../data/slices/dataSlice';
import { findCardInon } from '../../../func/AllFunc';

export const Social = () => {
    const dispatch = useDispatch();
    const details = useSelector(state => state.details.details);
    const data = useSelector(state => state.data);
    const modal = useSelector(state => state.data.isOpen);
    let ficon = findCardInon(details, modal)
    return (
        <>
            <Input className="!w-[404px]" color="indigo" value={data?.cardData[modal]?.value || ''} size="lg" name='value' label="Value" onChange={(e) => dispatch(updateCardData({ modal: modal, field: e.target.name, value: e.target.value, icon: ficon }))} />
            <Input className="!w-[404px]" color="indigo" value={data?.cardData[modal]?.label || ''} size="lg" name='label' label="Label (Optional)" onChange={(e) => dispatch(updateCardData({ modal: modal, field: e.target.name, value: e.target.value, icon: ficon }))} />
        </>
    )
}