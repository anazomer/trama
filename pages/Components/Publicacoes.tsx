import React from 'react';
import { styled } from '../../styles/stitches.config';
import Link from 'next/link';

export default function Publicacoes() {
  return (
    <>
      <Container className='publicacoes'>
        <h1>Publicações</h1>
        <PesqIntro>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
          urna, efficitur at dui non, dignissim tempus erat. Quisque malesuada
          sem turpis, vitae ultricies nisl bibendum non. Proin eu magna eget
          nisl luctus bibendum. Vestibulum quis commodo ligula, ut tempus diam.
          Ut nec posuere dolor. Maecenas euismod sit amet quam at convallis.
          Nullam quis viverra dui. Mauris tempus in neque in blandit.
        </PesqIntro>
        <PubliContainer>
          <div>
            <Link href='https://www.anppom.com.br/revista/index.php/opus/article/view/opus2021b2711'>
              A natureza livre de Mario Ficarelli: uma análise da obra{' '}
              <i>Maktub II</i> (1972) para violino e piano.
            </Link>
            <p>Ana Leticia Zomer e Adriana Lopes Moreira</p>
          </div>
          <div>
            <Link href='https://www.anppom.com.br/revista/index.php/opus/article/view/opus2021b2711'>
              A natureza livre de Mario Ficarelli: uma análise da obra{' '}
              <i>Maktub II</i> (1972) para violino e piano.
            </Link>
            <p>Ana Leticia Zomer e Adriana Lopes Moreira</p>
          </div>
          <div>
            <Link href='https://www.anppom.com.br/revista/index.php/opus/article/view/opus2021b2711'>
              A natureza livre de Mario Ficarelli: uma análise da obra{' '}
              <i>Maktub II</i> (1972) para violino e piano.
            </Link>
            <p>Ana Leticia Zomer e Adriana Lopes Moreira</p>
          </div>
        </PubliContainer>
        <PubliButton>
          <button>
            <Link href='#'>
              <b>Ver mais</b>
            </Link>
          </button>
        </PubliButton>
      </Container>
    </>
  );
}

export const Container = styled('section', {
  flexDirection: 'column',
  textAlign: 'center',
  margin: 'auto',
  padding: '120px 0em 80px 0em',
  backgroundColor: 'white',

  h1: {
    fontFamily: 'Comfortaa, cursive',
    textTransform: 'lowercase',
    letterSpacing: '5px',
    fontSize: '60px',
    fontWeight: '300',
    color: '#DA291C',
    margin: '0',
    justifyContent: 'center',
    marginTop: '-42px',
    background: 'white',
  },
});

export const PesqIntro = styled('p', {
  fontFamily: 'Libre Franklin, sans-serif',
  color: '#555555',
  textAlign: 'center',
  //textAlign: 'justify',
  fontSize: '16px',
  lineHeight: '2.2rem',
  fontWeight: '400',
  letterSpacing: '.05rem',
  padding: '80px 12em 0 12em',
});

export const PubliContainer = styled('div', {
  padding: '80px 8em 0 8em',
  textAlign: 'justify',
  fontFamily: 'Libre Franklin, sans-serif',
  backgroundColor: 'WhiteSmoke',
  margin: '80px 8em 0 8em',

  a: {
    textDecoration: 'none',
    letterSpacing: '2px',
    fontSize: '20px',
    fontWeight: '600',
    color: '#555555',

    ':hover': {
      color: '#DA291C',
    },
  },
  p: {
    letterSpacing: '2px',
    fontSize: '15px',
    fontWeight: '300',
    color: '#555555',
    marginTop: '15px',
    marginBottom: '15px',
  },
});

export const PubliButton = styled('div', {
  padding: '80px 8em 40px 8em',
  margin: '0px 8em 0 8em',
  //backgroundColor: 'WhiteSmoke',
  backgroundColor: 'transparent',

  button: {
    padding: '1em 3em 1em 3em',
    background: '#DA291C',
    opacity: '0.7',
    border: '2px solid #DA291C',
    cursor: 'pointer',
    justifyContent: 'right',
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
    background: '#DA291C',
    opacity: '1',
    transition: '.3s ease',
  },
});
