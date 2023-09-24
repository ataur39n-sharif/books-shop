import { RootState, store } from '../../store';
import { ApiSlice } from './../../api/api.slice';
import { IBook, loadBooks } from './books.slice';

type TUploadPayload = {
    data: IBook,
    id: string
}

const BooksAPi = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: ({ search, date, genre }) => {
                const params = new URLSearchParams();

                if (search) {
                    params.append('search', search);
                }

                if (date) {
                    params.append('date', date);
                }

                if (genre) {
                    params.append('genre', genre);
                }

                const queryString = params.toString();
                const url = `/books${queryString ? `?${queryString}` : ''}`;

                return { url };
            },
            async onQueryStarted(_, { queryFulfilled, dispatch, getState }) {
                const state: RootState = getState() as RootState

                const result = await queryFulfilled
                dispatch(loadBooks({
                    books: result.data.data,
                    id: state.authentication.id
                }))
            },
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
            query: (id: string) => ({
                url: `/books/${id}`,
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + store.getState().authentication.accessToken
                },
            })
        }),
    })
})

export const { useGetBooksQuery, useLazyGetBooksQuery, useAddNewBookMutation, useGetSingleBookQuery, useUpdateBookMutation, useDeleteBookMutation } = BooksAPi