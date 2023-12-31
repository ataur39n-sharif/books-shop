import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "./features/Auth/auth.slice"
import { ApiSlice } from "./api/api.slice.ts";
import BooksReducer from "./features/Books/books.slice"

export const store = configureStore({
    reducer: {
        authentication: AuthReducer,
        books:BooksReducer,
        [ApiSlice.reducerPath]: ApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch