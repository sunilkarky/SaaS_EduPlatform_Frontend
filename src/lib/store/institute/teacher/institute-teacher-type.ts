import { Status } from "@/lib/types/type";

export enum TeacherExpertise{
    Beginner = "beginner",
    Intermediate = "intermediate",
    Pro = "pro"
}
export interface IInstituteTeacherInitialDataCourse{
   courseName: string,
   coursePrice: string,
   courseImage: string,
   courseDescription: string,
   courseDuration: string,
   courseLevel: string
}

export interface IInstituteTeacherData{
   teacherName: string | null,
   teacherEmail: string | null,
   teacherPhoneNumber: string | null,
   teacherExpertise: TeacherExpertise | null,
   teacherSalary: string | null,
   teacherJoinedDate: string | null,
   teacherImage: string,
   teacherAddress: string
}

export interface IInitialTeacherDataWithCourse extends IInstituteTeacherData{
    course ?:IInstituteTeacherInitialDataCourse
}

//main state of institute teacher slice
export interface IInstituteTeacherInitialState {
    teacher: IInitialTeacherDataWithCourse,
    status: Status
}