import { FlatList } from 'react-native'
import FeedCard from '../../components/FeedCard'
import { NewsType } from '../../domain/types'
import { Box } from './styles'
import { API } from '@env'
import { useEffect, useState } from 'react'

type Props = {
  navigation: any
}

const LIMIT_NEWS = 5

export default function News(props: Props) {
  const [news, setNews] = useState<NewsType[]>([])
  const [start, setStart] = useState(0)

  const myHeaders = new Headers({
    'Content-Type': 'application/json',
  })

  useEffect(() => getData(), [])

  const getData = () => {
    fetch(`${API}/news?_start=${start}&_limit=${LIMIT_NEWS}`, {
      method: 'GET',
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((data) => {
        setNews([...news, ...data])
        setStart(start + LIMIT_NEWS)
      })
      .catch((error) => console.log(error))
  }

  return (
    <Box>
      <FlatList
        data={news}
        onScrollEndDrag={getData}
        renderItem={({ item }) => (
          <FeedCard navigation={props.navigation} key={item.id} news={item} />
        )}
      ></FlatList>
    </Box>
  )
}
