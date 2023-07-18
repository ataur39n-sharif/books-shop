import { ApiSlice } from './../../api/api.slice';

type TLogin = {
    email: string,
    password: string
}

const AuthApiSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data
            })
        }),
        login: builder.mutation({
            query: (data: TLogin) => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            })
        })
    })
})

export const {
    useLoginMutation,
    useSignUpMutation
} = AuthApiSlice