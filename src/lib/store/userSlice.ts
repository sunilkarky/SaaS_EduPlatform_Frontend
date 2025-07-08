import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialData } from "./types";


const initialState:IUserInitialData={
        name:"",
        address:""
    }
const userSlice=createSlice({
    name:"userSlice",
    initialState:{
        name:"",
        address:""
    },
    reducers:{
        setData(state:IUserInitialData,action:PayloadAction<string>){
            // state.name=action.payload
            state.name="john"
        },
        setAddress(state:IUserInitialData,action:PayloadAction<string>){
            state.address=action.payload
        }
        
    }
    
})
export const {setData,setAddress}=userSlice.actions //const user lekhekko wala export action haru
export default userSlice.reducer//const user reducer export gareko