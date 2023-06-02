import { ThemeProvider } from 'styled-components'

import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/defaultTheme'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
