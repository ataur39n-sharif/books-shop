import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthentication{
    email: string | null;
    accessToken: string | null;
}
const initialState: IAuthentication={
    email:null,
    accessToken:null
}

export const AuthSlice = createSlice({
    name:"Authentication",
    initialState,
    reducers:{
        authenticate:(state,action:PayloadAction<IAuthentication>)=>{
            state.accessToken = action.payload.accessToken
            state.email = action.payload.email
        }
    }
})

export default AuthSlice.reducer;