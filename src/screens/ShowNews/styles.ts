import styled from "styled-components/native"

export const Container = styled.View`
  display: flex;
  background-color: white;
  height: 100%;
  justify-content: space-between;
`

export const Box = styled.View`
  display: flex;
  padding: 20px;
`

export const Title = styled.Text`
  font-size: 16px;
  color: #0F7ECE;
`

export const Span = styled.Text`
  color: #9F9E9E;
`
export const Content = styled.View`
  margin-top: 20px;
`

export const ContentText = styled.Text`
  color: #2F2F2F;
`

export const BtnOpenSource = styled.TouchableOpacity`
  display: flex;
  background-color: #0F7ECE;
  padding: 10px;
  justify-content: center;
  align-items: center;
`

export const BtnOpenSourceText = styled.Text`
  font-size: 16px;
  color: white;
`