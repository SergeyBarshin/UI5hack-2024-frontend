import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Sitemark from './SitemarkIcon';
import ToggleColorMode from './ToggleColorMode';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Import the ExitToAppIcon


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function AppAppBar({ mode, toggleColorMode, }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 5 }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" sx={{ color: 'text.primary' }} size="small">
                <StyledLink to="/">Лента</StyledLink>
              </Button>
              <Button variant="text" sx={{ color: 'text.primary' }} size="small">
                <StyledLink to="/breaking-news">Популярное</StyledLink>
              </Button>
              <Button variant="text" sx={{ color: 'text.primary' }} size="small">
                <StyledLink to="/profile">Профиль</StyledLink>
              </Button>

            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            
            <ToggleColorMode
              data-screenshot="toggle-mode"
              mode={mode}
              toggleColorMode={toggleColorMode}
            />
            <IconButton variant="outlined" sx={{ color: 'text.primary'}} size="small">
              <StyledLink to="/" sx={{ color: 'text.primary', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ExitToAppIcon sx={{ color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
              </StyledLink>
            </IconButton>
          </Box>

          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <StyledLink to="/">Лента</StyledLink>
                </MenuItem>

                <MenuItem>
                  <StyledLink to="/products">Популярное</StyledLink>
                </MenuItem>

                <MenuItem>
                  <StyledLink to="/news">Профиль</StyledLink>
                </MenuItem>




                <MenuItem>
                  <ToggleColorMode
                    data-screenshot="toggle-mode"
                    mode={mode}
                    toggleColorMode={toggleColorMode}
                  />
                </MenuItem>

              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

AppAppBar.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  showCustomTheme: PropTypes.bool.isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default AppAppBar;
