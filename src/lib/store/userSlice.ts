import { createSlice } from "@reduxjs/toolkit";

const user=createSlice({
    name:"userSlice",
    initialState:{
        name:"",
        address:""
    },
    reducers:{
        setData(state,action){
            // state.name=action.payload
            state.name="john"
        },
        setAddress(state,action){
            state.address=action.payload
        }
        
    }
    
})
export const {setData,setAddress}=user.actions //const user lekhekko wala export action haru
export default user.reducer //const user reducer export gareko