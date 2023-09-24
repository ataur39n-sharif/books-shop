import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import {AddCircleOutline} from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {toast} from 'react-hot-toast';
import {useAddNewBookMutation} from '../../../Redux/features/Books/booksApi.ts';
import {IBook} from '../../../Redux/features/Books/books.slice.ts';

const defaultTheme = createTheme();

export default function AddBook() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const [addNewBook, {isSuccess, isLoading, data, isError, error}] = useAddNewBookMutation()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const info = {
            title: data.get('title'),
            author: data.get('author'),
            genre: data.get('genre'),
            publicationDate: data.get('publicationDate')
        }
        //console.log(info);

        if (!info.author || !info.title || !info.genre || !info.publicationDate) {
            toast.error('All fields are required', {id: 'newBook'})
        } else {
            await addNewBook(info as IBook)
        }
    };

    if (isLoading) toast.loading('Please wait...', {id: 'newBook'});
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument
    if (isError) toast.error((error as any)?.data?.message, {id: 'newBook'})
    if (isSuccess) {
        toast.success('Success. .', {id: 'newBook'});
        //console.log(data);
        setTimeout(() => {
            window.location.replace('/')
        }, 2000);
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <AddCircleOutline/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add new book
                    </Typography>
                    {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            autoComplete="text"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="author"
                            label="Author"
                            name="author"
                            autoComplete="text"
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
                            sx={{mt: 3, mb: 2}}
                        >
                            Add
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}