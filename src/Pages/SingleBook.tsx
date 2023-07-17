import { Container } from "react-bootstrap";
import NavBar from "../Components/Navbar";
import { Button } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

const book = {
    "_id": "6427f934f98e745f8458fe83",
    "title": "My hope",
    "author": "Ataur Rahman",
    "genre": "Motivation",
    "publicationDate": "01-01-1901"
}
export default function SingleBook() {
    return (
        < >
            <NavBar />
            <Container className="" style={{
                height: "90vh",
            }}>
                <div className="d-flex justify-content-center" style={{ height: "100%" }}>
                    <div className="d-flex align-items-center">
                        <div>
                            <p>Title : {book.title}</p>
                            <p>Author : {book.author}</p>
                            <p>Genre : {book.genre}</p>
                            <p>Publication Date : {book.publicationDate}</p>
                            <div>
                                <Button size="small">Edit</Button>
                                <Button size="small"><FavoriteBorderIcon /><FavoriteIcon /></Button>
                                <Button size="small"><DeleteIcon /></Button>
                            </div>
                        </div>
                    </div>
                </div>


            </Container>

        </>
    )
}