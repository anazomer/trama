import React from 'react';
import { styled } from '../../styles/stitches.config';
import Link from 'next/link';

export default function Publicacoes() {
  return (
    <>
      <Container className='publicacoes'>
      <Container1>
        <PubliContainer>
        <h1 data-aos="fade-right">Publicações</h1>
        </PubliContainer>
        <PubliContainer1 />
        <PubliContainer2>
          <div>
            <Link href='https://www.anppom.com.br/revista/index.php/opus/article/view/opus2021b2711'>
              A natureza livre de Mario Ficarelli: uma análise da obra{' '}
              <i>Maktub II</i> (1972) para violino e piano.
            </Link>
            <p>Ana Leticia Zomer e Adriana Lopes Moreira</p>
            <Link href='https://www.anppom.com.br/revista/index.php/opus/article/view/opus2021b2711'>
              A natureza livre de Mario Ficarelli: uma análise da obra{' '}
              <i>Maktub II</i> (1972) para violino e piano.
            </Link>
            <p>Ana Leticia Zomer e Adriana Lopes Moreira</p>
            <Link href='https://www.anppom.com.br/revista/index.php/opus/article/view/opus2021b2711'>
              A natureza livre de Mario Ficarelli: uma análise da obra{' '}
              <i>Maktub II</i> (1972) para violino e piano.
            </Link>
            <p>Ana Leticia Zomer e Adriana Lopes Moreira</p>
            <Link href='https://www.anppom.com.br/revista/index.php/opus/article/view/opus2021b2711'>
              A natureza livre de Mario Ficarelli: uma análise da obra{' '}
              <i>Maktub II</i> (1972) para violino e piano.
            </Link>
            <p>Ana Leticia Zomer e Adriana Lopes Moreira</p>
            <Link href='https://www.anppom.com.br/revista/index.php/opus/article/view/opus2021b2711'>
              A natureza livre de Mario Ficarelli: uma análise da obra{' '}
              <i>Maktub II</i> (1972) para violino e piano.
            </Link>
            <p>Ana Leticia Zomer e Adriana Lopes Moreira</p>
            <div>
              <button>
                <Link href=''>
                  <b>Ver mais</b>
                </Link>
              </button>
            </div>
          </div>
        </PubliContainer2>
      </Container1>
      </Container>
    </>
  );
}

const Container = styled('section', {
  padding: '0px 0 0px 0',
  backgroundColor: 'white',
  position: 'relative',
});

const Container1 = styled('div', {
  padding: '150px 0 700px 0',
  backgroundColor: 'whitesmoke',
  position: 'relative',
});


  const PubliContainer = styled('div', {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10em',
    marginTop: '-70px',
  
    h1: {
      fontFamily: 'Comfortaa, cursive',
      textTransform: 'lowercase',
      letterSpacing: '2px',
      fontSize: '60px',
      fontWeight: '300',
      color: '#DA291C',
      justifyContent: 'justify',
      display: 'flex',
    },
  });

const PubliContainer1 = styled('div', {
  height: '700px',
  //width: '90%',
  width: '100%',
  alignItems: 'center',
  background: 'whitesmoke',
  //backgroundImage: 'url(' + '/books.jpg' + ')',
  flexDirection: 'column',
  overflow: 'hidden',
  /* backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover', */
  display: 'inline-block',
  float: 'right',
  position: 'relative',
  zIndex: '5',
  //borderRadius: '300px 0 0 0',
});


export const PubliContainer2 = styled('div', {
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  display: 'inline-block',
  float: 'left',
  marginTop: '-670px',
  position: 'relative',
  zIndex: '10',
  padding: '0 10em 0 10em',

  div: {
    background: 'white',
    alignItems: 'center',
    width: '100%',
    padding: '50px 10em 50px 10em',
    //boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
    //borderRadius: '0px 300px 0px 0',
    borderRadius: '20px',
    //borderRadius: '0px 300px 000px 0',
    //borderTop: '0.5px solid #DA291C',
    //borderBottom: '0.5px solid #DA291C',
    //borderRight: '3px solid #DA291C',
    position: 'abolute',
    //background: 'rgba (255, 255, 255, 0.1)',
    //backdropFilter: 'blur(10px)',

    a: {
      textDecoration: 'none',
      fontFamily: 'Libre Franklin, sans-serif',
      letterSpacing: '.05rem',
      fontSize: '18px',
      fontWeight: '600',
      color: '#555555',
      lineHeight: '2.2rem',
      marginBottom: '15px',

      '&:hover': {
        color: '#DA291C',
        transition: '.3s ease',
      },
    },

    p: {
      fontFamily: 'Libre Franklin, sans-serif',
      color: '#555555',
      fontSize: '15px',
      lineHeight: '2.2rem',
      fontWeight: '400',
      letterSpacing: '.05rem',
      marginBottom: '20px',
    },

    div: {
      background: 'transparent',
      alignItems: 'center',
      padding: '10px 0px 0px',
      border: 'none',

        button: {
          padding: '0.8em 3em 0.8em 3em',
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
    }
  },
});

//Falta inserir o parágrafo e atualizar os artigos//

//Fazer página//
