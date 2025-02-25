import SideBar from './containers/Sidebar'
import Sobre from './containers/Info'
import EstiloGlobal, { Container } from './styles'
import Projetos from './containers/Projects'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
