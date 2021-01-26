import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Button from '../src/components/Button';
import Input from '../src/components/Input';

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


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz do Chavinho</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();

              router.push(`/quiz?name=${name}`);
            }}
            >
              <p>Teste os seus conhecimentos sobre o universodo Chaves e divirta-se</p>
              <Input
                placeholder="Diz aí seu nome para jogar :)"
                onChange={function (infosDoEvento) {
                  setName(infosDoEvento.target.value);
                }}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
                {' '}
                {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Em breve</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/pomborenato/aluraquiz-base" />
    </QuizBackground>
  );
}
