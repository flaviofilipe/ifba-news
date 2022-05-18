import { FlatList } from 'react-native'
import FeedCard from '../../components/FeedCard'
import SearchInput from '../../components/SearchInput'
import { NewsType } from '../../domain/types'
import { Box, Divider } from './styles'

const newsMock: () => NewsType[] = () => {
  const mock: NewsType[] = []

  for (let i = 0; i < 10; i++) {
    mock.push({
      id: i.toString(),
      title:
        'Edital nº 003/2022: Inscrições prorrogadas para seleção de estágio não-obrigatório',
      content:
        'A Direção Geral do IFBA campus Vitória da Conquista publica a retificação do Edital nº 003/2022, que busca selecionar estudantes para realização de estágio não-obrigatório. A retificação prorroga o prazo de inscrições para até o dia 27 de maio. Confira o novo edital:',
      created_at: new Date(Date.now()),
      updated_at: new Date(Date.now()),
      tags: 'tag1, tag2',
      category: 'news',
      link: 'https://portal.ifba.edu.br/conquista/editais-e-resultados/edital-no-003-2022-inscricoes-prorrogadas-para-selecao-de-estagio-nao-obrigatorio',
    })
  }

  return mock
}

type Props = {
  navigation: any
}

export default function News(props: Props) {
  return (
    <Box>
      {/* <SearchInput /> */}
      <FlatList
        data={newsMock()}
        renderItem={({ item }) => (
          <FeedCard navigation={props.navigation} key={item.id} news={item} />
        )}
      ></FlatList>
    </Box>
  )
}
