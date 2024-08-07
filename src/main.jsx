import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline' //để đông bộ nhất quán css giữa các trình duyệt
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme} >
      <CssBaseline />
      <App />
    </ThemeProvider>

  </React.StrictMode>
)
