import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://book-shop-tl35.onrender.com/api/v1',
    }),
    endpoints:()=>({})
})