import { Inter } from '@next/font/google'
import { Main, MainContainer } from '@/styles';
import { Logos } from '@/styles';
import { Sobre, SobreContainer, ContainerButton, ButtonBar } from '@/styles';
import { Pesquisadores, PesqIntro, PesqContainer, PesqCard, PesqButton } from '@/styles';
import { Publicações, PubliContainer, PubliButton } from '@/styles';
import { Contato, ContContainer, Map, Box, ContButton } from '@/styles';
import { Header, Navbar } from '@/styles';
import { Footer, FooterContainer } from '@/styles';
import {Link as LinkScroll} from 'react-scroll';
import { Button } from './Elements/Button';

import Head from 'next/head';
/* import styles from '../styles/Home.module.css' */
import Link from 'next/link';
/* import { styled } from '@stitches/react'; */
import Script from 'next/script';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>TRAMA</title>
      </Head>

      {/*Seção Header */}
      <Header>
        <div>
          <Navbar>
            <div>
              {/*   <a href="#Main">
                  <Logo src="/logo.png" alt="Trama Logo" /></a> */}
            </div>
            <div>
              <ul>
                <li><a href="#Main">Início</a></li>
                <Button text='teste'/> 
                <LinkScroll><a href="#Sobre">Sobre</a></LinkScroll>
                <li><a href="#Pesquisadores">Pesquisadores</a></li>
                <li><a href="#Publicações">Publicações</a></li>
                <li><a href="Contato">Contato</a></li>
              </ul>
            </div>
          </Navbar>
        </div>
      </Header>
      {/* Fim do Header */}


      {/* Seção principal */}
      <Main>
        <MainContainer>
          <div>
            <img src="/logo.png" alt="Trama Logo" />
          </div>
        </MainContainer>
      </Main>
      {/* Fim da Seção Principal */}

      {/* Seção ECA-USP */}
      <Logos>
        <a href="https://www5.usp.br/" target='_blank'><img src="/usp1.png" /></a>
        <a href="https://www.eca.usp.br/" target='_blank'><img src="/logoeca.png" /></a>
        <a href="https://www.eca.usp.br/cmu/laboratorios-didaticos" target='_blank'><img src="/pam.png" /></a>
        <a href="https://www.tramausp.com.br/" target='_blank'><img src="/logo.png" /></a>
        <a href="https://eitam5.nics.unicamp.br/" target='_blank'><img src="/eitam2.png" /></a>
      </Logos>
      {/* Fim da Seção ECA-USP */}



      {/* Seção Sobre */}
      <Sobre className='sobre'>
        <SobreContainer>
          <h1>Sobre</h1>
          <p>O Grupo de Pesquisa TRAMA - TEORIA E ANÁLISE MUSICAL tem por finalidade a aplicação de conceitos teóricos emergentes para a prática analítica textual de obras musicais, sobretudo compostas nos séculos XX e XXI, considerados seus registros impressos e fonográficos, e tendo como ponto de contato a interpretação musicalmente consequente. Envolve as práticas assim denominadas análise musical, estética, percepção musical, performance musical e criação musical, produzindo registros textuais e sonoros. O grupo TRAMA é sediado no Laboratório de Percepção e Análise Musical do Departamento de Música da Escola de Comunicações e Artes da Universidade de São Paulo (PAM-CMU-ECA-USP), coordenado pela Profa. dra. Adriana Lopes da Cunha Moreira e tem entre seus membros, prioritariamente, pesquisadores vinculados ao Programa de Pós-Graduação em Música da Escola de Comunicações e Artes da Universidade de São Paulo (PPGMUS-ECA-USP).
            <br></br>
            Os membros do Grupo de Pesquisa TRAMA e do Laboratório Didático PAM têm tido uma participação marcante nas edições dos Encontros Internacionais de Teoria e Análise Musical, EITAM – na organização do evento, na apresentação de comunicações e palestras, e na publicação de artigos.
            <br></br>
            Esperamos que este site possa emanar aos leitores a tríplice sinergia, do Grupo de Pesquisa TRAMA, do Laboratório Didático PAM e dos Encontros Internacionais de Teoria e Análise Musical, EITAM.
            <br></br>
            <br></br>
            <span>Líder</span>: Adriana Lopes da Cunha Moreira
            <br></br>
            <span>Ano de formação</span>: 2015 | <span>Área predominante</span>: Linguística, Letras e Artes; Artes | <span>Instituição</span>: Universidade de São Paulo – USP</p>
          <ContainerButton>
            <ButtonBar>
              <button><a href="http://dgp.cnpq.br/dgp/espelhogrupo/256763" target='_blank'>TRAMA no CNPq</a></button>
              <button><a href="http://www.eca.usp.br/cmu/grupos-de-pesquisa" target='_blank'>TRAMA na USP</a></button>
            </ButtonBar>
          </ContainerButton>
        </SobreContainer>
      </Sobre>
      {/* Fim da Seção Sobre */}



      {/* Seção Pesquisadores */}
      <Pesquisadores>
        <h1>Pesquisadores</h1>
        <PesqIntro>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus urna, efficitur at dui non, dignissim tempus erat. Quisque malesuada sem turpis, vitae ultricies nisl bibendum non. Proin eu magna eget nisl luctus bibendum. Vestibulum quis commodo ligula, ut tempus diam. Ut nec posuere dolor. Maecenas euismod sit amet quam at convallis. Nullam quis viverra dui. Mauris tempus in neque in blandit.</PesqIntro>
        <PesqContainer>
          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4772300H9' />
            <div>
              <h2>Adriana Lopes Moreira</h2>
              <p>Livre-docente (USP)</p>
              <a href="http://lattes.cnpq.br/8581604014435832" target='_blank'>Saiba mais</a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8318339U4' />
            <div>
              <h2>Alexandre Guilherme Silva</h2>
              <p>Mestre em Música (USP)</p>
              <a href="http://lattes.cnpq.br/4268990369548346" target='_blank'>Saiba mais</a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4323162P8' />
            <div>
              <h2>Ana Leticia Zomer</h2>
              <p>Doutora em Música (USP)</p>
              <a href="http://lattes.cnpq.br/0751306719457850" target='_blank'>Saiba mais</a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8835158H4' />
            <div>
              <h2>Benedicto Gurgel Júnior</h2>
              <p>Doutorando em Música (USP)</p>
              <a href="http://lattes.cnpq.br/1883300038650218" target='_blank'>Saiba mais</a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4713592T1' />
            <div>
              <h2>Daniel Paes de Barros</h2>
              <p>Doutorando em Música (USP) </p>
              <a href="http://lattes.cnpq.br/4978408816379790" target='_blank'>Saiba mais</a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4439412P6' />
            <div>
              <h2>Elder Oliveira Junior</h2>
              <p>Doutor em Música (UA)</p>
              <a href="http://lattes.cnpq.br/5195177280939183" target='_blank'>Saiba mais</a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4268689A7' />
            <div>
              <h2>Glaucio Adriano Zangheri</h2>
              <p>Doutor em Música (USP)</p>
              <a href="http://lattes.cnpq.br/0567545551455140" target='_blank'>Saiba mais</a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8615443H1' />
            <div>
              <h2>Gregório dos Santos Oliveira</h2>
              <p>Mestrando em Música (GSU)</p>
              <a href="http://lattes.cnpq.br/6923381906862508" target='_blank'>Saiba mais</a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4794386T3' />
            <div>
              <h2>Maria Lúcia Pascoal</h2>
              <p>Doutora em Artes (Unicamp)</p>
              <a href="http://lattes.cnpq.br/1957519903631670" target='_blank'>Saiba mais</a>
            </div>
          </PesqCard>

          <PesqCard>
            <img src='http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4779746Z2' />
            <div>
              <h2>Mário Videira</h2>
              <p>Livre-docente (USP)</p>
              <a href="http://lattes.cnpq.br/0594285512566549" target='_blank'>Saiba mais</a>
            </div>
          </PesqCard>
        </PesqContainer>
        <PesqButton>
          <button><Link href="/Pesquisadores" legacyBehavior><a>Conheça os colaboradores</a></Link></button>
        </PesqButton>
      </Pesquisadores>
      {/* Fim da Seção Pesquisadores */}


      {/* Seção Publicações */}
      <Publicações>
        <h1>Publicações</h1>
        <PesqIntro>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus urna, efficitur at dui non, dignissim tempus erat. Quisque malesuada sem turpis, vitae ultricies nisl bibendum non. Proin eu magna eget nisl luctus bibendum. Vestibulum quis commodo ligula, ut tempus diam. Ut nec posuere dolor. Maecenas euismod sit amet quam at convallis. Nullam quis viverra dui. Mauris tempus in neque in blandit.</PesqIntro>
        <PubliContainer>


          <a><Link href="https://www.anppom.com.br/revista/index.php/opus/article/view/opus2021b2711">A natureza livre de Mario Ficarelli: uma análise da obra <i>Maktub II</i> (1972) para violino e piano.</Link></a>
          <p>Ana Leticia Zomer e Adriana Lopes Moreira</p>
          <br></br>
          <a><Link href="https://www.anppom.com.br/revista/index.php/opus/article/view/opus2021b2711">A natureza livre de Mario Ficarelli: uma análise da obra <i>Maktub II</i> (1972) para violino e piano.</Link></a>
          <p>Ana Leticia Zomer e Adriana Lopes Moreira</p>
          <br></br>
          <a><Link href="https://www.anppom.com.br/revista/index.php/opus/article/view/opus2021b2711">A natureza livre de Mario Ficarelli: uma análise da obra <i>Maktub II</i> (1972) para violino e piano.</Link></a>
          <p>Ana Leticia Zomer e Adriana Lopes Moreira</p>
          <br></br>
          <a><Link href="https://www.anppom.com.br/revista/index.php/opus/article/view/opus2021b2711">A natureza livre de Mario Ficarelli: uma análise da obra <i>Maktub II</i> (1972) para violino e piano.</Link></a>
          <p>Ana Leticia Zomer e Adriana Lopes Moreira</p>
          <br></br>
          <a><Link href="https://www.anppom.com.br/revista/index.php/opus/article/view/opus2021b2711">A natureza livre de Mario Ficarelli: uma análise da obra <i>Maktub II</i> (1972) para violino e piano.</Link></a>
          <p>Ana Leticia Zomer e Adriana Lopes Moreira</p>
          <br></br>
        </PubliContainer>
        <PubliButton>
          <button><Link href="#"><b>Ver mais</b></Link></button>
        </PubliButton>
      </Publicações>
      {/* Fim da Seção Publicações */}


      {/* Seção contato */}
      <Contato>
        <h1>Contato</h1>
        <ContContainer>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.28381655509!2d-46.72894208519028!3d-23.558248067362076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce563e4e136525%3A0xdb37c533afea882d!2sAv.%20Prof.%20L%C3%BAcio%20Martins%20Rodrigues%2C%20443%20-%20Butant%C3%A3%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005508-020!5e0!3m2!1spt-BR!2sbr!4v1679407038644!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Map>
          <form action="">
            <Box>
              <input type={"text"} placeholder="Nome"></input>
            </Box>
            <Box>
              <input type={"email"} placeholder="E-mail"></input>
            </Box>
            <Box>
              <textarea placeholder='Deixe aqui sua mensagem' rows={4}></textarea>
            </Box>
            <ContButton><input type="submit" value='Enviar' />
            </ContButton>
          </form>
        </ContContainer>
      </Contato>
      {/* Fim da Seção Contato */}


      {/* Footer */}
      <Footer>
        <FooterContainer>
          <img src="/logo.png"></img>
          <p>Av. Prof. Lúcio Martins Rodrigues, 443 | Butantã, São Paulo - SP | CEP 05508-020</p>
        </FooterContainer>
      </Footer>
      {/* Fim de Footer */}


      <Script src="app.js">
      </Script>
    </>
  )
}



