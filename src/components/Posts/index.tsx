import { Content, Block, DropDown, Legend, Text, Nothing } from "./styles";

export default function Posts () {
  return (
    <Content>
      <Block>
        <DropDown>
          <Legend>Posts Recentes</Legend>
          <Text>Veja todos</Text>
        </DropDown>
        <Nothing>
          Ainda não há posts disponíveis
        </Nothing>
      </Block>
    </Content>
  )
}