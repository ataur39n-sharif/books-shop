import { createSlice } from "@reduxjs/toolkit";

export interface IAuthentication{
    name: {
        firstName: string | null
        lastName: string | null
    };
    email: string | null;
    accessToken: string | null;
}
const initialState: IAuthentication={
    name:{
        firstName:null,
        lastName:null
    },
    email:null,
    accessToken:null
}

export const AuthSlice = createSlice({
    name:"Authentication",
    initialState,
    reducers:{}
})

export default AuthSlice.reducer;