import React from 'react';
import { styled } from '../../styles/stitches.config';

export default function UniversityLogos() {
  return (
    <>
      <Logos>
        <LogosContainer>
          <Grid1 href='https://www5.usp.br/' target='_blank'>
            <div>
              <img src='/usp1.png' />
            </div>
            <Info1>
              <h2>Saiba mais:</h2>
              <p>Universidade de São Paulo</p>
            </Info1>
          </Grid1>
          <Grid2 href='https://www.eca.usp.br/' target='_blank'>
            <div>
              <img src='/logoeca.png' />
            </div>
            <Info2>
              <h2>Saiba mais:</h2>
              <p>Escola de Comunicação e Artes de São Paulo</p>
            </Info2>
          </Grid2>
          <Grid3
            href='https://www.eca.usp.br/cmu/laboratorios-didaticos'
            target='_blank'
          ><div>
              <img src='/pam.png' />
            </div>
            <Info2>
              <h2>Saiba mais:</h2>
              <p>Laboratório de Percepção e Análise Musical</p>
            </Info2>
          </Grid3>
          <Grid4 href='https://eitam5.nics.unicamp.br/' target='_blank'>
            <div>
              <img src='/eitam2.png' />
            </div>
            <Info2>
              <h2>Saiba mais:</h2>
              <p>Encontro Internacional de Teoria e Análise Musical</p>
            </Info2>
          </Grid4>
        </LogosContainer>
      </Logos>
    </>
  );
}

const Logos = styled('section', {
  padding: '70px 10em 150px 10em',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const LogosContainer = styled('div', {
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: '1fr',
  margin: 'auto',
  position: 'relative',
  marginTop: '-200px',
  zIndex: '100',
});

const Grid1 = styled('a', {
  background: 'rgba (255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px 20px 0 0',
  boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  transition: 'all .2s ease-in-out ',
  textDecoration: 'none',
  justifyContent: 'center',
  flexDirection: 'column',

  img: {
    maxWidth: '200px',
    maxHeight: '50px',
    width: 'auto',
    height: 'auto',
    margin: 'auto',
    display: 'flex',
    marginTop: '50px',
    marginBottom: '30px',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '&:hover': {
    transform: 'translateY(-140px)',
    transition: 'all .3s ease ',
  },
});

const Grid2 = styled('a', {
  background: 'rgba (255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px 20px 0 0',
  boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  transition: 'all .2s ease-in-out ',
  textDecoration: 'none',
  justifyContent: 'center',
  flexDirection: 'column',

  img: {
    maxWidth: '200px',
    maxHeight: '50px',
    width: 'auto',
    height: 'auto',
    margin: 'auto',
    display: 'flex',
    marginTop: '50px',
    marginBottom: '30px',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '&:hover': {
    transform: 'translateY(-140px)',
    transition: 'all .3s ease ',
  },
});

const Grid3 = styled('a', {
  background: 'rgba (255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px 20px 0 0',
  boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  transition: 'all .2s ease-in-out ',
  textDecoration: 'none',
  justifyContent: 'center',
  flexDirection: 'column',

  img: {
    maxWidth: '200px',
    maxHeight: '50px',
    width: 'auto',
    height: 'auto',
    margin: 'auto',
    display: 'flex',
    marginTop: '50px',
    marginBottom: '30px',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '&:hover': {
    transform: 'translateY(-140px)',
    transition: 'all .3s ease ',
  },
});

const Grid4 = styled('a', {
  background: 'rgba (255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px 20px 0 0',
  boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  transition: 'all .2s ease-in-out ',
  textDecoration: 'none',
  justifyContent: 'center',
  flexDirection: 'column',

  img: {
    maxWidth: '200px',
    maxHeight: '50px',
    width: 'auto',
    height: 'auto',
    margin: 'auto',
    display: 'flex',
    marginTop: '50px',
    marginBottom: '30px',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '&:hover': {
    transform: 'translateY(-140px)',
    transition: 'all .3s ease ',
  },
});

const Info1 = styled('div', {
  flexDirection: 'column',
  backgroundColor: 'White',
  padding: '30px 10px 40px 10px',

  h2: {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#DA291C',
    textAlign: 'justify',
    justifyContent: 'center',
    fontSize: '15px',
    lineHeight: '20px',
    fontWeight: '700',
    letterSpacing: '.05rem',
    padding: '0 10px 15px 10px',
  },

  p: {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#555555',
    textAlign: 'start',
    justifyContent: 'center',
    fontSize: '15px',
    lineHeight: '20px',
    fontWeight: '500',
    letterSpacing: '.05rem',
    padding: '0 10px 20px 10px',
  },
});

const Info2 = styled('div', {
  flexDirection: 'column',
  background: 'White',
  padding: '30px 10px 40px 10px',
  width: '100%',

  h2: {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#DA291C',
    textAlign: 'justify',
    justifyContent: 'center',
    fontSize: '15px',
    lineHeight: '20px',
    fontWeight: '700',
    letterSpacing: '.05rem',
    padding: '0 10px 15px 10px',

  },

  p: {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#555555',
    textAlign: 'start',
    justifyContent: 'center',
    fontSize: '15px',
    lineHeight: '20px',
    fontWeight: '500',
    letterSpacing: '.05rem',
    padding: '0 10px 0 10px',
    borderBottom: '10px',
  },
});