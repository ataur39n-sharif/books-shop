import { ReactNode } from "react";
import { useAppSelector } from "../../Redux/hook";

interface IProps {
    children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
    const { email } = useAppSelector(state => state.authentication)

    if (!email) {
        window.location.replace('/signin')
        return (
            <>
            </>
        )
    } else {
        return children
    }
}