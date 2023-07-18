import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthentication {
    email: string;
    accessToken: string;
}
const initialState: IAuthentication = {
    email: "",
    accessToken: ""
}

export const AuthSlice = createSlice({
    name: "Authentication",
    initialState,
    reducers: {
        authenticate: (state, action: PayloadAction<IAuthentication>) => {
            state.accessToken = action.payload.accessToken
            state.email = action.payload.email
            localStorage.setItem('auth',JSON.stringify(action.payload))
        }
    }
})

export const { authenticate } = AuthSlice.actions

export default AuthSlice.reducer;