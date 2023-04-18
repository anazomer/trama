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
    fontSize: '24px',
    padding: '100px 0',

    '&:hover': {
      cursor: 'pointer',
      background: 'none',
    },

    // style a tags

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

  const LinkUI = styled(ReactScroll, {
    color: 'red',

    // border: '1px solid red',
  });

  return (
    <>
      <Button>
        <LinkUI to={to}>{text}</LinkUI>
      </Button>
    </>
  );
}
