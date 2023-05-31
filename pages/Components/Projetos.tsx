import React from 'react';
import { styled } from '../../styles/stitches.config';

export default function Projetos() {
    return (
        <>
            <Container className='projetos'>
                <Container1>
                    <h1>Conheça os projetos</h1>
                </Container1>
                <ProjetosContainer>
                    <Caracol>
                        <h2>O Caracol</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                            libero incidunt nemo qui pariatur voluptatem impedit dolorum culpa
                            cumque. Mollitia dolor aliquid hic sapiente praesentium illo
                            nesciunt, aspernatur laborum natus.
                        </p>
                        <Button>
                            <a href='https://www.youtube.com/ocaracol' target='_blank'>
                                Saiba mais
                            </a>
                        </Button>
                    </Caracol>
                    <Objetos>
                        <h2>Solfejo dos Objetos Sonoros</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                            libero incidunt nemo qui pariatur voluptatem impedit dolorum culpa
                            cumque. Mollitia dolor aliquid hic sapiente praesentium illo
                            nesciunt, aspernatur laborum natus.
                        </p>
                        <Button>
                            <a href='/'>Saiba mais</a>
                        </Button>
                    </Objetos>
                    <Outros>
                        <h2>Outros</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                            libero incidunt nemo qui pariatur voluptatem impedit dolorum culpa
                            cumque. Mollitia dolor aliquid hic sapiente praesentium illo
                            nesciunt, aspernatur laborum natus.
                        </p>
                        <Button>
                            <a href=''>Saiba mais</a>
                        </Button>
                    </Outros>
                </ProjetosContainer>
            </Container>
        </>
    );
}

const Container = styled('section', {
    padding: '150px 10em 150px 10em',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
});

const Container1 = styled('div', {
    h1: {
        fontFamily: 'Comfortaa, cursive',
        textTransform: 'lowercase',
        letterSpacing: '2px',
        fontSize: '35px',
        fontWeight: '800',
        color: '#8A8A8A',
        justifyContent: 'center',
        display: 'flex',
    },
});

const ProjetosContainer = styled('div', {
    display: 'grid',
    gap: '5rem',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr',
    height: '600px',
    marginTop: '100px',
});

const Caracol = styled('div', {
    height: '100%',
    width: '100%',
    borderRadius: '20px',
    boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '40px 0',
    overflow: 'hidden',
    backgroundImage: 'url(/caracol1.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'transform 0.3s ease',
    transform: 'scale(1)',


    '&:hover': {
        transform: 'scale(1.02)',
    },

    '&::after': {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'whitesmoke',
        opacity: '0.8',
        borderRadius: '20px',
    },

    h2: {
        fontFamily: 'Libre Franklin, sans-serif',
        letterSpacing: '2px',
        fontSize: '35px',
        fontWeight: '400',
        color: '#DA291C',
        textAlign: 'center',
        marginTop: '63px',
        zIndex: '10',
    },

    p: {
        fontFamily: 'Libre Franklin, sans-serif',
        color: '#555555',
        textAlign: 'justify',
        fontSize: '15px',
        lineHeight: '2.2rem',
        fontWeight: '400',
        letterSpacing: '.05rem',
        padding: '5em 2em 0 2em',
        zIndex: '10',
    },
});


const Objetos = styled('div', {
    height: '100%',
    width: '100%',
    borderRadius: '20px',
    boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '40px 0',
    overflow: 'hidden',
    justifyContent: 'center',
    backgroundImage: 'url(/head.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'transform 0.3s ease',
    transform: 'scale(1)',

    '&:hover': {
        transform: 'scale(1.02)',
    },

    '&::after': {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'whitesmoke',
        opacity: '0.8',
        borderRadius: '20px',
    },

    h2: {
        fontFamily: 'Libre Franklin, sans-serif',
        letterSpacing: '2px',
        fontSize: '30px',
        fontWeight: '400',
        color: '#DA291C',
        textAlign: 'center',
        zIndex: '10',
    },

    p: {
        fontFamily: 'Libre Franklin, sans-serif',
        color: '#555',
        textAlign: 'justify',
        fontSize: '15px',
        lineHeight: '2.2rem',
        fontWeight: '400',
        letterSpacing: '.05rem',
        padding: '5em 2em 0 2em',
        zIndex: '10',
    },
});

const Outros = styled('div', {
    height: '100%',
    width: '100%',
    borderRadius: '20px',
    boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '40px 0',
    overflow: 'hidden',
    backgroundImage: 'url(/piano.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'transform 0.3s ease',
    transform: 'scale(1)',

    '&:hover': {
        transform: 'scale(1.02)',
    },

    '&::after': {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'whitesmoke',
        opacity: '0.8',
        borderRadius: '20px',
    },

    h2: {
        fontFamily: 'Libre Franklin, sans-serif',
        letterSpacing: '2px',
        fontSize: '35px',
        fontWeight: '400',
        color: '#DA291C',
        textAlign: 'center',
        marginTop: '63px',
        zIndex: '10',
    },

    p: {
        fontFamily: 'Libre Franklin, sans-serif',
        color: '#555555',
        textAlign: 'justify',
        fontSize: '15px',
        lineHeight: '2.2rem',
        fontWeight: '400',
        letterSpacing: '.05rem',
        padding: '5em 2em 0 2em',
        zIndex: '10',
    },
});

const Button = styled('div', {
    display: 'flex',
    gap: '300px',
    zIndex: '10',
    padding: '1em 3em 1em 3em',
    background: '#DA291C',
    opacity: '0.7',
    cursor: 'pointer',
    borderRadius: '10px',
    boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
    marginTop: '35px',

    a: {
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Libre Franklin, sans-serif',
        fontSize: '16px',
        fontWeight: '600',
        letterSpacing: '.05rem',
        textTransform: 'uppercase',
    },

    '&:hover': {
        opacity: '1',
        transition: '.3s ease',
    },
});
