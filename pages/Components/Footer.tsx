import React from 'react';
import { styled } from '../../styles/stitches.config';

export default function Footer() {
  return (
    <>
      <Container>
        <FooterContainer1>
          <img src='/logo.png'></img>

        </FooterContainer1>
        <FooterContainer2>
          <p>
            Av. Prof. Lúcio Martins Rodrigues, 443 | Butantã, São Paulo - SP |
            CEP 05508-020
          </p>
        </FooterContainer2>
      </Container>
    </>
  );
}

const Container = styled('footer', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '25px 10em 25px 10em',
  background: 'WhiteSmoke',
  position: 'relative',
  flexDirection: 'row',
});

const FooterContainer1 = styled('div', {
  justifyContent: 'space-between',
  alignItems: 'center',

  img: {
    display: 'flex',
    maxHeight: '30px',
    width: 'auto',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

const FooterContainer2 = styled('div', {
  justifyContent: 'space-between',
  alignItems: 'center',

  p: {
    fontFamily: 'Comfortaa, cursive',
    fontSize: '12px',
    color: '#222222',
  },
});
