import { Container } from "react-bootstrap";
import NavBar from "../Components/Navbar";
import { Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useParams } from "react-router-dom";
import { useDeleteBookMutation, useGetSingleBookQuery } from "../../Redux/features/Books/booksApi";
import { toast } from "react-hot-toast";

const book = {
    "_id": "6427f934f98e745f8458fe83",
    "title": "My hope",
    "author": "Ataur Rahman",
    "genre": "Motivation",
    "publicationDate": "01-01-1901"
}
export default function BooksDetails() {
    const { id } = useParams()
    const { isError, isLoading, error, data } = useGetSingleBookQuery(id as string)
    const [deleteBook, status] = useDeleteBookMutation()

    console.log(data);
    const date = new Date(data?.data?.publicationDate)


    if (isLoading) {
        return <p>Loading...</p>
    }

    const handleDelete = async () => {
        await deleteBook(id as string)
    }
    if (status.isLoading) toast.loading('Please wait...', { id: 'deleteBook' });
    if (status.isError) toast.error((status.error as any)?.data?.message, { id: 'deleteBook' })
    if (status.isSuccess) {
        toast.success('Success. .', { id: 'deleteBook' });
        console.log(data);
        setTimeout(() => {
            window.location.replace('/')
        }, 2000);
    }
    return (
        < >
            <NavBar />
            <Container className="" style={{
                height: "90vh",
            }}>
                <div className="d-flex justify-content-center" style={{ height: "100%" }}>
                    <div className="d-flex align-items-center">
                        {
                            data ?
                                <div>
                                    <p>Title : {data.data.title}</p>
                                    <p>Author : {data.data.author}</p>
                                    <p>Genre : {data.data.genre}</p>
                                    <p>Publication Date : {date.toISOString().split('T')[0]}</p>
                                    <div>
                                        <Link to={`/edit-book/${data.data._id}`}>
                                            <Button size="small">View</Button>
                                        </Link>
                                        <Button size="small"><FavoriteBorderIcon /><FavoriteIcon /></Button>
                                        <Button onClick={() => handleDelete()} size="small"><DeleteIcon /></Button>
                                    </div>
                                </div> :
                                <div>
                                    <p>Something is wrong!.</p>
                                </div>
                        }
                    </div>
                </div>


            </Container>

        </>
    )
}