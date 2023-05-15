import React from 'react';
import { styled } from '../../styles/stitches.config';


export default function Caracol() {
    return (
        <>
            <Container className='caracol'>
                <Imagem>
                    <div>
                        <h1 data-aos="zoom-in" data-aos-duration="300">O Caracol</h1>
                    </div>
                </Imagem>
                <Info>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias velit ut numquam aperiam, at neque obcaecati commodi accusamus dicta quibusdam, sed recusandae dolorem non nihil eligendi illo repellat amet minima!</p>
                    <button>
                        <a href='https://www.youtube.com/channel/UCMsQuaAfskrWC6XwOaSMaRw/videos' target='_blank'>Conheça o projeto</a>
                    </button>
                </Info>
            </Container>
        </>
    );
}

const Container = styled('section', {
    padding: '150px 10em 50px 10em',
    backgroundColor: 'white',
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'column',
});

const Imagem = styled('div', {
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
    width: '50%',
    backgroundImage: 'url(' + '/caracol1.jpg' + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    display: 'inline-block',
    position: 'relative',
    zIndex: '10',
    borderRadius: '20px 0 0 20px',

    div: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'rgb (255, 255, 255)',
        backdropFilter: 'blur(5px)',
        margin: '0',
        display: 'flex',
        height: '400px',
        zIndex: '10',
    },

    h1: {
        fontFamily: 'Comfortaa, cursive',
        textTransform: 'lowercase',
        letterSpacing: '2px',
        fontSize: '50px',
        fontWeight: '400',
        color: '#DA291C',
        textAlign: 'center',
        position: 'relative',
        zIndex: '100',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const Info = styled('div', {
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    height: '400px',
    width: '50%',
    flexDirection: 'column',
    display: 'inline-block',
    float: 'right',
    borderRadius: '0 20px 20px 0',
    justifyContent: 'center',

    p: {
        fontFamily: 'Libre Franklin, sans-serif',
        color: '#555555',
        textAlign: 'justify',
        fontSize: '15px',
        lineHeight: '2.2rem',
        fontWeight: '400',
        letterSpacing: '.05rem',
        padding: '5em 10em 30px 10em',
    },

    button: {
        padding: '1em 3em 1em 3em',
        background: '#DA291C',
        opacity: '0.7',
        border: '2px solid #DA291C',
        cursor: 'pointer',
        borderRadius: '10px',
        boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
        marginLeft: '11em',

        '&:hover': {
            color: 'white',
            background: '#DA291C',
            opacity: '1',
            transition: '.3s ease',
        },
    },

    a: {
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Libre Franklin, sans-serif',
        fontSize: '16px',
        fontWeight: '600',
        letterSpacing: '.05rem',
    },
});

//Falta inserir o parágrafo//


