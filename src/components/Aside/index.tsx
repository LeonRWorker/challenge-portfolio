import { Content, Card, Dev, Name, Office, Link, Icon, Text, Legend, Tecnologies, Tecnology } from "./styles";
import { FiMapPin, FiBriefcase, FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi"
import Profile from "../../assets/profile.jpg"

export default function Aside () {
  const handleEedirectBlank = (page: string, target: string) => {
    window.open(page, target)
  }
  return (
    <Content>
      <Card>
        <Dev src={Profile} />
        <Name>Leonardo Marques</Name>
        <Office>Front End Development</Office>
      </Card>
      <Card>
        <Link>
          <Icon>
            <FiMapPin />
          </Icon>
          <Text>Brasil</Text>
        </Link>
        <Link>
          <Icon>
            <FiBriefcase />
          </Icon>
          <Text>Freelancer</Text>
        </Link>
        <Link onClick={() => { handleEedirectBlank('https://github.com/LeonRWorker', '_blank') }}>
          <Icon>
            <FiGithub />
          </Icon>
          <Text>leonrworker</Text>
        </Link>
        <Link onClick={() => { handleEedirectBlank('https://www.linkedin.com/in/leonrworker/', '_blank') }}>
          <Icon>
            <FiLinkedin />
          </Icon>
          <Text>leonrworker</Text>
        </Link>
        <Link onClick={() => { handleEedirectBlank('https://www.instagram.com/leonrworker/', '_blank') }}>
          <Icon>
            <FiInstagram />
          </Icon>
          <Text>leonrworker</Text>
        </Link>
        <Link onClick={() => { handleEedirectBlank('mailto:leonrworker@gmail.com', '_blank') }}>
          <Icon>
            <FiMail />
          </Icon>
          <Text>leonrworker@gmail.com</Text>
        </Link>
      </Card>
      <Card>
        <Legend>Tecnologias</Legend>
        <Tecnologies>
          <Tecnology>JavaScript</Tecnology>
          <Tecnology>TypeScript</Tecnology>
          <Tecnology>React JS</Tecnology>
          <Tecnology>Vue JS 3</Tecnology>
          <Tecnology>Cypress</Tecnology>
          <Tecnology>Node</Tecnology>
          <Tecnology>HTML</Tecnology>
          <Tecnology>CSS</Tecnology>
          <Tecnology>PHP</Tecnology>
          <Tecnology>MySQL</Tecnology>
          <Tecnology>SQLite3</Tecnology>
          <Tecnology>PostgreSQL</Tecnology>
        </Tecnologies>
      </Card>
    </Content>
  )
}