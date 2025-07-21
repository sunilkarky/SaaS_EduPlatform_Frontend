import { Status } from "@/lib/types/type";

export interface IInstituteData {
    instituteName : string, 
   instituteEmail : string,
   institutePhoneNumber : string,
   instituteAddress:string, 
    institutePanNumber ?: string | null, 
    instituteVatNumber ?: string | null
}

export interface IInitialState {
    institute: IInstituteData;
    status: Status;
}