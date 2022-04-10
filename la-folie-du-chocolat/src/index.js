import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC2C2'
    },
    secondary: {
      main: '#3F4652'
    }
  },
  typography: {
    fontFamily: ['-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto'].join(',')
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
