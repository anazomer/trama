import React, { useState, useEffect } from 'react';
import { styled, keyframes } from '../../styles/stitches.config';
import Button from '../elements/Button';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 450) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
  }, []);

  const appearNavbar = keyframes({
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  });

  const Header = styled('section', {
    position: 'fixed',
    zIndex: '100',
    letf: '0',
    top: '0',
    width: '100vw',
    height: 'auto',
    minHeight: '8vh',
    animation: `${appearNavbar} 500ms ease-in-out`,
  });

  const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8vh',
    // border: '3px solid red',

    a: {
      textDecoration: 'none',
      color: 'white',
      textTransform: 'uppercase',
      padding: '32px',
      transition: 'all .3s ease',

      '&:hover': {
        color: 'red',
      },
    },

    '&::after': {
      content: '',
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: 'black',
      opacity: '.15',
      zIndex: '-1',
      // border: '3px solid blue',
    },
  });

  if (!showNavbar) return null;

  return (
    <Header>
      {/*Seção Header */}
      <Container>
        <Button text='Início' to='main' />
        <Button text='Contato' to='contato' />
        <Button text='Sobre' to='sobre' />
        <Button text='Pesquisadores' to='pesquisadores' />
        <Button text='Publicações' to='publicacoes' />
        <Button text='Contato' to='contato' />
      </Container>
    </Header>
  );
}

export default Navbar;
