import { useParams } from "react-router-dom"
import { useAddNewBookMutation, useGetSingleBookQuery, useUpdateBookMutation } from "../../Redux/features/Books/booksApi"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { AddCircleOutline } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-hot-toast';
import { IBook } from "../../Redux/features/Books/books.slice.ts";



const defaultTheme = createTheme();

export default function EditBook() {
    const { id } = useParams()
    const bookInfo = useGetSingleBookQuery(id as string)
    const book = bookInfo?.data?.data as IBook
    // console.log(data);
    const [updateBook, { isSuccess, isLoading, data, isError, error }] = useUpdateBookMutation()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const info = {
            title: data.get('title'),
            author: data.get('author'),
            genre: data.get('genre'),
            publicationDate: data.get('publicationDate') || book.publicationDate
        }
        console.log(info);

        if (!info.author || !info.title || !info.genre || !info.publicationDate) {
            toast.error('All fields are required', { id: 'updateBook' })
        } else {
            updateBook({
                data: info as IBook,
                id: id as string,
            })
        }
    };

    if (isLoading) toast.loading('Please wait...', { id: 'updateBook' });
    if (isError) toast.error((error as any)?.data?.message, { id: 'updateBook' })
    if (isSuccess) {
        toast.success('Success. .', { id: 'updateBook' });
        console.log(data);
        setTimeout(() => {
            window.location.replace('/')
        }, 2000);
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <AddCircleOutline />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Edit book
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            autoComplete="text"
                            autoFocus
                            defaultValue={book.title}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="author"
                            label="Author"
                            name="author"
                            autoComplete="text"
                            defaultValue={book.author}
                        // autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="genre"
                            label="Genre"
                            name="genre"
                            autoComplete="text"
                            defaultValue={book.genre}

                        // autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="publish_date"
                            label="Publish Date"
                            name="publicationDate"
                            autoComplete="text"
                            type='date'

                        // autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}