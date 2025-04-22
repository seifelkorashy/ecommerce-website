import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';
import { DarkMode, WbSunny, ShoppingCart } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useCart } from './context/CartContext'; 
import { Badge } from '@mui/material';   

export default function AppBarComponent({setMode}) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate();
    const location = useLocation().pathname;
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = (path) => {
      setAnchorElNav(null);
      if (path) {
        navigate(path);
      }
    };
  
    const pages = [
      {name: 'home', path: '/'},
      {name: 'about', path: '/about'},
      {name: 'products', path: '/products'},
      {name: 'cart', path: '/cart'},
    ]
    let theme = useTheme();
    const { cartItems } = useCart();
  return (

    <AppBar position="static" sx={{backgroundColor:theme.palette.mode === "light" ? "#f0f6ff" : "#181920", padding:'0 50px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 500,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              backgroundColor:theme.palette.mode === "light" ? "#057aff"  :'#ff7ac6',
              color: theme.palette.mode === "light" ? "#fff" : '#000',
              width:'50px',
              height:'50px',
              justifyContent:'center',
              alignItems:'center',
              margin:"10px",
              borderRadius:'10px',
              fontSize:'40px',
              cursor: 'pointer'
            }}
          >
            c
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{color:theme.palette.mode === "light" ? "#000" : "#f0f6ff"}} />
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
              onClose={() => handleCloseNavMenu()}
              sx={{ display: { xs: 'block', md: 'none' }}}
            >
              {pages.map((page) => (
                <MenuItem sx={{ backgroundColor:theme.palette.mode === "light" ? "#f0f6ff" : "#181920" }} key={page.path} onClick={() => handleCloseNavMenu(page.name === 'home' ? '/' : page.name)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>

          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'center', alignItems:'center'}}>
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => handleCloseNavMenu(page.name === 'home' ? '/' : page.name)}
                sx={{ my: 2, color: theme.palette.mode === "light" ? "#999" : "#f0f6ff", display: 'block', backgroundColor: location === page.path ? theme.palette.mode === "light" ? "#021431" : '#414558' : "" , borderRadius:'5px'  }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

            <Stack direction="row" spacing={2}>
            {theme.palette.mode === "light" ?(
                  <IconButton onClick={() => {
                    localStorage.setItem("mode", "dark");
                    setMode("dark");
                  }
                  } color="inherit">
                  <DarkMode sx={{color:"#000"}}/>
                </IconButton>
            )
            :(
              <IconButton onClick={() => {
                localStorage.setItem("mode", "light");
                setMode("light");
              }
              } color="inherit">
              <WbSunny/>
            </IconButton>
            )
            }

    <IconButton component={Link} to="/cart">
      <Badge badgeContent={cartItems.length} color="secondary">
        <ShoppingCart sx={{ color: theme.palette.mode === "light" ? "#000" : "#f0f6ff" }} />
      </Badge>
    </IconButton>
            </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
