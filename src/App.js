import * as React from 'react';
import { ThemeProvider, createTheme, useMemo } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppAppBar from './components/AppAppBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Divider from '@mui/material/Divider';
import { Box, Container } from '@mui/material';
import SignIn from './pages/Login/SignIn';
import Blog from './pages/News/Blog';
import SignUp from './pages/Login/SignUp';
import { AuthContext } from './AuthContext';
import { AuthProvider } from './AuthContext';
import { Navigate } from 'react-router-dom';
export default function App() {
  const authContext = React.useContext(AuthContext);
  const isAuthenticated = AuthContext.isAuthenticated;
  const [mode, setMode] = React.useState('dark');

  /*React.useEffect(() => {
    // Check if there is a preferred mode in localStorage
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    } else {
      // If no preference is found, it uses system preference
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);*/

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
  };

  const defaultTheme = createTheme();


  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode: mode === 'dark' ? 'light' : 'dark',
      },
      typography: {
        fontFamily: ['"Ubuntu", "sans-serif"'].join(','),
        h1: {
          fontSize: defaultTheme.typography.pxToRem(48),
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: -0.5,
        },
        h2: {
          fontSize: defaultTheme.typography.pxToRem(36),
          fontWeight: 600,
          lineHeight: 1.2,
        },
        h3: {
          fontSize: defaultTheme.typography.pxToRem(30),
          lineHeight: 1.2,
        },
        h4: {
          fontSize: defaultTheme.typography.pxToRem(24),
          fontWeight: 600,
          lineHeight: 1.5,
        },
        h5: {
          fontSize: defaultTheme.typography.pxToRem(20),
          fontWeight: 600,
        },
        h6: {
          fontSize: defaultTheme.typography.pxToRem(18),
          fontWeight: 600,
        },
        subtitle1: {
          fontSize: defaultTheme.typography.pxToRem(18),
        },
        subtitle2: {
          fontSize: defaultTheme.typography.pxToRem(14),
          fontWeight: 500,
        },
        body1: {
          fontSize: defaultTheme.typography.pxToRem(14),
        },
        body2: {
          fontSize: defaultTheme.typography.pxToRem(14),
          fontWeight: 400,
        },
        caption: {
          fontSize: defaultTheme.typography.pxToRem(12),
          fontWeight: 400,
        },
      },
      shape: {
        borderRadius: 8,
      },

    }),
    [mode]
  );

  //<ThemeProvider theme={defaultTheme}>
  return (
    <AuthProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />

          <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
          <Box>
            <Container
              maxWidth="lg"
              component="main"
              sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
              <Routes>
                <Route path="/" element={isAuthenticated ? <Blog /> : <Navigate to="/login" />} />
                <Route path="/breaking-news" element={<div>самые популярные новости</div>} />
                <Route path="/profile" element={isAuthenticated ? <div>Профиль</div> : <Navigate to="/login" />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<SignUp />} />

                <Route path="*" element={<div>404</div>} />
              </Routes>
            </Container>

            <Divider />
            <Footer />
          </Box>
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}
