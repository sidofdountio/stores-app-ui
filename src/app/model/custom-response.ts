import { AuthenticationResponse } from "../auth/model/authentication-response";
import { User } from "./app-user";
import { Store } from "./store";

export interface CustomResponse{
    timeStamp: string;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    data:
    {
        users?:User[], user?:User,
        stores?:Store[],store?:User,
        authenticationResponse?: AuthenticationResponse
    }

}