import React from 'react';
import { styled } from '../../styles/stitches.config';
import Link from 'next/link';


export default function Pesquisadores() {
  return (
    <>
      <Container className='pesquisadores'>
        <h1 data-aos="fade-right">Pesquisadores</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
          urna, efficitur at dui non, dignissim tempus erat. Quisque malesuada
          sem turpis, vitae ultricies nisl bibendum non. Proin eu magna eget
          nisl luctus bibendum. Vestibulum quis commodo ligula, ut tempus diam.
          Ut nec posuere dolor. Maecenas euismod sit amet quam at convallis.
          Nullam quis viverra dui. Mauris tempus in neque in blandit.
        </p>
        <PesqContainer>
          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4772300H9' />
            <div>
              <h2>Adriana <br></br> Lopes Moreira</h2>
              <p>Livre-docente <br></br> (USP)</p>
              <a href='http://lattes.cnpq.br/8581604014435832' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8318339U4' />
            <div>
              <h2>Alexandre <br></br> Guilherme Silva</h2>
              <p>Mestre em Música <br></br> (USP)</p>
              <a href='http://lattes.cnpq.br/4268990369548346' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4323162P8' />
            <div>
              <h2>Ana Leticia <br></br> Zomer</h2>
              <p>Doutora em Música <br></br> (USP)</p>
              <a href='http://lattes.cnpq.br/0751306719457850' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard1>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8835158H4' />
            <div>
              <h2>Benedicto <br></br> Gurgel Júnior</h2>
              <p>Doutorando em Música <br></br> (USP)</p>
              <a href='http://lattes.cnpq.br/1883300038650218' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard1>

          <PesqCard1>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4713592T1' />
            <div>
              <h2>Daniel <br></br> Paes de Barros</h2>
              <p>Doutorando em Música <br></br> (USP) </p>
              <a href='http://lattes.cnpq.br/4978408816379790' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard1>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4439412P6' />
            <div>
              <h2>Elder <br></br>Oliveira Junior</h2>
              <p>Doutor em Música <br></br> (UA)</p>
              <a href='http://lattes.cnpq.br/5195177280939183' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4268689A7' />
            <div>
              <h2>Glaucio <br></br> Adriano Zangheri</h2>
              <p>Doutor em Música <br></br> (USP)</p>
              <a href='http://lattes.cnpq.br/0567545551455140' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard2>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8615443H1' />
            <div>
              <h2>Gregório <br></br>dos Santos Oliveira</h2>
              <p>Mestrando em Música <br></br> (GSU)</p>
              <a href='http://lattes.cnpq.br/6923381906862508' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard2>

          <PesqCard1>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4794386T3' />
            <div>
              <h2>Maria Lúcia Pascoal</h2>
              <p>Doutora em Artes <br></br> (Unicamp)</p>
              <a href='http://lattes.cnpq.br/1957519903631670' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard1>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4779746Z2' />
            <div>
              <h2>Mário <br></br>Videira</h2>
              <p>Livre-docente <br></br> (USP)</p>
              <a href='http://lattes.cnpq.br/0594285512566549' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>
        </PesqContainer>
        <PesqButton>
          <button>
            <Link href='/Pesquisadores' legacyBehavior>
              <a>Veja mais</a>
            </Link>
          </button>
        </PesqButton>
      </Container>
    </>
  );
}

const Container = styled('section', {
  flexDirection: 'column',
  textAlign: 'center',
  margin: 'auto',
  padding: '100px 10em 100px 10em',
  backgroundColor: 'whitesmoke',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',

  h1: {
    fontFamily: 'Comfortaa, cursive',
    textTransform: 'lowercase',
    letterSpacing: '2px',
    fontSize: '50px',
    fontWeight: '400',
    color: '#DA291C',
    justifyContent: 'justify',
    display: 'flex',
  },

  p: {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#555555',
    textAlign: 'justify',
    fontSize: '15px',
    lineHeight: '2.2rem',
    fontWeight: '400',
    letterSpacing: '.05rem',
    padding: '50px 0em 0 0em',
  },
});



const PesqContainer = styled('div', {
  display: 'grid',
  width: '100%',
  justifyContent: 'space-around',
  alignItems: 'center',
  //padding: '80px',
  padding: '70px 10em 0px 10em',
  rowGap: '70px',
  columnGap: '80px',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  position: 'relative',
});

