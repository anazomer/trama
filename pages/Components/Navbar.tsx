import React, { useState, useEffect } from 'react';
import { styled, keyframes } from '../../styles/stitches.config';
import Button from '../elements/Button';
import { createStitches } from '@stitches/react';

/* function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);


  const changeNavbar = () => {
    if (window.scrollY >= 600) {
      setShowNavbar(true);
      
    } else {
      setShowNavbar(false);
    }

  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar);
  }, []);

  const appearNavbar = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  }); */

/* const Header = styled('section', {
  position: 'fixed',
  zIndex: '1000',
  letf: '0',
  top: '0',
  width: '100vw',
  height: '7vh',
  //animation: `${appearNavbar} 500ms ease-in-out`,
  background: 'transparent',
  //backdropFilter: 'blur(10px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  a: {
    textDecoration: 'none',
    color: '#555555',
    padding: '35px',
    transition: 'all .3s ease',
    fontFamily: 'Comfortaa, cursive',
    fontSize: '22px',
    fontWeight: '500',
    letterSpacing: '2px',
    
    '&:hover': {
      color: '#DA291C',
      fontWeight: '700',
    },
  },

  sticky: {
    background: 'black',
  },
});


window.addEventListener("scroll", function(){
  const header = document.querySelector("Header");
  Header.classList.toggle("sticky", window.scrollY > 0);
});


<header>
 <Header>    
      <Button text='início' to='main' />
      <Button text='sobre' to='sobre' />
      <Button text='publicações' to='publicacoes' />
      <Button text='pesquisadores' to='pesquisadores' />
      <Button text='contato' to='contato' />
  </Header>

</header> */

/*   const Header = styled('section', {
    position: 'fixed',
    zIndex: '1000',
    letf: '0',
    top: '0',
    width: '100vw',
    height: '7vh',
    animation: `${appearNavbar} 500ms ease-in-out`,
    background: 'rgba (255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    a: {
      textDecoration: 'none',
      color: '#555555',
      padding: '35px',
      transition: 'all .3s ease',
      fontFamily: 'Comfortaa, cursive',
      fontSize: '22px',
      fontWeight: '500',
      letterSpacing: '2px',
      
      '&:hover': {
        color: '#DA291C',
        fontWeight: '700',
      },
    },
  });

  if (!showNavbar) return null;

  return (
    <Header>    
        <Button text='início' to='main' />
        <Button text='sobre' to='sobre' />
        <Button text='publicações' to='publicacoes' />
        <Button text='pesquisadores' to='pesquisadores' />
        <Button text='contato' to='contato' />
    </Header>
  );
} */

//export default Navbar;
