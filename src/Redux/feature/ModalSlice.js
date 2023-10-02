import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name: 'modalSlice',
    initialState: {
        deleteModal : false , 
        editModal :  false  , 
        adminDelete : false 
    },
    reducers : {
        setDeleteModal: (state , {payload}) => {
            state.deleteModal = payload
        },
        setEditModal  : (state , {payload}) => {
            state.editModal  = payload
        },
        setAdminDelete : (state , {payload}) => {
            state.adminDelete = payload
        }
    }
})

export const {setDeleteModal , setEditModal , setAdminDelete} = ModalSlice.actions

export default ModalSlice.reducer