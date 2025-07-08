import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialData } from "./types";
import API from "../http";


const initialState:IUserInitialData={
        name:"",
        address:""
    }
const userSlice=createSlice({
    name:"userSlice",
    initialState:initialState,
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

//api call using custom async function instead of createAsyncThunk
//Async function to handle API request
function registerUser(){
    return async function registerUserThunk(){ 
   try {
     const response=await API.post("/user/register")
    if(response.status===200){
        setData (response.data.data.name)
    }else{

    }
   } catch (error) {
    console.log(error)
   }
    }
}
function loginUser(){
    return async function loginUserThunk(){
        try {
            const response=await API.post("/user/login")
        if(response.status===200){
            console.log("success")
            }
        
        } catch (error) {
            console.log(error)
        }
    }
}
