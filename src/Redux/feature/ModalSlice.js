import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name: 'modalSlice',
    initialState: {
        deleteModal : false , 
        editModal :  false 
    },
    reducers : {
        setDeleteModal: (state , {payload}) => {
            state.deleteModal = payload
        },
        setEditModal  : (state , {payload}) => {
            state.editModal  = payload
        }
    }
})

export const {setDeleteModal , setEditModal} = ModalSlice.actions

export default ModalSlice.reducer