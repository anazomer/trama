import { createStitches } from "@stitches/react";


export const { styled, globalCss, getCssText, css } = createStitches({


});


//Seção Header
export const Header = styled('section', {
    position: 'fixed',
    zIndex: '100',
    letf: '0',
    top: '0',
    width: '100vw',
    height: 'auto',
    minHeight: '8vh',
});

export const Navbar = styled('nav', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8vh',

    ul: {
        listStyle: 'none',
        display: 'flex',
    },

    li: {
        letterSpacing: '5px',
        fontSize: '18px',
        fontWeight: '700',
        display: 'inline-block',
        fontFamily: 'Comfortaa, cursive',
        ':hover': {
            color: '#DA291C',
            transition: '.3s ease color',
        }
    },

    a: {
        textDecoration: 'none',
        color: 'white',
        textTransform: 'uppercase',
        padding: '32px',
    },
    '&::after': {
        content: '',
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        opacity: '.15',
        zIndex: '-1',
    }
});

/* export const Logo = styled('img', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '200px',
    maxHeight: '150px',
    width: 'auto',
    height: 'auto',
    zIndex: '1000',
});  */
//Fim de Header


//Seção Principal
export const Main = styled('section', {
    backgroundImage: 'url(' + '/unsplashPartituras.jpg' + ')',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh !important',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    //zIndex: '1',

    '&::after': {
        content: '',
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: '8',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0 ,0), rgba(255,255,255, 1))',
    },
});

export const MainContainer = styled('div', {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '10',

    img: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '800px',
        maxHeight: '800px',
        width: 'auto',
        height: 'auto',
    },
});
//Fim da Seção Principal


//Seção ECA-USP
export const Logos = styled('section', {
    flexDirection: 'row',
    textAlign: 'center',
    padding: '120px 4em 80px 4em',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',

    img: {
        alignItems: 'center',
        maxWidth: '250px',
        maxHeight: '60px',
        margin: '0 4em',
        justifyContent: 'center',
        flexDirection: 'row',
    },
});
//Fim da Seção ECA-USP


//Seção Sobre
export const Sobre = styled('section', {
    flexDirection: 'column',
    textAlign: 'center',
    margin: 'auto',
    padding: '100px 8em 80px 8em',
    backgroundColor: 'white',
});

export const SobreContainer = styled('section', {
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid #8A8A8A',

    h1: {
        fontFamily: 'Comfortaa, cursive',
        textTransform: 'lowercase',
        letterSpacing: '5px',
        fontSize: '60px',
        fontWeight: '300',
        color: '#DA291C',
        margin: '0 500px',
        justifyContent: 'center',
        marginTop: '-42px',
        background: 'white',
    },

    p: {
        fontFamily: 'Libre Franklin, sans-serif',
        color: '#555555',
        textAlign: 'justify',
        fontSize: '15px',
        lineHeight: '2.2rem',
        fontWeight: '400',
        letterSpacing: '.05rem',
        padding: '50px 4em 0 4em',
    },

    span: {
        fontWeight: '700',
        color: '#222222',
    }
});

export const ContainerButton = styled('div', {
    maxWidth: '100%',
    padding: '40px 0 50px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const ButtonBar = styled('div', {
    display: 'flex',
    gap: '300px',
    color: 'black',

    button: {
        padding: '1em 3em 1em 3em',
        background: '#DA291C',
        opacity: '0.7',
        border: '2px solid #DA291C',
        cursor: 'pointer',
    },

    a: {
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Libre Franklin, sans-serif',
        fontSize: '16px',
        fontWeight: '600',
        letterSpacing: '.05rem',
    },

    ':hover': {
        background: '#DA291C',
        opacity: '1',
        transition: '.3s ease',
    }
});
//Fim da Seção Sobre


