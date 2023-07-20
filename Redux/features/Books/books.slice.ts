import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { store } from "../../store"
import { getUser } from "../Auth/auth.slice"

export interface IBook {
    _id?: string,
    title: string,
    author: string,
    publicationDate: string,
    genre: string,
    ownerId?: string,
}

interface IBooksState {
    list: IBook[],
    selectBook: IBook | undefined,
    wishlist: IBook[],
    ownBookList: IBook[],
}

interface ILoadBookPayload {
    books: IBook[] | [],
    id: string | undefined
}

const initialState: IBooksState = {
    list: [],
    selectBook: undefined,
    wishlist: [],
    ownBookList: [],
}

const BookSlice = createSlice({
    name: 'Books',
    initialState,
    reducers: {
        loadBooks: (state, action: PayloadAction<ILoadBookPayload>) => {
            const { books, id } = action.payload
            console.log({ books, id });
            state.list = books
            state.ownBookList = id ? books.filter(book => String(book.ownerId) === String(id)) : []
            state.selectBook = undefined
        },
        selectBook: (state, action: PayloadAction<string>) => {
            const list = state.list
            state.selectBook = list.find((book) => book._id === action.payload)
        }
    }
})

export const { loadBooks, selectBook } = BookSlice.actions

export default BookSlice.reducer