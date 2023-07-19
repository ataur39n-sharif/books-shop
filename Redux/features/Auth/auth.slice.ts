import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthentication {
    email: string;
    accessToken: string;
    id: string;
}
const initialState: IAuthentication = {
    email: "",
    accessToken: "",
    id: "",
}

const AuthSlice = createSlice({
    name: "Authentication",
    initialState,
    reducers: {
        authenticate: (state, action: PayloadAction<IAuthentication>) => {
            console.log(action.payload);
            
            state.accessToken = action.payload.accessToken
            state.email = action.payload.email
            state.id = action.payload.id
            localStorage.setItem('auth', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            state.accessToken = ""
            state.email = ""
            localStorage.clear()
        }
    }
})

export const { authenticate, logout } = AuthSlice.actions

export default AuthSlice.reducer;