import React from 'react';
import { styled } from '@/styles/stitches.config';
import Link from 'next/link';
import Head from 'next/head';
import MyNavbar from './Components/Navbar1';
import MySearch from './Components/Search';
import Footer1 from './Components/Footer1';


export default function Pesquisadores() {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' />
        <title>TRAMA</title>
      </Head>
      <MyNavbar />
      <MainContainer>
        <div>
          <img src='/logo.png' alt='Trama Logo' data-aos="fade-up" data-aos-duration="1500" />
        </div>
      </MainContainer>
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

      </Container>
      <Busca>
        <p>Buscar: <MySearch /></p>
      </Busca>
      <Container >
        <PesqContainer className='A' >
          <Imagem>
            <div>
              <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4772300H9' />
            </div>
          </Imagem>
          <Info>
            <h3>Adriana Lopes Moreira</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta nostrum ipsum dignissimos consectetur voluptatem, culpa ea ut perspiciatis sed asperiores consequatur amet sequi facilis et unde in totam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident itaque iusto repudiandae quas perferendis minus enim, saepe ex blanditiis incidunt accusamus dolor. Dolorem quibusdam quis, soluta vero obcaecati perspiciatis.</p>
            <i className="fa-regular fa-address-card"></i> <a href='http://lattes.cnpq.br/8581604014435832' target='_blank'>Acesse o Lattes</a>
            <i className="fa-regular fa-envelope"></i> <a href='mailto: adrianalopes@usp.br? subject=subject text'>Contato </a>
          </Info>
        </PesqContainer>

        <PesqContainer>
          <Imagem>
            <div>
              <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8318339U4' />
            </div>
          </Imagem>
          <Info>
            <h3>Alexandre Guilherme Montes Silva</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta nostrum ipsum dignissimos consectetur voluptatem, culpa ea ut perspiciatis sed asperiores consequatur amet sequi facilis et unde in totam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident itaque iusto repudiandae quas perferendis minus enim, saepe ex blanditiis incidunt accusamus dolor. Dolorem quibusdam quis, soluta vero obcaecati perspiciatis.</p>
            <i className="fa-regular fa-address-card"></i> <a href='http://lattes.cnpq.br/4268990369548346' target='_blank'>Acesse o Lattes</a>
            <i className="fa-regular fa-envelope"></i> <a href='mailto: / subject=subject text'>Contato </a>
          </Info>
        </PesqContainer>

        <PesqContainer>
          <Imagem>
            <div>
              <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4323162P8' />
            </div>
          </Imagem>
          <Info>
            <h3>Ana Leticia Crozetta Zomer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta nostrum ipsum dignissimos consectetur voluptatem, culpa ea ut perspiciatis sed asperiores consequatur amet sequi facilis et unde in totam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident itaque iusto repudiandae quas perferendis minus enim, saepe ex blanditiis incidunt accusamus dolor. Dolorem quibusdam quis, soluta vero obcaecati perspiciatis.</p>
            <i className="fa-regular fa-address-card"></i> <a href='http://lattes.cnpq.br/0751306719457850' target='_blank'>Acesse o Lattes</a>
            <i className="fa-regular fa-envelope"></i> <a href='mailto: analeticiazomer@gmail.com? subject=subject text'>Contato </a>
          </Info>
        </PesqContainer>

        <PesqContainer className='B'>
          <Imagem>
            <div>
              <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8835158H4' />
            </div>
          </Imagem>
          <Info>
            <h3>Benedicto Bueno Gurgel Júnior</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta nostrum ipsum dignissimos consectetur voluptatem, culpa ea ut perspiciatis sed asperiores consequatur amet sequi facilis et unde in totam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident itaque iusto repudiandae quas perferendis minus enim, saepe ex blanditiis incidunt accusamus dolor. Dolorem quibusdam quis, soluta vero obcaecati perspiciatis.</p>
            <i className="fa-regular fa-address-card"></i> <a href='http://lattes.cnpq.br/1883300038650218' target='_blank'>Acesse o Lattes</a>
            <i className="fa-regular fa-envelope"></i> <a href='mailto: / subject=subject text'>Contato </a>
          </Info>
        </PesqContainer>

        <PesqContainer className='D'>
          <Imagem>
            <div>
              <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4713592T1' />
            </div>
          </Imagem>
          <Info>
            <h3>Daniel Paes de Barros</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta nostrum ipsum dignissimos consectetur voluptatem, culpa ea ut perspiciatis sed asperiores consequatur amet sequi facilis et unde in totam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident itaque iusto repudiandae quas perferendis minus enim, saepe ex blanditiis incidunt accusamus dolor. Dolorem quibusdam quis, soluta vero obcaecati perspiciatis.</p>
            <i className="fa-regular fa-address-card"></i> <a href='http://lattes.cnpq.br/4978408816379790' target='_blank'>Acesse o Lattes</a>
            <i className="fa-regular fa-envelope"></i> <a href='mailto: / subject=subject text'>Contato </a>
          </Info>
        </PesqContainer>

        <PesqContainer className='E'>
          <Imagem>
            <div>
              <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4439412P6' />
            </div>
          </Imagem>
          <Info>
            <h3>Elder dos Santos Oliveira Junior</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta nostrum ipsum dignissimos consectetur voluptatem, culpa ea ut perspiciatis sed asperiores consequatur amet sequi facilis et unde in totam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident itaque iusto repudiandae quas perferendis minus enim, saepe ex blanditiis incidunt accusamus dolor. Dolorem quibusdam quis, soluta vero obcaecati perspiciatis.</p>
            <i className="fa-regular fa-address-card"></i> <a href='http://lattes.cnpq.br/5195177280939183' target='_blank'>Acesse o Lattes</a>
            <i className="fa-regular fa-envelope"></i> <a href='mailto: / subject=subject text'>Contato </a>
          </Info>
        </PesqContainer>

        <PesqContainer className='G'>
          <Imagem>
            <div>
              <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4268689A7' />
            </div>
          </Imagem>
          <Info>
            <h3>Glaucio Adriano Zangheri</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta nostrum ipsum dignissimos consectetur voluptatem, culpa ea ut perspiciatis sed asperiores consequatur amet sequi facilis et unde in totam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident itaque iusto repudiandae quas perferendis minus enim, saepe ex blanditiis incidunt accusamus dolor. Dolorem quibusdam quis, soluta vero obcaecati perspiciatis.</p>
            <i className="fa-regular fa-address-card"></i> <a href='http://lattes.cnpq.br/0567545551455140' target='_blank'>Acesse o Lattes</a>
            <i className="fa-regular fa-envelope"></i> <a href='mailto: / subject=subject text'>Contato </a>
          </Info>
        </PesqContainer>

        <PesqContainer>
          <Imagem>
            <div>
              <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8615443H1' />
            </div>
          </Imagem>
          <Info>
            <h3>Gregório dos Santos Oliveira</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta nostrum ipsum dignissimos consectetur voluptatem, culpa ea ut perspiciatis sed asperiores consequatur amet sequi facilis et unde in totam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident itaque iusto repudiandae quas perferendis minus enim, saepe ex blanditiis incidunt accusamus dolor. Dolorem quibusdam quis, soluta vero obcaecati perspiciatis.</p>
            <i className="fa-regular fa-address-card"></i> <a href='http://lattes.cnpq.br/6923381906862508' target='_blank'>Acesse o Lattes</a>
            <i className="fa-regular fa-envelope"></i> <a href='mailto: / subject=subject text'>Contato </a>
          </Info>
        </PesqContainer>

        <PesqContainer className='M'>
          <Imagem>
            <div>
              <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4794386T3' />
            </div>
          </Imagem>
          <Info>
            <h3>Maria Lúcia Senna Machado Pascoal</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta nostrum ipsum dignissimos consectetur voluptatem, culpa ea ut perspiciatis sed asperiores consequatur amet sequi facilis et unde in totam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident itaque iusto repudiandae quas perferendis minus enim, saepe ex blanditiis incidunt accusamus dolor. Dolorem quibusdam quis, soluta vero obcaecati perspiciatis.</p>
            <i className="fa-regular fa-address-card"></i> <a href='http://lattes.cnpq.br/1957519903631670' target='_blank'>Acesse o Lattes</a>
            <i className="fa-regular fa-envelope"></i> <a href='mailto: / subject=subject text'>Contato </a>
          </Info>
        </PesqContainer>

        <PesqContainer>
          <Imagem>
            <div>
              <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4779746Z2' />
            </div>
          </Imagem>
          <Info>
            <h3>Mário Rodrigues Videira Junior</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta nostrum ipsum dignissimos consectetur voluptatem, culpa ea ut perspiciatis sed asperiores consequatur amet sequi facilis et unde in totam reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident itaque iusto repudiandae quas perferendis minus enim, saepe ex blanditiis incidunt accusamus dolor. Dolorem quibusdam quis, soluta vero obcaecati perspiciatis.</p>
            <i className="fa-regular fa-address-card"></i> <a href='http://lattes.cnpq.br/0594285512566549' target='_blank'>Acesse o Lattes</a>
            <i className="fa-regular fa-envelope"></i> <a href='mailto: / subject=subject text'>Contato </a>
          </Info>
        </PesqContainer>

        <PesqButton>
          <button>
            <Link href='/inicio' legacyBehavior>
              <a>Voltar</a>
            </Link>
          </button>
        </PesqButton>
      </Container>
      <Footer1></Footer1>
    </>
  );
}

const MainContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'whitesmoke',

  div: {
    background: 'white',
    marginTop: '65px',
    width: '100%',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '50px',
  },
});

const Container = styled('section', {
  flexDirection: 'column',
  //margin: 'auto',
  padding: '40px 10em 20px 10em',
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
    padding: '40px 0em 20px 0em',
    marginBottom: '20px',
  },

  h2: {
    //fontFamily: 'Comfortaa, cursive',
    fontFamily: 'Libre Franklin, sans-serif',
    //textTransform: 'lowercase',
    letterSpacing: '2px',
    fontSize: '30px',
    fontWeight: '400',
    color: '#555555',
    justifyContent: 'justify',
    display: 'flex',
    marginBottom: '20px',
    marginTop: '0px',
  },

  h4: {
    //fontFamily: 'Comfortaa, cursive',
    fontFamily: 'Libre Franklin, sans-serif',
    //textTransform: 'lowercase',
    letterSpacing: '2px',
    fontSize: '30px',
    fontWeight: '400',
    color: '#555555',
    justifyContent: 'justify',
    display: 'flex',
    marginBottom: '20px',
    marginTop: '50px',
  },
});

const Busca = styled('div', {
  marginBottom: '0px',
  padding: '0px 10em 0px 10em',

  p: {
    fontFamily: 'Libre Franklin, sans-serif',
    letterSpacing: '2px',
    fontSize: '15px',
    fontWeight: '400',
    color: '#8A8A8A',
    justifyContent: 'left',
    display: 'flex',
    padding: '0px',
    marginBottom: '0px',
  },
});