//Seção Pesquisadores
export const Pesquisadores = styled('section', {
    flexDirection: 'column',
    textAlign: 'center',
    margin: 'auto',
    padding: '120px 0px 80px 0px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',


    h1: {
        fontFamily: 'Comfortaa, cursive',
        textTransform: 'lowercase',
        letterSpacing: '5px',
        fontSize: '60px',
        fontWeight: '300',
        color: '#DA291C',
        margin: '0',
        justifyContent: 'center',
        marginTop: '-42px',
        background: 'white',
    },
});

export const PesqIntro = styled('p', {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#555555',
    textAlign: 'center',
    //textAlign: 'justify',
    fontSize: '16px',
    lineHeight: '2.2rem',
    fontWeight: '400',
    letterSpacing: '.05rem',
    padding: '80px 12em 0 12em',
});

export const PesqContainer = styled('div', {
    display: 'grid',
    width: '70%',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '80px 12em 0 12em',
    rowGap: '60px',
    columnGap: '90px',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    margin: '0 auto',
});

export const PesqCard = styled('div', {
    width: '220px',
    height: '290px',
    background: '#fff',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    boxShadow: '0px 7px 10px rgba(0, 0, 0, 0.5)',
    transition: '0.5s ease-in-out',
    fontFamily: 'Libre Franklin, sans-serif',

    '&:hover': {
        transform: 'translateY(-10px)',
    },

    '&::before': {
        content: '',
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'block',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(0,0,0 ,0), rgba(34,34,34, 1))',
        zIndex: '2',
        transition: '0.5s all',
        opacity: '0',
    },

    ':hover&::before': {
        opacity: '1',
    },

    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: '0',
        left: '0',
    },

    div: {
        position: 'relative',
        zIndex: '3',
        color: '#fff',
        opacity: '0',
        transform: 'translateY(-20px)',
        transition: '0.5s all',
        textAlign: 'left',
        top: '-21px',
        left: '10px',

        '&:hover': {
            opacity: '1',
            transform: 'translateY(0px)',
        },
    },

    h2: {
        margin: '0 auto',
        textTransform: 'uppercase',
        fontWeight: '500',
        fontSize: '18px',
        letterSpacing: '1px',
    },

    p: {
        letterSpacing: '1px',
        fontSize: '15px',
        marginTop: '8px',
        marginBottom: '20px',
    },

    a: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        padding: '0.5rem 1rem',
        background: 'transparent',
        border: '3px solid #DA291C',
        color: 'white',
        fontSize: '15px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: '0.4s ease-in-out',

        '&:hover': {
            boxShadow: '0px 7px 10px rgba(0, 0, 0, 0.5)',
            backgroundColor: '#DA291C',
        },
    },
});

export const PesqButton = styled('div', {
    padding: '100px 0em 0 0em',

    button: {
        padding: '1em 3em 1em 3em',
        background: '#DA291C',
        opacity: '0.7',
        border: '2px solid #DA291C',
        cursor: 'pointer',
        justifyContent: 'right',
    },

    a: {
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Libre Franklin, sans-serif',
        fontSize: '16px',
        fontWeight: '600',
        letterSpacing: '.05rem',
    },

    ':hover': {
        background: '#DA291C',
        opacity: '1',
        transition: '.3s ease',
    }
});
//Fim da Seção Pesquisadores


//Seção Publicações
export const Publicações = styled('section', {
    flexDirection: 'column',
    textAlign: 'center',
    margin: 'auto',
    padding: '120px 0em 80px 0em',
    backgroundColor: 'white',

    h1: {
        fontFamily: 'Comfortaa, cursive',
        textTransform: 'lowercase',
        letterSpacing: '5px',
        fontSize: '60px',
        fontWeight: '300',
        color: '#DA291C',
        margin: '0',
        justifyContent: 'center',
        marginTop: '-42px',
        background: 'white',
    },
});


