import { Block, Content, DropDown, Legend, Text, Folders, Folder, Project, Description, RatesAndLanguages, Rates, Languages } from "./styles";
import { useEffect, useState } from "react"
import { FiEye, FiFolder, FiStar } from "react-icons/fi";
import axios from "axios";

interface iFolders {
  id: number
  name: string
  clone_url: string
  description: string
  stargazers_count: number
  watchers_count: number
  language: string
}


export default function Projects () {
  const [git, setGit] = useState<iFolders []>([])
  const [show, setShow] = useState(true)
  const baseURL = ' https://api.github.com'
  const handleRepositories = () => {
    axios.get(`${baseURL}/users/leonrworker/repos`).then(response => {
      const prevGit: iFolders [] = []
      response.data.forEach((repository: iFolders) => {
        if (repository.name != 'LeonRWorker') {
          prevGit.push(repository)
        }
      })
      setGit(prevGit)
    }).catch(error => {
      console.log(error)
    })
  }
  const handleRedirect = (page: string, target: string) => {
    window.open(page, target)
  }
  useEffect(() => {
    handleRepositories()
  }, [])
  return (
    <Content>
      <Block>
        <DropDown onClick={() => { setShow(show => !show) }}>
          <Legend>Meus Projetos</Legend>
          <Text>Veja todos</Text>
        </DropDown>
        { show && (<Folders>
          { git.map((project: iFolders, index: number) => (
            <Folder key={project.id} onClick={() => { handleRedirect(project.clone_url, '_blank') }}>
              <Project>
                <FiFolder />
                { project.name }
              </Project>
              <Description>
                { project.description }
              </Description>
              <RatesAndLanguages>
                <Rates>
                  <FiStar />
                  { project.stargazers_count }
                  <FiEye /> 
                  { project.watchers_count }
                </Rates>
                <Languages>
                  <Text>{ project.language }</Text>
                </Languages>
              </RatesAndLanguages>
            </Folder>
          )) }
        </Folders>)}
      </Block>
    </Content>
  )
}