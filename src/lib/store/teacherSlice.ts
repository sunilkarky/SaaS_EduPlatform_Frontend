import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ITeacherInitialData} from "./types"

const initialTeacherData:ITeacherInitialData={
    name:"",
    data:""
}
const teacherSlice=createSlice({
    name:"teacherSlice",
    initialState:initialTeacherData,
    reducers:{
        setName(state:ITeacherInitialData,action:PayloadAction<string>){
            state.name="sunil"
        },
        setData(state:ITeacherInitialData,action:PayloadAction<string>){
            state.data="hello"
        }
    }
})
//action to access reducers
const {setName,setData}=teacherSlice.actions
export default teacherSlice.reducer
export {setName,setData}