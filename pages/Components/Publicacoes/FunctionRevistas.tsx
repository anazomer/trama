import React, { useState } from 'react';
import { revistas } from './ListaPublicacoes';
import { styled } from '@/styles/stitches.config';

function RevistaListPage() {
  const [sortBy, setSortBy] = useState('title');

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
  };

  const sortPublicacoes = (revistas, sortBy) => {
    switch (sortBy) {
      case 'title':
        return revistas.sort((a, b) => a.title.text.localeCompare(b.title.text));
      case 'author':
        return revistas.sort((a, b) => a.author.localeCompare(b.author));
      case 'year':
        return revistas.sort((a, b) => b.year - a.year);
      case 'magazine':
        return revistas.sort((a, b) => a.magazine.localeCompare(b.magazine));
      default:
        return revistas;
    }
  };

  const sortedPublicacoes = sortPublicacoes(revistas, sortBy);

  return (
    <div>
      <SortBar>
        <label>Ordenar por:</label>
        <select onChange={handleSortChange}>

          <option value="title">Título (A-Z)</option>
          <option value="author">Autor (A-Z)</option>
          <option value="year">Ano (decrescente)</option>
          <option value="magazine">Revista (A-Z)</option>
        </select>
      </SortBar>

      <PublicacaoList>
        {sortedPublicacoes.map((publicacao) => (
          <Publicacao key={publicacao.id}>
            <h3>
              <a href={publicacao.title.link} target='new blank'>
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

export default RevistaListPage;



const SortBar = styled('div', {
  display: 'flex',
  justifyContent: 'right',
  marginRight: '20px',

  label: {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#555555',
    textAlign: 'justify',
    fontSize: '15px',
    lineHeight: '2.2rem',
    fontWeight: '400',
    letterSpacing: '.05rem',
    marginRight: '10px',
  },

  option: {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#555555',
    textAlign: 'justify',
    fontSize: '15px',
    lineHeight: '2.2rem',
    fontWeight: '400',
    letterSpacing: '.05rem',
    padding: '40px 0em 20px 0em',
    margin: '40px',
  },

  select: {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#555555',
    textAlign: 'justify',
    fontSize: '15px',
    lineHeight: '2.2rem',
    fontWeight: '400',
    letterSpacing: '.05rem',
    padding: '0 10px 0 10px',
  },
});

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

