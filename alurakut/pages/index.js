import MainGrid from "../src/components/MainGrid"
import Box from "../src/components/Box"
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCommons"
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations"

function ProfileBox(props){
  console.log(props)
  return (
    <Box>
      <img src={`https://www.github.com/${props.githubUser}.png`} style={{borderRadius:8}}></img>
    </Box>
  )
}

export default function Home() {
  const githubUser = 'peas'
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ]
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileBox githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className='title'> Bem vindo(a) </h1>

            <OrkutNostalgicIconSet/>
          </Box>
        </div>
        
        <div className="profileRelationsArea" style={{gridArea:'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle" >Pessoas da comunidade({pessoasFavoritas.length})</h2>

            <ul>
              {pessoasFavoritas.map((item) => {
                return (
                  <li>
                    <a href={`/users/${item}`}>
                      <img src={`https://github.com/${item}.png`}></img>
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper> 
        </div>
      </MainGrid>
    </>
  )
}
