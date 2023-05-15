import { createStitches } from '@stitches/react';
import { useEffect, useState } from 'react';
import Button from '../Elements/Button';

const { styled, keyframes } = createStitches({

});

const Navbar = styled('nav', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: '999',
    width: '100%',
    height: '7vh',
    transition: 'background-color 0.2s ease-out',
    //animation: `${appearNavbar} 500ms ease-in-out`,
    variants: {
        scrolled: {
            true: {
                backdropFilter: 'blur(10px)',
                //background: 'white',
                //boxShadow: '0px 0px 1px 0px rgba(0, 0, 0, 0.2)',
            },
        },
    },
});

const MenuItem = styled('a', {
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
});

const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
});

function MyNavbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <Navbar scrolled={scrolled} css={{ animation: `${fadeIn} 0.5s` }}>

            <Button text='início' to='main' />
            <Button text='sobre' to='sobre' />
            <Button text='publicações' to='publicacoes' />
            <Button text='pesquisadores' to='pesquisadores' />
            <Button text='contato' to='contato' />

        </Navbar>
    );
}


export default MyNavbar;