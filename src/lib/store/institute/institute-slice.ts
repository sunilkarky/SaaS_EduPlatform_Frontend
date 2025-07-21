import { Status } from "@/lib/types/type";
import { IInitialState, IInstituteData } from "./institute-slice-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import API from "@/lib/http";

const initialState : IInitialState = {
    institute: {
        instituteName: "",
        instituteEmail: "",
        institutePhoneNumber: "",
        instituteAddress: "",
        institutePanNumber: "",
        instituteVatNumber: ""
    },
    status:Status.LOADING
};

const instituteSlice = createSlice({
    name: "instituteSlice",
    initialState: initialState,
    reducers: {
        setInstitute: (state: IInitialState, action: PayloadAction<IInstituteData>) => {
            state.institute = action.payload;
        },
        setStatus: (state: IInitialState, action: PayloadAction<Status>) => {
            state.status = action.payload;
        }
    }
});
export const { setInstitute, setStatus } = instituteSlice.actions;
export default instituteSlice.reducer;
export function createInstitute(data: IInstituteData) {
    return async function createInstituteThunk(dispatch: AppDispatch) {
        try {
            const response = await API.post("/institute", data);
            if (response.status === 201) {
                dispatch(setInstitute(response.data));
                dispatch(setStatus(Status.SUCCESS));
            } else {
                dispatch(setStatus(Status.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR));
            console.error("Error creating institute:", error);
        }
    }
}
export function fetchInstitute() {
    return async function fetchInstituteThunk(dispatch: AppDispatch) {
        try {
            const response = await API.get("/institute");
            if (response.status === 200) {
                dispatch(setInstitute(response.data));
                dispatch(setStatus(Status.SUCCESS));
            } else {
                dispatch(setStatus(Status.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR));
            console.error("Error fetching institute:", error);
        }
    }
}