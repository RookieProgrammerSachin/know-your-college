import { createSlice } from "@reduxjs/toolkit";

const collegeCategorySlice = createSlice({
    initialState: 'engineering',
    name: 'collegeCategory',
    reducers: {
        selectCategory(state, action) { state = action.payload }, 
    }
});

export const { selectCategory } = collegeCategorySlice.actions;
export default collegeCategorySlice.reducer