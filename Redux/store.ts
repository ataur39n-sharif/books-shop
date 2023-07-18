import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "./features/Auth/auth.slice"
import {ApiSlice} from "./api/api.slice.ts";

export const store = configureStore({
    reducer: {
        authentication: AuthReducer,
        [ApiSlice.reducerPath]:ApiSlice.reducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch