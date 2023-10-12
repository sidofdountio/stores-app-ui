import { DataState } from "./data-state";

export interface AppState <T>{
    dateSate:DataState;
    appData?: T;
    error?: string;
}