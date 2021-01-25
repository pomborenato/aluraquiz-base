import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width:500px){
      margin:auto;
      padding: 15px;
    }
`;

const BackgroundImage = styled.div`
    background-image: url(${db.bg});
    flex: 1;
    background-size: cover;
    background-position: center;
`;

export default function Home() {
  console.log(db.bg)
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
       
       <Widget>
       <Widget.Header>
              <h1>Quiz do Chavinho</h1>
            </Widget.Header>
          <Widget.Content>
         
            <p>sdfsdf</p>
          </Widget.Content>
       </Widget>

       <Widget>
          <Widget.Content>
            <h1>Quiz do Chavinho</h1>
            <p>sdfsdf</p>
          </Widget.Content>
       </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="" />
    </QuizBackground>
  )
}
