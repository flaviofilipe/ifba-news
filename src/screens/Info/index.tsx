import { Linking, Text, TouchableOpacity } from 'react-native'
import { Box, BoxSocial, Content, Description, Title } from './styles'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { useCallback } from 'react';

export default function Info() {

  
  const openUrl = async (url: string) => {
    await Linking.openURL(url)
  };

  return (
    <Content>
      <Box>
        <Title>Criado por Flávio Filipe</Title>
        <Description>Criado por Flávio Filipe</Description>
        <Description>v0.01</Description>
      </Box>
      <Box>
        <Title>Social</Title>
        <BoxSocial>
          <TouchableOpacity onPress={() => openUrl("https://github.com/flaviofilipe")}>
            <AntDesign name="github" size={24} color="rgba(0, 0, 0, 0.4)" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openUrl("https://www.linkedin.com/in/flaviofilipedev/")}>
            <Entypo
              name="linkedin-with-circle"
              size={24}
              color="rgba(0, 0, 0, 0.4)"
            />
          </TouchableOpacity>
        </BoxSocial>
      </Box>
    </Content>
  )
}
