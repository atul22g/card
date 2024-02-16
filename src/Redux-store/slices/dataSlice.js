import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    savecardData: {},
    cardData: {},
    modals: {},
    isDelete: {},
    isOpen: null,
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        updateCardData(state, action) {
            const { modal, field, value } = action.payload;

            const updatedCardData = {
                ...state.cardData[modal],
                [field]: value,
            };

            // Check if all fields are empty
            const allFieldsEmpty = Object.values(updatedCardData).every(fieldValue => fieldValue === '');
            // Update state only if at least one field has a non-empty value
            if (!allFieldsEmpty) {
                state.cardData[modal] = updatedCardData;
            } else {
                // Delete the modal from cardData
                delete state.cardData[modal];
            }
        },
        openModal(state, action) {
            const modalName = action.payload;
            state.modals[modalName] = true;
            state.isOpen = modalName;
        },
        closeModal(state, action) {
            const modalName = action.payload;
            state.cardData[modalName] = {
                ...state.savecardData[modalName]
            };
            state.modals[modalName] = false;
            state.isOpen = null;
        },
        saveData(state, action) {
            const modalName = action.payload;
            state.savecardData[modalName] = {
                ...state.cardData[modalName],
                saveData: 'true'
            };
            state.modals[modalName] = false;
            state.isOpen = null;
            state.cardData[modalName] = {
                ...state.cardData[modalName],
                    saveData: 'true'
            };
        },
        openDeleteModal(state, action) {
            const { modal, itstrue } = action.payload;
            let itsDeleteVal = {
                [modal]: itstrue
            }
            state.isDelete = itsDeleteVal;
        },
        removeField(state, action) {
            const { modal, itstrue } = action.payload;
            let itsDeleteVal = {
                [modal]: itstrue
            }
            state.cardData[modal] = undefined;
            state.savecardData[modal] = undefined;
            state.isDelete = itsDeleteVal;
            state.modals[modal] = false
            state.isOpen = null;
        },
    },
});

export const { updateCardData, openModal, closeModal, saveData, openDeleteModal, removeField } = dataSlice.actions;
export default dataSlice.reducer;
