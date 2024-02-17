import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, saveData, openDeleteModal, removeField } from '../../../Redux-store/slices/dataSlice';
import * as personal from './content/personal';
import * as generial from './content/generial';

const Modal = () => {
    const data = useSelector(state => state.data);
    const modals = useSelector(state => state.data.modals);
    const isOpen = useSelector(state => state.data.isOpen);
    const isDelete = useSelector(state => state.data.isDelete);
    const dispatch = useDispatch();
    return (
        <>
            {/* Delete Modal */}
            {isDelete[isOpen] &&
                (<>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline -none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <div className="px-7 py-14 flex flex-col justify-between gap-3 min-w-[460px] min-h-[284px]">
                                    <div className='flex justify-center items-center p-3 w-[90px] rounded-full h-[90px] outline outline-1 outline-red-600'>
                                        <svg className='bg-red-600 rounded-full w-[58px] p-1 h-[58px] svg-inline--fa fa-xmark' aria-hidden="true" focusable="false" data-prefix="far" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" color="white"><path fill="currentColor" d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"></path></svg>
                                    </div>
                                    <h3 className='font-semibold text-lg'>Remove this field?</h3>
                                    <p className='text-base text-[#5c6166] font-medium'>The information will be removed</p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center border-t-2 border-gray-300 justify-end mx-2 p-6 border-solid border-blueGray-200 rounded-b">
                                    <div className='modalBtn'>
                                        <button
                                            className="cancelBtn px-5 py-2 outline-none focus:outline-none ml-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => dispatch(openDeleteModal({ modal: isOpen, itstrue: false }))} >Cancel </button>
                                        <button
                                            onClick={() => dispatch(removeField({ modal: isOpen, itstrue: false }))}
                                            className={`removeBtn px-5  py-2 outline-none focus:outline-none ml-1 mb-1 ease-linear transition-all duration-150"
                                        type="button`}
                                        >Remove </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>)
            }

            {/* Modal */}
            {(isOpen && !isDelete[isOpen]) && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline -none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <div className="px-7 py-14 flex flex-col gap-5">
                                    {/* Personal */}
                                    {modals.name && <personal.Name />}
                                    {modals.jobTitle && <personal.JobTitle />}
                                    {modals.department && <personal.Department />}
                                    {modals.company && <personal.Company />}
                                    {modals.headline && <personal.Headline />}
                                    {/* Generial */}
                                    {modals.social && <generial.Social />}
                                </div>
                                {/*footer*/}
                                <div className="flex border-t-2 border-gray-300 items-center align-middle justify-between mx-2 p-6 border-solid border-blueGray-200 rounded-b">
                                    <div className='modal_delete_btn' onClick={() => dispatch(openDeleteModal({ modal: isOpen, itstrue: true }))}>
                                        <i className="fa-duotone fa-trash fa-lg"></i>
                                    </div>
                                    <div className='modalBtn'>
                                        <button
                                            className="isActive px-5 py-2 outline-none focus:outline-none ml-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => dispatch(closeModal(isOpen))} >Close </button>
                                        <button
                                            onClick={!data.cardData[isOpen] ? null : () => dispatch(saveData(isOpen))}
                                            className={`${data.cardData[isOpen] ? 'isActive shadow hover:shadow-lg' : 'isDisable'} px-5  py-2 outline-none focus:outline-none ml-1 mb-1 ease-linear transition-all duration-150"
                                        type="button`}
                                        >Save </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    )
}


export default Modal;

