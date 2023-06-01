import React, { useState } from 'react';
import { revistas, congressos, dissertacoes, teses } from '../../../data/ListaPublicacoes';
import { styled } from '@/styles/stitches.config';

interface Publicacao {
  id: number;
  title: {
    text: string;
    link: string;
  };
  author: string;
  magazine: string;
  year: number;
}

function TrabalhosRecentes() {
  const [sortBy, setSortBy] = useState('year');

  const sortPublicacoes = (publicacoes: Publicacao[], sortBy: string) => {
    if (sortBy === 'year') {
      return publicacoes.sort((a, b) => b.year - a.year);
    }
    return publicacoes;
  };

  const getRecentPublicacoes = (publicacoes: Publicacao[]) => {
    return publicacoes.slice(0, 5);
  };

  const todasPublicacoes = [...revistas, ...congressos, ...dissertacoes, ...teses];

  const sortedPublicacoes = sortPublicacoes(todasPublicacoes, sortBy);
  const recentPublicacoes = getRecentPublicacoes(sortedPublicacoes);

  return (
    <div>
      <PublicacaoList>
        {recentPublicacoes.map((publicacao) => (
          <Publicacao key={publicacao.id}>
            <h3>
              <a href={publicacao.title.link} target="_blank" rel="noopener noreferrer">
                <span dangerouslySetInnerHTML={{ __html: publicacao.title.text }}></span>
              </a>
            </h3>
            <div>
              <p>{publicacao.author}</p>
              <p>{publicacao.magazine}</p>
              <p>{publicacao.year}</p>
            </div>
          </Publicacao>
        ))}
      </PublicacaoList>
    </div>
  );
}

export default TrabalhosRecentes;



const PublicacaoList = styled('div', {
  alignItems: 'center',
  backgroundColor: 'white',
  flexDirection: 'column',
  display: 'inline-block',
  margin: '0px',
  width: '90%',
  padding: '0px',
  marginLeft: '20px',

  a: {
    textDecoration: 'none',
    fontFamily: 'Libre Franklin, sans-serif',
    letterSpacing: '.05rem',
    fontSize: '18px',
    fontWeight: '500',
    color: '#555555',
    lineHeight: '2.2rem',
    padding: '0px',

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
    padding: '0px',
    marginLeft: '25px',
  },
});

const Publicacao = styled('div', {

  div: {
    display: 'flex',
    marginLeft: '20px',
    marginBottom: '20px',

    p: {
      marginLeft: '5px',
    },
  }
});

