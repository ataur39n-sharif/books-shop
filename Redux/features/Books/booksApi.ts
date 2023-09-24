import { store } from '../../store';
import { ApiSlice } from './../../api/api.slice';
import { IBook } from './books.slice';

type TUploadPayload = {
    data: IBook,
    id: string
}

const BooksAPi = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => ({
                url: `/books`,
            })
        }),
        getSingleBook: builder.query({
            query: (id: string) => ({
                url: `/books/${id}`,
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
        }),
        updateBook: builder.mutation({
            query: (data: TUploadPayload) => ({
                url: `/books/${data.id}`,
                method: 'PATCH',
                headers: {
                    'Authorization': 'Bearer ' + store.getState().authentication.accessToken
                },
                body: data.data
            })
        }),
        deleteBook: builder.mutation({
            query: (id:string) => ({
                url: `/books/${id}`,
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + store.getState().authentication.accessToken
                },
            })
        }),
    })
})

export const { useGetBooksQuery, useAddNewBookMutation, useGetSingleBookQuery,useUpdateBookMutation ,useDeleteBookMutation} = BooksAPi