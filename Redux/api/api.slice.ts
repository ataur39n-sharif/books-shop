import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://books-shop-backend-production.up.railway.app/api/v1',
    }),
    endpoints:()=>({})
})