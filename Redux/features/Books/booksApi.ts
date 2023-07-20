import { store } from '../../store';
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
                headers: {
                    'Authorization': 'Bearer ' + store.getState().authentication.accessToken
                },
                body: data
            })
        })
    })
})

export const { useGetBooksQuery,useAddNewBookMutation } = BooksAPi