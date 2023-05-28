import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import AvatarImage from '../../assets/Images/CarousalImage5.jpeg'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ColorSchema } from '../../Utils/GlobalState';
import './TopNavBarStyles.scss'
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import About from '../../Screens/About/About';
import ContactUs from '../../Screens/Contact/ContactUs';
import Home from '../../Screens/Home/Home';

type Pagetype = {
  Home: string,
  About_Me: string,
  Connect_with_me: string,
  [key: string]: string,
}

const pages : Pagetype = {
  Home: '/',
  About_Me: '/profile',
  Connect_with_me: '/contact'
}
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function TopNavBar() {
  const Colors = React.useContext(ColorSchema);
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [ActiveTab, setActiveTab] = React.useState<string | HTMLElement>('/');
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  React.useEffect(()=>{
    setActiveTab(location.pathname);
  },[location.pathname])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const TabChange = (pageName : string) => {
    setActiveTab(pages[pageName]);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: Colors.newVar.BGColor }} >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              className='Title'
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              EXPLORE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {Object.keys(pages).map((page) => (
                  <MenuItem component={Link} to={pages[page]} key={page} onClick={handleCloseNavMenu} >
                    <Typography className='TabsName' textAlign="center">{page?.includes('_') ? page?.split("_").join(" ") : page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              className='Title'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              EXPLORE
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {Object.keys(pages).map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={pages[page]}
                  className={`NavigationButtons ${ ActiveTab==pages[page] ? "NavigationButtonsActive" : ""}`}
                  onClick={()=>TabChange(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page?.includes('_') ? page?.split("_").join(" ") : page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Hi ">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={AvatarImage} />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path="profile" element={<About />} />
            <Route path="contact" element={<ContactUs />} />
        </Routes>
    </>
  );
}
export default TopNavBar;