import * as React from 'react';
import { useState } from 'react';
/* ----------------------------- MUI COMPONENTS ----------------------------- */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { Grid, Menu, MenuItem } from '@mui/material';
/* -------------------------------- MUI ICON -------------------------------- */
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';
import { MdAccountCircle } from "react-icons/md";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled,alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    color:'black'
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const mainPages = [
    { label: 'Home', path: '/',icon: <HomeOutlinedIcon/>},
    { label: 'Products', path: '/products',icon:<AccountBoxOutlinedIcon/> },
   

  ]
  const subPages = [
    { label: 'Login', path: '/login',icon: <HomeOutlinedIcon/>},
    { label: 'Register', path: '/register',icon:<AccountBoxOutlinedIcon/> },

  ]

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin,setIsLogin]=useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

    return (
    <React.Fragment>
        <CssBaseline />
        {/* /* ------------------------- Large device Style ------------------------ */ }
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex',sm:'flex'}}}>
            <AppBar sx={{ 
                    position:'fixed',
                    boxShadow:'none',
                    background: '#fbfaf8',
                    borderRradius: '16px',
                    backdropFilter:'blur(5px)',
                    WebkitBackdropFilter:'blur(5px)'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src="logo3.png" width={170} height={80} alt="logo" srcset="" />
                    <Box sx={{  display: { xs: 'none',sm:"flex", md: 'flex' },flexGrow:1}}>
                        {mainPages.map((page,index) => (
                            <Button
                                component={Link}
                                key={index}
                                to={page.path}
                                sx={{ my: 1,color: location.pathname === `${page.path}` ? 'GrayText' : 'black',fontFamily: 'Poppins',fontWeight:400,textTransform:'none',fontSize:'14px'}}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{  display: { xs: 'none',sm:'flex', md: 'flex' },flexGrow:1}}>
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                    <Box sx={{  display: { xs: 'flex', md: 'flex' },flexGrow:1,justifyContent:'flex-end'}}>
                            <IconButton aria-label="cart"
                             component={Link}
                             to={'/cart'}
                             sx={{ my: 1,color: location.pathname === `/cart` ? 'GrayText' : 'black',fontFamily: 'Poppins',fontWeight:400,textTransform:'none',fontSize:'14px'}}
                            >
                                <StyledBadge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                    </Box>

                    {
                        isLogin ? (
                            <>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                >
                                    <MdAccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <Box sx={{  display: { xs: 'flex', md: 'flex' },flexGrow:1,justifyContent:'center'}}>
                                {subPages.map((page,index) => (
                                    <Button
                                        component={Link}
                                        key={index}
                                        to={page.path}
                                        sx={{ my: 1,color: location.pathname === `${page.path}` ? 'GrayText' : 'black',fontFamily: 'Poppins',fontWeight:400,textTransform:'none',fontSize:'14px'}}
                                    >
                                        {page.label}
                                    </Button>
                                ))}
                            </Box>
                        )
                    }
                    
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>

        {/* /* ------------------------- Mobile Responsive Style ------------------------ */ }
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',sm:'none'} }}>
            <AppBar
                position="fixed"
                color="primary"
                sx={{
                    top: 'auto',
                    bottom: isMenuOpen ? 0 : -80,
                    transition: 'bottom 0.3s',
                    background: '#ffffff',
                    borderRradius: '16px',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                    backdropFilter:'blur(5px)',
                    WebkitBackdropFilter:'blur(5px)'
                }}
            >
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                    size="large"
                    onClick={handleOpenNavMenu}
                    >
                        <FingerprintIcon sx={{color:'orangered'}} />
                    </IconButton>
                </Toolbar>
                <Box sx={{ mb:'10px',ml:'30px'}}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {mainPages.map((page, index) => (
                            <Grid item xs={6} key={index}>
                                <Button
                                    component={Link}
                                    key={index}
                                    to={page.path}
                                    onClick={handleOpenNavMenu}
                                    sx={{ color: location.pathname === `${page.path}` ? 'GrayText' : 'black',fontFamily: 'Poppins',fontWeight:400,textTransform:'none',fontSize:'14px',gap:'5px'}}
                                >
                                    {page.icon} {page.label}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} >
                            <Box sx={{  display: { xs: 'flex',sm:'none', md: 'none' },flexGrow:1}}>
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                            </Grid>
                    </Grid>
                </Box>
            </AppBar>
        </Box>
    </React.Fragment>
      );
}

export default Header