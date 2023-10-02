import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
    name: 'search' , 
    initialState : {
        filterGlobal : '' , 
        filterDepartment : '' , 
        filterStatus : null 
    },
    reducers: {
        setFilterGlobal : (state , {payload}) => {
            state.filterGlobal  = payload
        },
        setFilterDepart : (state , {payload}) => {
            state.filterDepartment  = payload
        },
        setFilterStatus : (state , {payload}) => {
            state.filterStatus  = payload
        },
    }
})

export const {setFilterDepart , setFilterStatus , setFilterGlobal} = SearchSlice.actions ; 
export default SearchSlice.reducer