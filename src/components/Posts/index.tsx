import { useState } from "react";
import { Content, Block, DropDown, Legend, Text, Nothing } from "./styles";

export default function Posts () {
  const [show, setShow] = useState(true)
  return (
    <Content>
      <Block>
        <DropDown onClick={() => { setShow(show => !show) }}>
          <Legend>Posts Recentes</Legend>
          <Text>Veja todos</Text>
        </DropDown>
        { !show && (
          <Nothing>
            Ainda não há posts disponíveis
          </Nothing>
        ) }
      </Block>
    </Content>
  )
}