import './App.css'
import NavBar from './Components/Navbar'
import Books from './Components/Books'
import { useAppDispatch, useAppSelector } from '../Redux/hook'
import { useGetBooksQuery, useLazyGetBooksQuery } from '../Redux/features/Books/booksApi'
import { loadBooks } from '../Redux/features/Books/books.slice'
import { useEffect } from 'react'

function App() {
  const bookState = useAppSelector((state) => state.books)
  const { isLoading } = useGetBooksQuery({})


  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <>
      <NavBar />
      <div>
        <Books books={bookState.list} wishlist={bookState.wishlist} />
      </div>
    </>
  )
}

export default App
