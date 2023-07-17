import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

const book = {
    "_id": "6427f934f98e745f8458fe83",
    "title": "My hope",
    "author": "Ataur Rahman",
    "genre": "Motivation",
    "publicationDate": "01-01-1901"
}

export default function BooksCard({ cards }: { cards: number[] }) {
    return (
        <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        {/* <CardMedia
                            component="div"
                            sx={{
                                // 16:9
                                pt: '56.25%',
                            }}
                            image="https://source.unsplash.com/random?wallpapers"
                        /> */}
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {book.title}
                            </Typography>
                            <Typography>
                                Author: {book.author}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/book/${card}`}>
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