import React from 'react';
import { styled } from '../../styles/stitches.config';

export default function Footer() {
  return (
    <>
      <Container>
        <FooterContainer>
          <img src='/logo.png'></img>
          <p>
            Av. Prof. Lúcio Martins Rodrigues, 443 | Butantã, São Paulo - SP |
            CEP 05508-020
          </p>
        </FooterContainer>
      </Container>
    </>
  );
}

export const Container = styled('footer', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '25px 8em 25px 8em',
  background: 'WhiteSmoke',
});

export const FooterContainer = styled('div', {
  justifyContent: 'space-between',
  display: 'flex',
  alignItems: 'center',
  gap: '60rem',

  p: {
    fontFamily: 'Comfortaa, cursive',
    fontSize: '12px',
    color: '#222222',
  },

  img: {
    display: 'flex',
    maxHeight: '30px',
    width: 'auto',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