export const PubliContainer = styled('div', {
    padding: '80px 8em 0 8em',
    textAlign: 'justify',
    fontFamily: 'Libre Franklin, sans-serif',
    backgroundColor: 'WhiteSmoke',
    margin: '80px 8em 0 8em',

    a: {
        textDecoration: 'none',
        letterSpacing: '2px',
        fontSize: '20px',
        fontWeight: '600',
        color: '#555555',

        ':hover': {
            color: '#DA291C',
        }
    },
    p: {
        letterSpacing: '2px',
        fontSize: '15px',
        fontWeight: '300',
        color: '#555555',
        marginTop: '15px',
        marginBottom: '15px',
    }
});

export const PubliButton = styled('div', {
    padding: '80px 8em 40px 8em',
    margin: '0px 8em 0 8em',
    //backgroundColor: 'WhiteSmoke',
    backgroundColor: 'transparent',
    
    button: {
        padding: '1em 3em 1em 3em',
        background: '#DA291C',
        opacity: '0.7',
        border: '2px solid #DA291C',
        cursor: 'pointer',
        justifyContent: 'right',
    },

    a: {
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'Libre Franklin, sans-serif',
        fontSize: '16px',
        fontWeight: '600',
        letterSpacing: '.05rem',
        textTransform: 'uppercase',
    },

    ':hover': {
        background: '#DA291C',
        opacity: '1',
        transition: '.3s ease',
    }
});
//Fim da Seção Publicações


//Seção Contato
export const Contato = styled('section', {
    flexDirection: 'column',
    textAlign: 'center',
    margin: 'auto',
    padding: '80px 0em 80px 0em',
    backgroundColor: 'white',

    h1: {
        fontFamily: 'Comfortaa, cursive',
        textTransform: 'lowercase',
        letterSpacing: '5px',
        fontSize: '60px',
        fontWeight: '300',
        color: '#DA291C',
        margin: '0 500px',
        justifyContent: 'center',
        marginTop: '-42px',
        background: 'white',
    },
});

export const ContContainer = styled('div', {
    padding: '80px 8em 0 8em',
    fontFamily: 'Libre Franklin, sans-serif',
    display: 'flex',
    background: 'white',
    flexWrap: 'wrap',
    gap: '5rem',

    form: {
        flex: '20 1 20px',
        textAlign: 'center',
    },
});

export const Map = styled('iframe', {
    flex: '20 1 20px',
    border: 'none',
});

export const Box = styled('div', {
    display: 'flex',
    alignItems: 'center',
    marginTop: '0rem',
    marginBottom: '1rem',
    background: 'transparent',

    input: {
        width: '100%',
        padding: '1rem',
        fontSize: '16px',
        color: '#222222',
        fontFamily: 'Libre Franklin, sans-serif',
        border: '2px solid #555555',
    },
    textarea: {
        width: '100%',
        padding: '1rem',
        fontSize: '18px',
        color: '#222222',
        fontFamily: 'Libre Franklin, sans-serif',
        border: '2px solid #555555',
    },
});

export const ContButton = styled('button', {
    border: 'none',

    input: {
        padding: '1em 3em 1em 3em',
        background: '#DA291C',
        opacity: '0.7',
        border: '2px solid #DA291C',
        cursor: 'pointer',
        justifyContent: 'right',
        color: 'white',
        fontFamily: 'Libre Franklin, sans-serif',
        fontSize: '16px',
        fontWeight: '600',
        letterSpacing: '.05rem',
        textTransform: 'uppercase',
    },

    ':hover': {
        background: '#DA291C',
        opacity: '1',
        transition: '.3s ease',
    }
});
//Fim da Seção Contato


//Footer
export const Footer = styled('footer', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '25px 8em 25px 8em',
    background: 'WhiteSmoke',
});

export const FooterContainer = styled('div', {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center', 
    gap: '60rem', 
   
    p: {
        fontFamily: 'Comfortaa, cursive',
        fontSize: '12px',
        color: '#222222',
    },
    
    img: {
        display: 'flex',
        maxHeight: '30px',
        width: 'auto',
        justifyContent: 'center',
        flexDirection: 'row',
       
    },

    
});


//Fim de Footer

const LinkScroll = styled ('li',{
    color: 'red',


})