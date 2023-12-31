import {ReactNode} from "react";
import {useAppSelector} from "../../Redux/hook";

interface IProps {
    children: ReactNode;
}


export default function PublicRoute({children}: IProps) {
    const {email} = useAppSelector(state => state.authentication)

    if (email) {
        window.location.replace('/')
        return (
            <>
            </>
        )
    } else {
        return children
    }


}