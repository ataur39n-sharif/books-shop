import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import { IBook } from "../../../Redux/features/Books/books.slice";

const book = {
    "_id": "6427f934f98e745f8458fe83",
    "title": "My hope",
    "author": "Ataur Rahman",
    "genre": "Motivation",
    "publicationDate": "01-01-1901"
}

export default function BooksCard({ cards, books }: { cards: number[], books: IBook[] }) {
    return (
        <Grid container spacing={4}>
            {books.map((book, i) => (
                <Grid item key={book._id} xs={12} sm={6} md={4}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {book.title}
                            </Typography>
                            <Typography>
                                Author: {book.author}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/book/${book._id}`}>
                                <Button size="small">View</Button>
                            </Link>
                            {/* <Button size="small">Edit</Button> */}
                            <Button size="small"><FavoriteBorderIcon /><FavoriteIcon /></Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}