import {createSlice, PayloadAction} from "@reduxjs/toolkit"

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
            const {books, id} = action.payload
            state.list = books
            state.ownBookList = id ? books.filter(book => String(book.ownerId) === String(id)) : []
            state.selectBook = undefined
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            state.wishlist = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist') as string) : []

        },
        selectBook: (state, action: PayloadAction<string>) => {
            const list = state.list
            state.selectBook = list.find((book) => book._id === action.payload)
        },
        addToWishlist: (state, action: PayloadAction<IBook>) => {
            const payload = action.payload
            const pd = state.wishlist.find((book) => book._id === action.payload._id)
            if (!pd) {
                const update = [...state.wishlist, payload]
                localStorage.setItem('wishlist', JSON.stringify(update))
                state.wishlist = update
            } else {
                const update = state.wishlist.filter((book) => book._id !== action.payload._id)
                localStorage.setItem('wishlist', JSON.stringify(update))
                state.wishlist = update
            }
        }
    }
})

export const {loadBooks, selectBook, addToWishlist} = BookSlice.actions

export default BookSlice.reducer