const PesqContainer = styled('div', {
  alignItems: 'center',
  padding: '10px',
  position: 'relative',
  backgroundColor: 'white',
  flexDirection: 'column',
  borderRadius: '10px',
  marginBottom: '20px',
});


const Imagem = styled('div', {
  width: '200px',
  height: '260px',
  position: 'relative',
  display: 'inline-block',
  fontFamily: 'Libre Franklin, sans-serif',
  borderRadius: '10px',
  float: 'left',
  flexDirection: 'row',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: '0',
    borderRadius: '10px',
  },
});

const Info = styled('div', {
  alignItems: 'center',
  backgroundColor: 'white',
  flexDirection: 'column',
  display: 'inline-block',
  float: 'right',
  width: '83%',
  justifyContent: 'center',

  h3: {
    fontFamily: 'Libre Franklin, sans-serif',
    //fontFamily: 'Comfortaa, cursive',
    //textTransform: 'lowercase',
    letterSpacing: '2px',
    fontSize: '25px',
    fontWeight: '400',
    color: '#555555',
    textAlign: 'justify',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  },

  p: {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#555555',
    textAlign: 'justify',
    fontSize: '15px',
    lineHeight: '2.2rem',
    fontWeight: '400',
    letterSpacing: '.05rem',
    marginTop: '25px',
    padding: '0',
    marginRight: '25px',
  },

  a: {
    fontFamily: 'Libre Franklin, sans-serif',
    color: '#555555',
    textAlign: 'justify',
    fontSize: '15px',
    lineHeight: '2.2rem',
    fontWeight: '500',
    letterSpacing: '.05rem',
    marginRight: '30px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    justifyContent: 'space-around',
    cursor: 'pointer',
    '&:hover': {
      color: '#DA291C',
      transition: '.3s ease',
    },
  },
});

const PesqButton = styled('div', {
  padding: '20px 0em 0em 0em',
  justifyContent: 'center',
  position: 'relative',
  display: 'flex',

  button: {
    padding: '1em 3em 1em 3em',
    background: '#8A8A8A',
    opacity: '0.7',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.3)',
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

//////////////////CORRIGIR BOTÃO VOLTAR
//////////////////CORRIGIR NAVBAR
/////////////////CORRIGIR POSIÇÃO BARRA BUSCAR