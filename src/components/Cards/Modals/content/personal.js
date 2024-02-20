import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Input, Textarea  } from "@material-tailwind/react";
import { updateCardData } from '../../../../data/slices/dataSlice';

export const Name = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    return (
        <>
            <Input className="!w-[404px]" color="indigo" value={data?.cardData?.name?.firstName || ''} size="lg" name='firstName' data-modal="name" label="First name" onChange={(e) => dispatch(updateCardData({modal: e.target.getAttribute('data-modal'),field: e.target.name,value: e.target.value}))} />
            <Input className="!w-[404px]" color="indigo" value={data?.cardData?.name?.middleName || ''} size="lg" name='middleName' data-modal="name" label="Middle name" onChange={(e) => dispatch(updateCardData({modal: e.target.getAttribute('data-modal'),field: e.target.name,value: e.target.value}))} />
            <Input className="!w-[404px]" color="indigo" value={data?.cardData?.name?.lastName || ''} size="lg" name='lastName' data-modal="name" label="Last name" onChange={(e) => dispatch(updateCardData({modal: e.target.getAttribute('data-modal'),field: e.target.name,value: e.target.value}))} />
        </>
    )
}

export const JobTitle = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    return (
        <>
            <Textarea label="Job title" size='lg' className="!w-[404px]" color="indigo" value={data?.cardData?.jobTitle?.jobTitle || ''} name='jobTitle' data-modal="jobTitle" onChange={(e) => dispatch(updateCardData({modal: e.target.getAttribute('data-modal'),field: e.target.name,value: e.target.value}))} />
        </>
    )
}

export const Department = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    return (
        <>
            <Textarea label="Department" size='lg' className="!w-[404px]" color="indigo" value={data?.cardData?.department?.department || ''} name='department' data-modal="department" onChange={(e) => dispatch(updateCardData({modal: e.target.getAttribute('data-modal'),field: e.target.name,value: e.target.value}))} />
        </>
    )
}

export const Company = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    return (
        <>
            <Textarea label="Company Name" size='lg' className="!w-[404px]" color="indigo" value={data?.cardData?.company?.company || ''} name='company' data-modal="company" onChange={(e) => dispatch(updateCardData({modal: e.target.getAttribute('data-modal'),field: e.target.name,value: e.target.value}))} />
        </>
    )
}

export const Headline = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    return (
        <>
            <Textarea label="Headline" size='lg' className="!w-[404px]" color="indigo" value={data?.cardData?.headline?.headline || ''} name='headline' data-modal="headline" onChange={(e) => dispatch(updateCardData({modal: e.target.getAttribute('data-modal'),field: e.target.name,value: e.target.value}))} />
        </>
    )
}
