import { DataState } from "./data-state";

export interface AppState <T>{
    dataSate:DataState;
    appData?: T;
    error?: string;
}