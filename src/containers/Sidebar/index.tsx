import Avatar from '../../components/Avatar'
import Titulo from '../../components/Title'
import Paragrafo from '../../components/Paragraph'
import { Descricao, BotaoTema, SideBarContainer } from './styles'

const SideBar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Juuh Andres</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        JuuhAndres
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default SideBar
