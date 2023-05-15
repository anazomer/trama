import { Link as ReactScroll } from 'react-scroll';
import { styled } from '../../styles/stitches.config';
interface IButton {
  text?: string;
  to?: string;
}

export default function Button(props: IButton) {
  const { text, to } = props;

  const Button = styled('button', {
    background: 'none',
    border: 'none',
    fontSize: '15px',
    padding: '0',

    '&:hover': {
      cursor: 'pointer',
    },

    // style a tags

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

  const LinkUI = styled(ReactScroll, {
    color: 'red',
  });

  return (
    <>
      <Button>
        <LinkUI to={to}>{text}</LinkUI>
      </Button>
    </>
  );
}
