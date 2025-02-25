import Paragrafo from '../Paragraph'
import Titulo from '../Title'
import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas com vueJs</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
