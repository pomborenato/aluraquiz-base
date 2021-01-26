import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import { useRouter } from 'next/router';

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


export const InputName = styled.div`
    position: relative;
    left: 0;
    right: 9.71%;
    top: 40.54%;
    bottom: 41.44%;
`;

export const ButtonEnviar = styled.div`
  position: relative;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;

  background: #FF5722;
  /* 1 dp */

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 4px;

  
   
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Pergunta 1 de 5</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(infosDoEvento) {
              infosDoEvento.preventDefault();
              
              router.push(`/quiz?name=${name}`);
            }}
            >
              <span>Teste os seus conhecimentos sobre o universodo Chaves e divirta-se</span>
              <InputName>
                
                
              </InputName>
              <ButtonEnviar>
                <button type="submit" >Salvar</button>
              </ButtonEnviar>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/pomborenato/aluraquiz-base" />
    </QuizBackground>
  );
}
