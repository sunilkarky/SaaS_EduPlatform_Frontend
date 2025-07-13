import { Status } from "@/lib/types/type";
import { createSlice } from "@reduxjs/toolkit";
import { init } from "next/dist/compiled/webpack/webpack";
const initialState = {
  teachers: [],
  status: Status.LOADING
};
const teacherSlice = createSlice({
  name: "teacherSlice",
  initialState: initialState,
  reducers: {
    setTeachers: (state, action) => {
      state.teachers = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    }
  }
});