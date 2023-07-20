import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { store } from "../../store"

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
    wishlist: IBook[],
    ownBookList: IBook[],
}

const initialState: IBooksState = {
    list: [],
    wishlist: [],
    ownBookList: [],
}

const BookSlice = createSlice({
    name: 'Books',
    initialState,
    reducers: {
        loadBooks: (state, action: PayloadAction<IBook[]>) => {
            const data = action.payload
            state.list = data
            const id = store.getState().authentication.id
            state.ownBookList = data.filter(book => String(book.ownerId) === String(id))
        }
    }
})

export default BookSlice.reducer