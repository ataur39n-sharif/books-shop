import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import SearchFilterComponent from '../Search';
import BooksCard from './card';
import {IBook} from '../../../Redux/features/Books/books.slice.ts';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function Books({books, wishlist}: { books: IBook[], wishlist: IBook[] }) {

    // const bookState = useAppSelector((state) => state.books)

    // @ts-ignore
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Book's Shop
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Something short and leading about the collection below—its contents,
                            the creator, etc. Make it short and sweet, but not too short so folks
                            don&apos;t simply skip over it entirely.
                        </Typography>
                        <Stack
                            sx={{pt: 4}}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                        </Stack>
                    </Container>
                    <Container maxWidth="md">
                        <SearchFilterComponent/>
                    </Container>
                </Box>
                <Container sx={{py: 8}} maxWidth="lg">
                    {/* End hero unit */}
                    <BooksCard books={books} wishList={wishlist}/>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright/>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}