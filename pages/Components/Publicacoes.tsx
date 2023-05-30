import React from 'react';
import { styled } from '../../styles/stitches.config';
import Link from 'next/link';
import TrabalhosRecentes from './Publicacoes/FunctionTrabalhosMaisRecentes';

export default function Publicacoes() {
  return (
    <>
      <Container className='publicacoes'>
        <h1 data-aos="fade-right">Publicações</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
          urna, efficitur at dui non, dignissim tempus erat. Quisque malesuada
          sem turpis, vitae ultricies nisl bibendum non. Proin eu magna eget
          nisl luctus bibendum. Vestibulum quis commodo ligula, ut tempus diam.
          Ut nec posuere dolor. Maecenas euismod sit amet quam at convallis.
          Nullam quis viverra dui. Mauris tempus in neque in blandit.
        </p>
         <PubliContainer>
          <TrabalhosRecentes />
        </PubliContainer>
        <PesqButton>
          <button>
            <Link href='/Publicacoes' legacyBehavior>
              <a>Ver mais</a>
            </Link>
          </button>
        </PesqButton>
      </Container>
    </>
  );
}



const Container = styled('section', {
  flexDirection: 'column',
  padding: '100px 10em 100px 10em',
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
    padding: '50px 0em 50px 0em',
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
  display: 'flex',
  gap: '30px',

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
