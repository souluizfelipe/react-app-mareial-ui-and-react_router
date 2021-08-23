import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { purple, } from '@material-ui/core/colors'

import App from './App'

import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: purple[300],
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)