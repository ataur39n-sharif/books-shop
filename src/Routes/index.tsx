import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SigninPage } from "../Pages/Signin";
import { SignupPage } from "../Pages/Signup";
import SingleBook from "../Pages/SingleBook";
import PrivateRoute from "./privateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/signin',
        element: (
            <PrivateRoute>
                <SigninPage />
            </PrivateRoute>
        )
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