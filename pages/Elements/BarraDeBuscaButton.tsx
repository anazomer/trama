import { Link as ReactScroll } from 'react-scroll';
import { styled } from '../../styles/stitches.config';

interface IButton {
  text?: string;
  to?: string;
}

const StyledButton = styled('button', {
  background: 'none',
  border: 'none',
  padding: '0',

  '&:hover': {
    cursor: 'pointer',
  },

  a: {
    display: 'flex',
    alignContent: 'center',
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#555555',
    fontSize: '18px',
    fontWeight: '400',
    letterSpacing: '.05rem',
    marginLeft: '10px',

    '&:hover': {
      color: '#DA291C',
      transition: '.3s ease',
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