import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteInitialData } from "./types";

const instituteInitialData:IInstituteInitialData={
    name:""
}
const instituteSlice=createSlice({
    name:"instituteSlice",
    initialState:instituteInitialData,
    reducers:{
        setName(state:IInstituteInitialData,action:PayloadAction<string>){
            state.name=action.payload
        }
    }
})
export const {setName}=instituteSlice.actions //exporting action to access reducer
export default instituteSlice.reducer //exporting reducer