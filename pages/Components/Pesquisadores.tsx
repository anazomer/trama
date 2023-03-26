import React from 'react';
import { styled } from '../../styles/stitches.config';
import Link from 'next/link';

export default function Pesquisadores() {
  return (
    <>
      <Container className='pesquisadores'>
        <h1>Pesquisadores</h1>
        <PesqIntro>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
          urna, efficitur at dui non, dignissim tempus erat. Quisque malesuada
          sem turpis, vitae ultricies nisl bibendum non. Proin eu magna eget
          nisl luctus bibendum. Vestibulum quis commodo ligula, ut tempus diam.
          Ut nec posuere dolor. Maecenas euismod sit amet quam at convallis.
          Nullam quis viverra dui. Mauris tempus in neque in blandit.
        </PesqIntro>
        <PesqContainer>
          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4772300H9' />
            <div>
              <h2>Adriana Lopes Moreira</h2>
              <p>Livre-docente (USP)</p>
              <a href='http://lattes.cnpq.br/8581604014435832' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8318339U4' />
            <div>
              <h2>Alexandre Guilherme Silva</h2>
              <p>Mestre em Música (USP)</p>
              <a href='http://lattes.cnpq.br/4268990369548346' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4323162P8' />
            <div>
              <h2>Ana Leticia Zomer</h2>
              <p>Doutora em Música (USP)</p>
              <a href='http://lattes.cnpq.br/0751306719457850' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8835158H4' />
            <div>
              <h2>Benedicto Gurgel Júnior</h2>
              <p>Doutorando em Música (USP)</p>
              <a href='http://lattes.cnpq.br/1883300038650218' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4713592T1' />
            <div>
              <h2>Daniel Paes de Barros</h2>
              <p>Doutorando em Música (USP) </p>
              <a href='http://lattes.cnpq.br/4978408816379790' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4439412P6' />
            <div>
              <h2>Elder Oliveira Junior</h2>
              <p>Doutor em Música (UA)</p>
              <a href='http://lattes.cnpq.br/5195177280939183' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4268689A7' />
            <div>
              <h2>Glaucio Adriano Zangheri</h2>
              <p>Doutor em Música (USP)</p>
              <a href='http://lattes.cnpq.br/0567545551455140' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8615443H1' />
            <div>
              <h2>Gregório dos Santos Oliveira</h2>
              <p>Mestrando em Música (GSU)</p>
              <a href='http://lattes.cnpq.br/6923381906862508' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4794386T3' />
            <div>
              <h2>Maria Lúcia Pascoal</h2>
              <p>Doutora em Artes (Unicamp)</p>
              <a href='http://lattes.cnpq.br/1957519903631670' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4779746Z2' />
            <div>
              <h2>Mário Videira</h2>
              <p>Livre-docente (USP)</p>
              <a href='http://lattes.cnpq.br/0594285512566549' target='_blank'>
                Saiba mais
              </a>
            </div>
          </PesqCard>
        </PesqContainer>
        <PesqButton>
          <button>
            <Link href='/Pesquisadores' legacyBehavior>
              <a>Conheça os colaboradores</a>
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

const PesqIntro = styled('p', {
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

const PesqContainer = styled('div', {
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

const PesqCard = styled('div', {
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

const PesqButton = styled('div', {
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
  },
});
