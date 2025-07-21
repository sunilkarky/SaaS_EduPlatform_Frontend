import { Status } from "@/lib/types/type";

export interface IInstituteCourseData {
    id: string,
    courseName: string,
   coursePrice: string,
   courseImage: string,
   courseDescription: string,
   courseDuration: string,
   courseLevel: string,
   courseThumbnail: string
}
export interface IIInstituteCourseCategoryData{
   categoryName: string,
   categoryDescription: string
}
export interface IInstituteCourseDataWithCategory extends IInstituteCourseData {
   category?: IIInstituteCourseCategoryData
}

export interface IInstituteCourseInitialState {
    courses: IInstituteCourseDataWithCategory[];
    status: Status;
}