import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import teacherSlice from "./teacherSlice";

const store=configureStore({
    reducer:{
        userSlice:userSlice,
        teacherSlice:teacherSlice
    }
})

export default store