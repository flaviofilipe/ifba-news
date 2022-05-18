import { useCallback } from 'react'
import { Alert, Linking } from 'react-native'
import { NewsType } from '../../domain/types'
import { formatDate } from '../../shared/utils'
import {
  Box,
  BtnOpenSource,
  BtnOpenSourceText,
  Container,
  Content,
  ContentText,
  Span,
  Title,
} from './styles'

type Props = {
  news: NewsType
  navigation: any
  route: {
    params: {
      news: NewsType
    }
  }
}

export default function ShowNews({ route }: Props) {
  const { news } = route.params

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(news.link);

    if (supported) {
      await Linking.openURL(news.link);
    } else {
      Alert.alert(`Don't know how to open this URL: ${news.link}`);
    }
  }, [news.link]);

  return (
    <Container>
      <Box>
        <Title>{news.title}</Title>
        <Span>Publicado em: {formatDate(news.created_at)}</Span>
        <Span>Última Alteração: {formatDate(news.updated_at)}</Span>
        <Content>
          <ContentText>{news.content}</ContentText>
        </Content>
      </Box>

      <BtnOpenSource onPress={handlePress}>
        <BtnOpenSourceText>Abrir na Fonte</BtnOpenSourceText>
      </BtnOpenSource>
    </Container>
  )
}
