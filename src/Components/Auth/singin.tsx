import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLoginMutation } from "../../../Redux/features/Auth/authApi.ts";
import { toast } from 'react-hot-toast';
import { useAppDispatch } from "../../../Redux/hook.ts";
import { authenticate } from '../../../Redux/features/Auth/auth.slice.ts';

const defaultTheme = createTheme();

export default function SignIn() {

  const dispatch = useAppDispatch()
  const [signIn, { isSuccess, isLoading, data, isError, error }] = useLoginMutation()
  console.log({ isSuccess, isLoading, data, isError, error });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const info = {
      email: data.get('email'),
      password: data.get('password'),
    }
    if (!info.email || !info.password) {
      toast.error('All fields are required', { id: 'login' })
    }
    signIn({
      email: data.get('email') as string,
      password: data.get('password') as string,
    })
  };

  if (isLoading) toast.loading('Please wait...', { id: 'login' });
  if (isError) toast.error((error as any)?.data?.message, { id: 'login' })
  if (isSuccess) {
    toast.success('Success. .', { id: 'login' });
    console.log(data);
    dispatch(authenticate(data.data))
    // setTimeout(() => {
    //   window.location.replace('/')
    // }, 3000);
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required={true}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}