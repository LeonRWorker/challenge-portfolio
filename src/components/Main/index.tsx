
import Aside from "../Aside";
import Posts from "../Posts";
import Projects from "../Projects";
import { Container, Content, Section } from "./styles";

export default function Main () {
  return (
    <Container>
      <Content>
        <Aside />
        <Section>
          <Projects /> 
          <Posts /> 
        </Section>
      </Content>
    </Container>
  )
}