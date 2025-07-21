import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, IRegisterUserData, IUserData } from "./authSlice.type";
import { Status } from "@/lib/types/type";
import API from "@/lib/http";
import { IRegisterData } from "@/app/register/register.types";
import { AppDispatch } from "../store";
const initialState: IInitialState = {
  user: {
    username: "",
    password: ""
  },
  status: Status.LOADING
};
const authSlice= createSlice({
    name:"authSlice",
    initialState: initialState,
    reducers: {
        setUser: (state: IInitialState, action:PayloadAction<IUserData>) => {
            state.user= action.payload;
        },
        setStatus: (state: IInitialState, action: PayloadAction<Status>) => {
            state.status = action.payload;
        }
    }
})
export const {setUser, setStatus} = authSlice.actions;
export default authSlice.reducer;

//api call using async thunks
export function registerUser(data:IRegisterUserData){
    return async function registerUserThunk(dispatch:AppDispatch){
        try{
            const response=await API.post("/api/register", data);
            if(response.status === 201){
                //set status success by calling action reducers above in dispatch
                dispatch(setStatus(Status.SUCCESS));
            }else{
                dispatch(setStatus(Status.ERROR));
            }
        }catch(error){
            dispatch(setStatus(Status.ERROR));
            //handle error
            console.error("Error registering user:", error);
        }
    }
}
//loginThunk
export function loginUser(data: IUserData){
   return  async function loginUserThunk(dispatch:AppDispatch){
    try {
        const response= await API.post("/api/login", data);
        if(response.status === 200){
            dispatch(setUser(response.data));
            dispatch(setStatus(Status.SUCCESS));
        }else{
            dispatch(setStatus(Status.ERROR));
        }
    } catch (error) {
        dispatch(setStatus(Status.ERROR));
        console.error("Error logging in user:", error);
        
    }
    }
}
