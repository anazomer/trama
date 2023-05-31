import { Link as ReactScroll } from 'react-scroll';
import { styled } from '../../styles/stitches.config';

interface IButton {
  text?: string;
  to?: string;
}

const StyledButton = styled('button', {
  background: 'none',
  border: 'none',
  fontSize: '15px',
  padding: '0',

  '&:hover': {
    cursor: 'pointer',
  },

  a: {
    textDecoration: 'none',
    color: '#8A8A8A',
    //transition: 'all .3s ease',
    fontFamily: 'Libre Franklin, sans-serif',
    fontSize: '15px',
    fontWeight: '400',
    letterSpacing: '2px',
    marginLeft: '10px',

    '&:hover': {
      color: '#DA291C',
      fontWeight: '500',
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