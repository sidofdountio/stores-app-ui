import { AppUser } from "./app-user";

export interface CustomResponse{
    timeStamp: Date;
    statusCode:number;
    status:string;
    reason:string;
    message:string;
    developerMessage:string;
    data: {
        appusers:AppUser[], appuser?:AppUser
    }

}