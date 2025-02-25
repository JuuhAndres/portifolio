import Titulo from '../../components/Title'
import Paragrafo from '../../components/Paragraph'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
      distinctio officia sunt sit? Libero aliquid voluptate, explicabo nisi,
      ullam voluptates cumque sunt error magnam eos sint. Aut commodi porro ad!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=JuuhAndres&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JuuhAndres&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
