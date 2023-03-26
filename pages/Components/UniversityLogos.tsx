import React from 'react';
import { styled } from '../../styles/stitches.config';

export default function UniversityLogos() {
  return (
    <>
      <Logos>
        <a href='https://www5.usp.br/' target='_blank'>
          <img src='/usp1.png' />
        </a>
        <a href='https://www.eca.usp.br/' target='_blank'>
          <img src='/logoeca.png' />
        </a>
        <a
          href='https://www.eca.usp.br/cmu/laboratorios-didaticos'
          target='_blank'
        >
          <img src='/pam.png' />
        </a>
        <a href='https://www.tramausp.com.br/' target='_blank'>
          <img src='/logo.png' />
        </a>
        <a href='https://eitam5.nics.unicamp.br/' target='_blank'>
          <img src='/eitam2.png' />
        </a>
      </Logos>
    </>
  );
}

const Logos = styled('section', {
  flexDirection: 'row',
  textAlign: 'center',
  padding: '120px 4em 80px 4em',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'space-between',

  img: {
    alignItems: 'center',
    maxWidth: '250px',
    maxHeight: '60px',
    margin: '0 4em',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
