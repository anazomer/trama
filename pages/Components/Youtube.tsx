import React from 'react';
import { styled } from '../../styles/stitches.config';


export default function Sobre() {
  return (
    <>
      <Container className='sobre'>
        <SobreContainer>
          <h1>Conheça o nosso canal no YouTube</h1>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum obcaecati rem maxime nihil, ullam harum velit doloremque commodi quam natus voluptates cum asperiores perferendis, nesciunt iure veritatis ut fugit rerum.
            </p>
          </div>
          <ContainerButton>
            <ButtonBar>
              <button>
                <a href='https://www.youtube.com/@trama-usp' target='_blank'>TRAMA no YouTube</a>
              </button>
            </ButtonBar>
          </ContainerButton>
        </SobreContainer>
      </Container>
    </>
  );
}

const Container = styled('section', {
  margin: 'auto',
  padding: '150px 10em 150px 10em',
  backgroundColor: 'white',
  alignItems: 'center',
});

const SobreContainer = styled('section', {
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    fontFamily: 'Comfortaa, cursive',
    textTransform: 'lowercase',
    letterSpacing: '2px',
    fontSize: '30px',
    fontWeight: '800',
    color: '#8A8A8A',
    justifyContent: 'center',
    display: 'flex',
  },

  p: {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#8A8A8A',
    textAlign: 'center',
    fontSize: '15px',
    lineHeight: '2.2rem',
    fontWeight: '400',
    letterSpacing: '.05rem',
    padding: '50px 10em 0 10em',
  },

  span: {
    fontWeight: '700',
    color: '#555555',
  },
});

const ContainerButton = styled('div', {
  maxWidth: '100%',
  padding: '50px 0 0px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const ButtonBar = styled('div', {
  display: 'flex',
  gap: '300px',

  button: {
    padding: '1em 3em 1em 3em',
    background: '#DA291C',
    opacity: '0.7',
    border: '2px solid #DA291C',
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
  },

  ':hover': {
    color: 'white',
    background: '#DA291C',
    opacity: '1',
    transition: '.3s ease',
  },
});

//Falta inserir o parágrafo//