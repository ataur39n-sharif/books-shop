import {Button} from '@mui/material';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Person2Icon from '@mui/icons-material/Person2';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../Redux/hook';
import {logout} from '../../../Redux/features/Auth/auth.slice';

function NavBar() {
    const {email} = useAppSelector((state) => state.authentication)
    const dispatch = useAppDispatch()

    // @ts-ignore
    return (
        <Navbar bg="dark" data-bs-theme="dark" key={"sm"} expand={"sm"}>
            <Container>
                <Navbar.Brand>
                    <Link to="/" style={{
                        textDecoration: "none"
                    }}>
                        <h2>Book's Shop</h2>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    {
                        email ? <>
                            <Navbar className='me-2'>
                                <Link to={'/dashboard'}>
                                    <Button startIcon={<Person2Icon/>} variant="outlined"
                                            className=''>DashBoard</Button>
                                </Link>
                            </Navbar>
                            <Navbar className='me-2'>
                                <Link to={'/add-book'}>
                                    <Button startIcon={<Person2Icon/>} variant="outlined" className=''>Add book</Button>
                                </Link>
                            </Navbar>
                            <Navbar>
                                <Button
                                    onClick={() => dispatch(logout())}
                                    startIcon={<Person2Icon/>}
                                    variant="outlined"
                                >
                                    Sing out
                                </Button>
                            </Navbar>
                        </> : <>
                            <Navbar>
                                <Link to={'/signin'}>
                                    <Button startIcon={<Person2Icon/>} variant="outlined">Sing In</Button>
                                </Link>
                            </Navbar>
                        </>
                    }
                    {/* <Navbar>
                        <Link to={'/signin'}>
                            <Button startIcon={<Person2Icon />} variant="outlined">Sing Out</Button>
                        </Link>
                    </Navbar> */}
                    {/* <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;