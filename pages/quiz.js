import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
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

const ButtonGroup = ({ children }) => {
  return <span className="btn-group">{children}</span>;
};


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
            <form onSubmit=''>
            <p>Onde mora o Chaves?</p>
            <ButtonGroup>
              <Button>No Barril</Button>
              <Button>No 71</Button>
              <Button>No Pátio</Button>
              <Button>No 8</Button>
            </ButtonGroup>
              
              <Button type="submit">
                Salvar
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/pomborenato/aluraquiz-base" />
    </QuizBackground>
  );
}
