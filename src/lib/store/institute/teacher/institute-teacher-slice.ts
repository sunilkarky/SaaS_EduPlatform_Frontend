import { Status } from "@/lib/types/type";
import { IInstituteTeacherData, IInstituteTeacherInitialState, TeacherExpertise } from "./institute-teacher-type";
import { createSlice } from "@reduxjs/toolkit/react";
import { PayloadAction } from "@reduxjs/toolkit";
import API from "@/lib/http";
import { AppDispatch } from "../../store";
const initialState: IInstituteTeacherInitialState = {
    teacher: {
        teacherName: "",
        teacherEmail: "",
        teacherPhoneNumber: "",
        teacherExpertise: TeacherExpertise.Beginner,
        teacherSalary: "",
        teacherJoinedDate: "",
        teacherImage:"",
        teacherAddress:"",
        course: {
            courseName: "",
            coursePrice: "",
            courseImage: "",
            courseDescription: "",
            courseDuration: "",
            courseLevel: ""
        }
    },
    status: Status.LOADING
};
const instituteTeacherSlice = createSlice({
    name:"instituteTeacherSlice",
    initialState: initialState,
    reducers: {
        setTeachers:(state:IInstituteTeacherInitialState, action:PayloadAction<IInstituteTeacherData>)=>{
            state.teacher= action.payload;
        },
        setStatus: (state: IInstituteTeacherInitialState, action: PayloadAction<Status>) => {
            state.status = action.payload;
    }
}
})
export const { setTeachers, setStatus } = instituteTeacherSlice.actions;
export default instituteTeacherSlice.reducer;
export function createInstituteTeacher(data: IInstituteTeacherData

) {
    return async function createInstituteTeacherThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post("/institute/teacher", data);
            if (response.status === 201) {
                dispatch(setTeachers(response.data));
                dispatch(setStatus(Status.SUCCESS));
            } else {
                dispatch(setStatus(Status.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR));
            console.error("Error creating institute teacher:", error);
        }
    }
}
export function fetchInstituteTeachers() {
    return async function fetchInstituteTeachersThunk(dispatch: AppDispatch) {
        try {
            const response = await API.get("institute/teachers");
            if (response.status === 200) {
                dispatch(setStatus(Status.SUCCESS));
                response.data.data.length > 0 && dispatch(setTeachers(response.data.data));
            } else {
                dispatch(setStatus(Status.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR));
            console.error("Error fetching institute teachers:", error);
        }
    }
}
export function deleteInstituteTeacher(id:string){
    return async function deleteInstituteTeacherThunk(dispatch: AppDispatch) {
        try {
            const response = await API.delete(`/institute/teacher/${id}`);
            if (response.status === 200) {
                dispatch(setStatus(Status.SUCCESS));
                //pop out teacher from state
            } else {
                dispatch(setStatus(Status.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR));
            console.error("Error deleting institute teacher:", error);
        }
    }
}
