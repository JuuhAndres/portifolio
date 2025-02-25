import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import SideBar from './containers/Sidebar'
import Sobre from './containers/Info'
import EstiloGlobal, { Container } from './styles'
import Projetos from './containers/Projects'
import temaLight from './Theme/light'
import temaDark from './Theme/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)
  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <SideBar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
