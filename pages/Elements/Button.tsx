import { Link as ReactScroll } from 'react-scroll';
import { styled } from '../../styles/stitches.config';

interface IButton {
  text?: string;
  to?: string;
}

const StyledButton = styled('button', {
  background: 'none',
  border: 'none',
  fontSize: '24px',
  padding: '100px 0',

  '&:hover': {
    cursor: 'pointer',
    background: 'none',
  },

  a: {
    //padding: '0.5rem 1rem',
    //color: 'white',
    textDecoration: 'none',
    color: '#555555',
    //color: '#8A8A8A',
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

const Button: React.FC<IButton> = ({ text, to }) => {
  return (
    <StyledButton>
      {to ? <ReactScroll to={to}>{text}</ReactScroll> : null}
    </StyledButton>
  );
};

export default Button;
