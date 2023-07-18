import { ApiSlice } from './../../api/api.slice';

const BooksAPi = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => ({
                url: '/books',
            })
        })
    })
})

export const { useGetBooksQuery } = BooksAPi