const PesqCard = styled('div', {
  width: '220px',
  height: '290px',
  position: 'relative',
  display: 'flex',
  boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
  transition: '0.5s ease-in-out',
  fontFamily: 'Libre Franklin, sans-serif',
  borderRadius: '10px',

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
    borderRadius: '0 0 10px 10px',
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: '0',
    borderRadius: '10px',
  },

  div: {
    position: 'relative',
    zIndex: '3',
    color: '#fff',
    opacity: '0',
    transform: 'translateY(-40px)',
    transition: 'all .5s .1s',
    textAlign: 'left',
    width: '220px',
    height: '290px',
    marginTop: '0px',

    '&:hover': {
      opacity: '1',
      transform: 'translateY(-50px)',
    },

    h2: {
      textTransform: 'uppercase',
      fontWeight: '500',
      fontSize: '18px',
      letterSpacing: '1px',
      padding: '190px 0px 0px 10px',
    },

    p: {
      letterSpacing: '1px',
      fontSize: '15px',
      fontWeight: '500',
      padding: '10px 10px 20px 10px',
      color: 'white',
      lineHeight: '18px',
      textAlign: 'left',
    },

    a: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      padding: '0.5rem 1rem',
      background: '#DA291C',
      border: '3px solid #DA291C',
      color: 'white',
      fontSize: '15px',
      fontWeight: '500',
      cursor: 'pointer',
      marginLeft: '10px',
      alignItems: 'end',
      borderRadius: '10px',
      opacity: '0.7',

      '&:hover': {
        boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
        opacity: '1',
      },
    },
  },
});

const PesqCard1 = styled('div', {
  width: '220px',
  height: '290px',
  position: 'relative',
  display: 'flex',
  boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
  transition: '0.5s ease-in-out',
  fontFamily: 'Libre Franklin, sans-serif',
  borderRadius: '10px',

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
    borderRadius: '0 0 10px 10px',
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: '0',
    borderRadius: '10px',
  },

  div: {
    position: 'relative',
    zIndex: '3',
    color: '#fff',
    opacity: '0',
    transform: 'translateY(-40px)',
    transition: 'all .5s .1s',
    textAlign: 'left',
    width: '220px',
    height: '290px',
    marginTop: '0px',

    '&:hover': {
      opacity: '1',
      transform: 'translateY(-50px)',
    },
  },

  h2: {
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: '18px',
    letterSpacing: '1px',
    padding: '190px 0px 0px 10px',
  },

  p: {
    letterSpacing: '1px',
    fontSize: '15px',
    fontWeight: '500',
    padding: '10px 10px 20px 10px',
    color: 'white',
    lineHeight: '18px',
  },

  a: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '0.5rem 1rem',
    background: '#DA291C',
    border: '3px solid #DA291C',
    color: 'white',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
    marginLeft: '10px',
    alignItems: 'end',
    borderRadius: '10px',
    opacity: '0.7',

    '&:hover': {
      boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
      opacity: '1',
    },
  },
});

const PesqCard2 = styled('div', {
  width: '220px',
  height: '290px',
  position: 'relative',
  display: 'flex',
  boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
  transition: '0.5s ease-in-out',
  fontFamily: 'Libre Franklin, sans-serif',
  borderRadius: '10px',

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
    borderRadius: '0 0 10px 10px',
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: '0',
    borderRadius: '10px',
  },

  div: {
    position: 'relative',
    zIndex: '3',
    color: '#fff',
    opacity: '0',
    transform: 'translateY(-65px)',
    transition: 'all .5s .1s',
    textAlign: 'left',
    width: '220px',
    height: '290px',
    marginTop: '0px',

    '&:hover': {
      opacity: '1',
      transform: 'translateY(-70px)',
    },
  },

  h2: {
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: '18px',
    letterSpacing: '1px',
    padding: '190px 0 0 10px',
  },

  p: {
    letterSpacing: '1px',
    fontSize: '15px',
    fontWeight: '500',
    padding: '10px 10px 20px 10px',
    color: 'white',
    lineHeight: '18px',
    textAlign: 'left',
  },

  a: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '0.5rem 1rem',
    background: '#DA291C',
    border: '3px solid #DA291C',
    color: 'white',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
    marginLeft: '10px',
    alignItems: 'end',
    borderRadius: '10px',
    opacity: '0.7',

    '&:hover': {
      boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
      opacity: '1',
    },
  },
});

const PesqButton = styled('div', {
  padding: '80px 0em 0 0em',

  button: {
    padding: '1em 3em 1em 3em',
    background: '#8A8A8A',
    opacity: '0.7',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
    float: 'left',
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
    color: 'white',
    background: '#555555',
    opacity: '1',
    transition: '.3s ease',
  },
});

//Falta inserir o parágrafo//

//Fazer página//
