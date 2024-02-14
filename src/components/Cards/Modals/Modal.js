import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../../Redux/actions/action';
import * as personal from './content/personal';

const Modal = () => {
    const modals = useSelector(state => state.modal.modals);
    const isOpen = useSelector(state => state.modal.isOpen);
    const dispatch = useDispatch();
    return (
        <>
            {/* Name Modal */}
            {isOpen && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <div className="px-7 py-14 flex flex-col gap-5">
                                    {modals?.name && <personal.Name />}
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-[#f45a57] border-[1px]  border-[#f45a57] px-4 py-2 rounded-xl  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  hover:bg-[#f45a57] hover:text-white"
                                        type="button"
                                        onClick={() => dispatch(closeModal(isOpen))}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-[#f45a57] border-[1px]  border-[#f45a57] px-4 py-2 rounded-xl  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  hover:bg-[#f45a57] hover:text-white"
                                        type="button"
                                        onClick={() => dispatch(closeModal(isOpen))}
                                    >Save </button>
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

