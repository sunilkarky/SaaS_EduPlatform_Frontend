import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteInitialData, IStudentInitialData } from "./types";

const studentInitialData:IStudentInitialData={
    name:""
}
const studentSlice=createSlice({
    name:"studentSlice",
    initialState:studentInitialData,
    reducers:{
        setName(state:IStudentInitialData,action:PayloadAction<string>){
            state.name=action.payload
        }
    }
})
export const {setName}=studentSlice.actions //exporting action to access reducer
export default studentSlice.reducer //exporting reducer