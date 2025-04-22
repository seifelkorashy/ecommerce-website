import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBarComponent from './AppBar';
import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from './theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material'
import { CartProvider } from './context/CartContext';



export default function App() {


const [mode, setMode] = React.useState(localStorage.getItem("mode") || "light");  
const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <CartProvider>
    <div style={{backgroundColor:theme.palette.mode === "dark" ? "#272935" : "#fff", minHeight:"100vh"}} >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent setMode={setMode} /> 
      <Outlet />
    </ThemeProvider>
    </div>
    </CartProvider>
  );
}
