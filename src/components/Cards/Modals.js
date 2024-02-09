import React from "react";

export default function Modals() {
    const [showModal, setShowModal] = React.useState({
        modal1: false,
        modal2: false,
        // Add more modal states as needed
    });

    const openModal = (modalId) => {
        setShowModal((prevState) => ({
            ...prevState,
            [modalId]: true
        }));
    };

    const closeModal = (modalId) => {
        setShowModal((prevState) => ({
            ...prevState,
            [modalId]: false
        }));
    };

    return (
        <>
            {/* Button to open modal 1 */}
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => openModal('modal1')}
            >
                Open small modal 1
            </button>

            {/* Button to open modal 2 */}
            <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => openModal('modal2')}
            >
                Open small modal 2
            </button>

            {/* Modal 1 */}
            {showModal.modal1 && (
                <div className="...">
                    {/* Modal content */}
                    <button onClick={() => closeModal('modal1')}>Close Modal 1</button>
                </div>
            )}

            {/* Modal 2 */}
            {showModal.modal2 && (
                <div className="...">
                    {/* Modal content */}
                    <button onClick={() => closeModal('modal2')}>Close Modal 2</button>
                </div>
            )}

            {/* Add more modals as needed */}
        </>
    );
}
