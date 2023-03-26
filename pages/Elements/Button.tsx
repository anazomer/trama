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
      textDecoration: 'none',
      color: 'white',
      textTransform: 'uppercase',
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
