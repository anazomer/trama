import React from 'react';
import { styled } from '../../styles/stitches.config';

export default function Contato() {
  return (
    <>
      <Container className='contato'>
        <h1 data-aos="fade-right">Contato</h1>
        <ContContainer>
          <Map
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.28381655509!2d-46.72894208519028!3d-23.558248067362076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce563e4e136525%3A0xdb37c533afea882d!2sAv.%20Prof.%20L%C3%BAcio%20Martins%20Rodrigues%2C%20443%20-%20Butant%C3%A3%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005508-020!5e0!3m2!1spt-BR!2sbr!4v1679407038644!5m2!1spt-BR!2sbr'
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></Map>
          <form action=''>
            <Box>
              <input type={'text'} placeholder='Nome'></input>
            </Box>
            <Box>
              <input type={'email'} placeholder='E-mail'></input>
            </Box>
            <Box>
              <textarea
                placeholder='Deixe aqui sua mensagem'
                rows={4}
              ></textarea>
            </Box>
            <ContButton>
              <input type='submit' value='Enviar' />
            </ContButton>
          </form>
        </ContContainer>
      </Container>
    </>
  );
}

const Container = styled('section', {
  flexDirection: 'column',
  textAlign: 'center',
  margin: 'auto',
  padding: '150px 10em 50px 10em',
  backgroundColor: 'white',

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
});

const ContContainer = styled('div', {
  padding: '50px 0',
  fontFamily: 'Libre Franklin, sans-serif',
  display: 'flex',
  background: 'white',
  flexWrap: 'wrap',
  gap: '5rem',

  form: {
    flex: '20 1 20px',
    textAlign: 'center',
  },
});

const Map = styled('iframe', {
  flex: '20 1 20px',
  borderRadius: '20px',
  border: 'none',
});

const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '0rem',
  marginBottom: '1rem',
  background: 'transparent',

  input: {
    width: '100%',
    padding: '1rem',
    fontSize: '16px',
    color: '#222222',
    fontFamily: 'Libre Franklin, sans-serif',
    border: '2px solid #555555',
  },
  textarea: {
    width: '100%',
    padding: '1rem',
    fontSize: '18px',
    color: '#222222',
    fontFamily: 'Libre Franklin, sans-serif',
    border: '2px solid #555555',
  },
});

const ContButton = styled('button', {
  border: 'none',

  input: {
    padding: '1em 3em 1em 3em',
    background: '#DA291C',
    opacity: '0.7',
    border: '2px solid #DA291C',
    cursor: 'pointer',
    justifyContent: 'right',
    color: 'white',
    fontFamily: 'Libre Franklin, sans-serif',
    fontSize: '16px',
    fontWeight: '600',
    letterSpacing: '.05rem',
    textTransform: 'uppercase',
    borderRadius: '20px',
  },

  ':hover': {
    background: '#DA291C',
    opacity: '1',
    transition: '.3s ease',
  },
});

//Falta configurar o e-mail//