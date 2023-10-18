import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './config/mui-theme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyle } from './config/global-style';
ReactDOM.createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <App />
    <CssBaseline />
    <GlobalStyle />
    </ThemeProvider>
    </BrowserRouter>
)
