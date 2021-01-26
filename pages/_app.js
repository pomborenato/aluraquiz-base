/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>QUIZ DO CHAVINHO</title>
        <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
        <meta name="description" content="Imersão Alura Quiz do Chavinho" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aluraquiz-base.pomborenato.vercel.app/" />
        <meta property="og:title" content="QUIZ DO CHAVINHO" />
        <meta property="og:description" content="Imersão Alura Quiz do Chavinho" />
        <meta property="og:image" content="https://img.elo7.com.br/product/zoom/1EDA6CE/painel-lona-turma-do-chaves-desenho-animado-painel-decorativo-chaves.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aluraquiz-base.pomborenato.vercel.app/" />
        <meta property="twitter:title" content="QUIZ DO CHAVINHO" />
        <meta property="twitter:description" content="Imersão Alura Quiz do Chavinho" />
        <meta property="twitter:image" content="https://img.elo7.com.br/product/zoom/1EDA6CE/painel-lona-turma-do-chaves-desenho-animado-painel-decorativo-chaves.jpg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
