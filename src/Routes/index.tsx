import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SigninPage } from "../Pages/Signin";
import { SignupPage } from "../Pages/Signup";
import BooksDetails from "../Pages/BooksDetails";
import PrivateRoute from "./privateRoute";
import AddBook from "../Pages/AddBook";
import PublicRoute from "./publicRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/signin',
        element: (
            <PublicRoute>
                <SigninPage />
            </PublicRoute>
        )
    },
    {
        path: 'signup',
        element: (
            <PublicRoute>
                <SignupPage />
            </PublicRoute>
        )
    },
    {
        path: '/book/:id',
        element: <BooksDetails />
    },
    {
        path: '/add-book',
        element: (
            <PrivateRoute>
                <AddBook />
            </PrivateRoute>
        )
    }
])

export default router