import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link} from "react-router-dom";
import {addToWishlist, IBook} from "../../../Redux/features/Books/books.slice";
import {useAppDispatch} from "../../../Redux/hook";

// const book = {
//     "_id": "6427f934f98e745f8458fe83",
//     "title": "My hope",
//     "author": "Ataur Rahman",
//     "genre": "Motivation",
//     "publicationDate": "01-01-1901"
// }

export default function BooksCard({books, wishList}: { books: IBook[], wishList: IBook[] }) {

    const dispatch = useAppDispatch()


    return (
        <Grid container spacing={4}>
            {
                books.map((book) => (
                    <Grid item key={book._id} xs={12} sm={6} md={4}>
                        <Card
                            sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                        >
                            <CardContent sx={{flexGrow: 1}}>
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
                                <Button size="small"
                                        onClick={() => dispatch(addToWishlist(book))}
                                >
                                    {
                                        wishList.find((each) => each._id === book._id) ? <FavoriteIcon/> :
                                            <FavoriteBorderIcon/>
                                    }
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
        </Grid>
    )
}