import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";
// import teacherSlice from "./teacherSlice";
// import instituteSlice from "./instituteSlice";
// import studentSlice from "./studentSlice";

const store=configureStore({
    reducer:{
        // user:userSlice,
        // teacher:teacherSlice,
        // institute:instituteSlice,
        // student:studentSlice,

    }
})

export default store
//by default Store and slice access garne hooks ko type hudaina so use use type from store to assign type
export type AppDispatch=typeof store.dispatch //useDispatch(CUD) lai type dina chayenxa in creating custom hooks.ts
export type RootState=ReturnType<typeof store.getState>  //for useselector(select operation) custom hooks with type