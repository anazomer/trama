import React from 'react';
import { styled } from '@/styles/stitches.config';
import Link from 'next/link';
import Head from 'next/head';
import MyNavbar from './Components/Navbar1';
import Footer1 from './Components/Footer1';
import RevistaListPage from './Components/Publicacoes/FunctionRevistas';
import CongressoListPage from './Components/Publicacoes/FunctionCongressos';
import TeseListPage from './Components/Publicacoes/FunctionTeses';
import DissertacaoListPage from './Components/Publicacoes/FunctionDissertacoes';
import MySearch from './Components/Publicacoes/BarraDeBusca';
import SearchBar from './Components/Publicacoes/SearchBar';



export default function Publicacoes() {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' />
        <title>TRAMA</title>
      </Head>
      <MyNavbar />
      <MainContainer>
        <div>
          <img src='/logo.png' alt='Trama Logo' data-aos="fade-up" data-aos-duration="1500" />
        </div>
      </MainContainer>
      <Container className=''>
        <h1 data-aos="fade-right">Publicações</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
          urna, efficitur at dui non, dignissim tempus erat. Quisque malesuada
          sem turpis, vitae ultricies nisl bibendum non. Proin eu magna eget
          nisl luctus bibendum. Vestibulum quis commodo ligula, ut tempus diam.
          Ut nec posuere dolor. Maecenas euismod sit amet quam at convallis.
          Nullam quis viverra dui. Mauris tempus in neque in blandit.
        </p>
      </Container>
      <Container >
        <SearchContainer>
          <MySearch />
          <SearchBar />
        </SearchContainer>

        <PubliContainer id='periodicos'>
          <h2>Artigos completos publicados em periódicos</h2>
          <RevistaListPage />
        </PubliContainer>

        <PubliContainer id='congressos'>
          <h2>Trabalhos completos publicados em anais de congressos</h2>
          <CongressoListPage />
        </PubliContainer>

        <PubliContainer id='dissertacoes'>
          <h2>Dissertações de mestrado</h2>
          <DissertacaoListPage />
        </PubliContainer>

        <PubliContainer id='teses'>
          <h2>Teses de doutorado</h2>
          <TeseListPage />
        </PubliContainer>

        <PesqButton>
        <button>
            <Link href='/inicio' legacyBehavior>
              <a>Voltar</a>
            </Link>
          </button>
        </PesqButton>
      </Container>
      <Footer1></Footer1>
    </>
  );
}

const SearchContainer = styled('div', {

});

const MainContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  div: {
    width: '100%',
    height: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url(' + '/unsplashPartituras.jpg' + ')',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',

    '&::after': {
      content: '',
      height: '100%',
      width: '100%',
      position: 'absolute',
      background: 'whitesmoke',
      opacity: '0.4',
    },
  },

  img: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '50px',
    zIndex: '50',
  },
});

const Container = styled('section', {
  flexDirection: 'column',
  padding: '100px 10em 0px 10em',
  backgroundColor: 'whitesmoke',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',

  h1: {
    fontFamily: 'Comfortaa, cursive',
    textTransform: 'lowercase',
    letterSpacing: '2px',
    fontSize: '50px',
    fontWeight: '400',
    color: '#DA291C',
    justifyContent: 'justify',
    display: 'flex',
  },

  p: {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#555555',
    textAlign: 'justify',
    fontSize: '15px',
    lineHeight: '2.2rem',
    fontWeight: '400',
    letterSpacing: '.05rem',
    padding: '50px 0em 0px 0em',
  },
});

const PubliContainer = styled('div', {
  padding: '30px 10px 30px 10px',
  position: 'relative',
  backgroundColor: 'white',
  borderRadius: '10px',
  marginBottom: '40px',

  h2: {
    fontFamily: 'Libre Franklin, sans-serif',
    letterSpacing: '2px',
    fontSize: '25px',
    fontWeight: '400',
    color: '#8A8A8A',
    float: 'left',
    margin: '0px 0px 50px 20px',
  },
});

const PesqButton = styled('div', {
  padding: '20px 0em 50px 0em',
  justifyContent: 'center',
  position: 'relative',
  display: 'flex',

  button: {
    padding: '1em 3em 1em 3em',
    background: '#8A8A8A',
    opacity: '0.7',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
  },

  a: {
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Libre Franklin, sans-serif',
    fontSize: '16px',
    fontWeight: '600',
    letterSpacing: '.05rem',
    textTransform: 'uppercase',
  },

  ':hover': {
    color: 'white',
    background: '#555555',
    opacity: '1',
    transition: '.3s ease',
  },
});
