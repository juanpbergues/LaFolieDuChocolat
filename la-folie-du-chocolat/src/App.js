import React from 'react'
import './app/styles/app.scss'
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button
} from '@mui/material'
import logo from './assets/images/logo.png'

const App = () => {
  const pages = ['Products', 'Pricing', 'Blog']

  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          { /* Si el tamaño de la pantalla es grande, se renderiza el logo y los botones */ }
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img src={logo} height='100vh' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default App
