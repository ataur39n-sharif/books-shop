import { Container } from "react-bootstrap";
import NavBar from "../Components/Navbar";
import { Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../Redux/features/Books/booksApi";

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

    console.log(data);
    const date = new Date(data?.data?.publicationDate)
    

    if (isLoading) {
        return <p>Loading...</p>
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
                                        <Button size="small"><DeleteIcon /></Button>
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