import { ApiSlice } from './../../api/api.slice';
import { IBook } from './books.slice';

const BooksAPi = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => ({
                url: '/books',
            })
        }),
        addNewBook: builder.mutation({
            query: (data: IBook) => ({
                url: '/books',
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useGetBooksQuery } = BooksAPi