import { Status } from "@/lib/types/type";

export interface ITeacherData {
    id: string;
    name: string;
    subject: string;
}

export interface IInitialState {
    teachers: ITeacherData[];
    status: Status;
}