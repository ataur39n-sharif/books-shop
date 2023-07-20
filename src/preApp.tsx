import { ReactNode, useEffect } from "react";
import { useAppDispatch } from "../Redux/hook";
import { authenticate } from "../Redux/features/Auth/auth.slice";

interface IProps {
    children: ReactNode;
}

export default function PreInitApp({ children }: IProps) {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const auth = localStorage.getItem('auth')
        console.log({auth});
        
        if (auth) {
            console.log('inside auth');
            
            const { accessToken, email, id } = JSON.parse(auth)
            dispatch(authenticate({
                accessToken,
                email,
                id
            }))
        }
    }, [])
    return children
}