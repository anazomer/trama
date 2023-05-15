import React from 'react';
import { styled } from '../../styles/stitches.config';


export default function Sobre() {
  return (
    <>
      <Container className='sobre'>
        <SobreContainer>
          <h1 data-aos="fade-right">Sobre</h1>
          <div>
            <p>
              O Grupo de Pesquisa TRAMA - TEORIA E ANÁLISE MUSICAL tem por
              finalidade a aplicação de conceitos teóricos emergentes para a
              prática analítica textual de obras musicais, sobretudo compostas nos
              séculos XX e XXI, considerados seus registros impressos e
              fonográficos, e tendo como ponto de contato a interpretação
              musicalmente consequente. Envolve as práticas assim denominadas
              análise musical, estética, percepção musical, performance musical e
              criação musical, produzindo registros textuais e sonoros. O grupo
              TRAMA é sediado no Laboratório de Percepção e Análise Musical do
              Departamento de Música da Escola de Comunicações e Artes da
              Universidade de São Paulo (PAM-CMU-ECA-USP), coordenado pela Profa.
              dra. Adriana Lopes da Cunha Moreira e tem entre seus membros,
              prioritariamente, pesquisadores vinculados ao Programa de
              Pós-Graduação em Música da Escola de Comunicações e Artes da
              Universidade de São Paulo (PPGMUS-ECA-USP).
              <br></br>
              Os membros do Grupo de Pesquisa TRAMA e do Laboratório Didático PAM
              têm tido uma participação marcante nas edições dos Encontros
              Internacionais de Teoria e Análise Musical, EITAM – na organização
              do evento, na apresentação de comunicações e palestras, e na
              publicação de artigos.
              <br></br>
              Esperamos que este site possa emanar aos leitores a tríplice
              sinergia, do Grupo de Pesquisa TRAMA, do Laboratório Didático PAM e
              dos Encontros Internacionais de Teoria e Análise Musical, EITAM.
              <br></br>
              <br></br>
              <span>Líder</span>: Adriana Lopes da Cunha Moreira
              <br></br>
              <span>Ano de formação</span>: 2015 | <span>Área predominante</span>:
              Linguística, Letras e Artes; Artes | <span>Instituição</span>:
              Universidade de São Paulo – USP
            </p>
          </div>
          <ContainerButton>
            <ButtonBar>
              <button>
                <a href='http://dgp.cnpq.br/dgp/espelhogrupo/256763' target='_blank'>TRAMA no CNPq</a>
              </button>
              <button>
                <a href='http://www.eca.usp.br/cmu/grupos-de-pesquisa' target='_blank'>TRAMA na USP</a>
              </button>
            </ButtonBar>
          </ContainerButton>
        </SobreContainer>
      </Container>
    </>
  );
}

const Container = styled('section', {
  margin: 'auto',
  padding: '70px 10em 70px 10em',
  backgroundColor: 'whitesmoke',
  alignItems: 'center',
});

const SobreContainer = styled('section', {
  alignItems: 'center',
  justifyContent: 'center',

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

  span: {
    fontWeight: '700',
    color: '#555555',
  },
});

const ContainerButton = styled('div', {
  maxWidth: '100%',
  padding: '50px 0 0px 0',
  display: 'flex',
  justifyContent: 'justify',
  alignItems: 'center',
});

const ButtonBar = styled('div', {
  display: 'flex',
  gap: '30px',

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
  },

  ':hover': {
    color: 'white',
    background: '#555555',
    opacity: '1',
    transition: '.3s ease',
  },
});
