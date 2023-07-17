import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SigninPage } from "../Pages/Signin";
import { SignupPage } from "../Pages/Signup";
import SingleBook from "../Pages/SingleBook";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/signin',
        element: <SigninPage />
    },
    {
        path: 'signup',
        element: <SignupPage />
    },
    {
        path: '/book/:id',
        element: <SingleBook />
    }
])

export default router