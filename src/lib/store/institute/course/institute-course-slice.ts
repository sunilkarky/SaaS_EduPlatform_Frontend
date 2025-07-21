import { createSlice, PayloadAction } from "@reduxjs/toolkit";import { IInstituteCourseData, IInstituteCourseDataWithCategory, IInstituteCourseInitialState } from "./institute-course-slice-type";
import { Status } from "@/lib/types/type";
import { AppDispatch } from "../../store";
import API from "@/lib/http";
;
const initialState:IInstituteCourseInitialState = {
    courses:[{
        id: "",
        courseName: "",
        coursePrice: "",
        courseImage: "",
        courseDescription: "",
        courseDuration: "",
        courseLevel: "",
        courseThumbnail: "",
        category:{
            categoryName: "",
            categoryDescription: ""
        }
    }],
    status: Status.LOADING
}
const instituteCourseSlice = createSlice({
    name: "instituteCourse",
    initialState: initialState,
    reducers: {
        setCourses(state: IInstituteCourseInitialState, action:PayloadAction<IInstituteCourseData>) {
            state.courses.push(action.payload);////banaune yo remaining task from repo
        },
        setStatus(state: IInstituteCourseInitialState, action:PayloadAction<Status>) {
            state.status = action.payload;
        },
        setDeleteCourse(state: IInstituteCourseInitialState, action: PayloadAction<string>) {
            const index= state.courses.findIndex(course => course.id === action.payload);//id in action.payload
            if (index !== -1) {
                state.courses.splice(index, 1);
            }
        },
        setEditCourse(state: IInstituteCourseInitialState, action: PayloadAction<any>) {
            const { id, data } = action.payload;
            const index = state.courses.findIndex(course => course.id === id);
            if (index !== -1) {
                state.courses[index] = { ...state.courses[index], ...data };
            }
        }
    }
    });

export const { setCourses, setStatus, setDeleteCourse, setEditCourse } = instituteCourseSlice.actions;

export default instituteCourseSlice.reducer;

export function createInstituteCourse(data: IInstituteCourseData) {
    return async function createInstituteCourseThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post("/institute/course", data);
            if (response.status === 201) {
                dispatch(setCourses(response.data));
                dispatch(setStatus(Status.SUCCESS));
            } else {
                dispatch(setStatus(Status.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR));
            console.error("Error creating institute course:", error);
        }
    }
}
export function fetchInstituteCourses() {
    return async function fetchInstituteCoursesThunk(dispatch: AppDispatch) {
        try {
            const response = await API.get("/institute/course");
            if (response.status === 200) {
                dispatch(setCourses(response.data));
                dispatch(setStatus(Status.SUCCESS));
            } else {
                dispatch(setStatus(Status.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR));
            console.error("Error fetching institute courses:", error);
        }
    }
}
export function deleteInstituteCourse(id: string) {
    return async function deleteInstituteCourseThunk(dispatch: AppDispatch) {
        try {
            const response = await API.delete(`/institute/course/${id}`);
            if (response.status === 200) {
                dispatch(setDeleteCourse(id));
                dispatch(setStatus(Status.SUCCESS));
            } else {
                dispatch(setStatus(Status.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR));
            console.error("Error deleting institute course:", error);
        }
    }
}
export function editInstituteCourse(data: IInstituteCourseDataWithCategory, id: string) {
    return async function editInstituteCourseThunk(dispatch: AppDispatch) {
        try {
            const response = await API.put(`/institute/course/${id}`, data);
            if (response.status === 200) {
                dispatch(setEditCourse({id:id,data:data}));
                dispatch(setStatus(Status.SUCCESS));
            } else {
                dispatch(setStatus(Status.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR));
            console.error("Error editing institute course:", error);
        }
    }
}