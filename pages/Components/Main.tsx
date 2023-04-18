import React from 'react';
import { styled } from '../../styles/stitches.config';

export default function Main() {
  return (
    <>
      <Container className='main'>
        <MainContainer>
          <div>
            <img src='/logo.png' alt='Trama Logo' data-aos="fade-up" data-aos-duration="1500" />
          </div>
        </MainContainer>
      </Container>
    </>
  );
}

const Container = styled('section', {
  backgroundImage: 'url(' + '/unsplashPartituras.jpg' + ')',
  //backgroundImage: 'url(' + '/piano1.jpg' + ')',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100vh !important',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  //zIndex: '1',

  '&::after': {
    content: '',
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: '5',
    background: 'whitesmoke',
    opacity: '0.4',
    //'linear-gradient(to bottom, rgba(0, 0, 0 ,0), rgba(255,255,255, 1))',
  },
});

const MainContainer = styled('div', {
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '10',

  img: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '800px',
    maxHeight: '800px',
    width: 'auto',
    height: 'auto',
  },
});
