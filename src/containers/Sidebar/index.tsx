import Avatar from '../../components/Avatar'
import Titulo from '../../components/Title'
import Paragrafo from '../../components/Paragraph'
import { Descricao, BotaoTema, SideBarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const SideBar = (props: Props) => (
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
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default SideBar
