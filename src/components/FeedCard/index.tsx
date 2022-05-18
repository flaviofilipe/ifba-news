import { Box, Date, Content, Link, Title } from './styles'
import { NewsType } from '../../domain/types'
import { formatDate } from '../../shared/utils'

interface Props {
  news: NewsType
  navigation: any
}

export default function FeedCard(props: Props) {

  const formatUrl = (link: string) => {
    const cut = link.split("https://")[1].split("/")
    return cut[0]
  }

  return (
    <Box onPress={() => props.navigation.navigate('ShowNews', {news: props.news})}>
      <Link>{formatUrl(props.news.link)}</Link>
      <Title>{props.news.title}</Title>
      <Content>{props.news.content.substring(0,120)}...</Content>
      <Date>{formatDate(props.news.updated_at)}</Date>
    </Box>
  )
}
