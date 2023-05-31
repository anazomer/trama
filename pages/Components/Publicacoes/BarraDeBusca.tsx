import { createStitches } from '@stitches/react';
import { useEffect, useState } from 'react';
import Button from '@/pages/Elements/SearchButton';



const { styled } = createStitches({});

function MySearch() {
  const [scrolled, setScrolled] = useState(false);

  return (
    <BarraCategorias>
      <h4>Busque por palavras-chave ou navegue por categorias:</h4>

      <Search>
        <div>
          <Button text={<StyledText>Periódicos</StyledText>} to="periodicos" />
          <Button text={<StyledText>Anais de congressos</StyledText>} to="congressos" />
          <Button text={<StyledText>Dissertações</StyledText>} to="dissertacoes" />
          <Button text={<StyledText>Teses</StyledText>} to="teses" />
        </div>
      </Search>
    </BarraCategorias>
  );
}

export default MySearch;

const BarraCategorias = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '15px',
  alignItems: 'center',

  h4: {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#555555',
    fontSize: '18px',
    lineHeight: '2.2rem',
    fontWeight: '500',
    letterSpacing: '.05rem',
  },
});

const Search = styled('span', {
  display: 'flex',
  marginLeft: '10px',

  div: {
    display: 'flex',
  },

  Button: {
    marginRight: '10px',
    display: 'flex',
    marginLeft: 'auto',
  }
});

const StyledText = styled('span', {
  display: 'flex',
  alignContent: 'center',
  fontFamily: 'Libre Franklin, sans-serif',
  color: '#555555',
  fontSize: '18px',
  fontWeight: '400',
  letterSpacing: '.05rem',

  '&:hover': {
    color: '#DA291C',
    transition: '.3s ease',
    fontWeight: '500',
  },
});
