import Head from 'next/head';
import { styled } from '../styles/stitches.config';
import Main from './Components/Main';
import UniversityLogos from './Components/UniversityLogos';
import Sobre from './Components/Sobre';
import Pesquisadores from './Components/Pesquisadores';
import Publicacoes from './Components/Publicacoes';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import Projetos from './Components/Projetos';
import Youtube from './Components/Youtube';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MyNavbar from './Components/Navbar1';

export default function Home() {
  useEffect(() =>{
    Aos.init({ duration: 1500 });
  }, []);
  

  return (
    <Container>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' />
        <title>TRAMA</title>
      </Head>
      <MyNavbar/>
      <Main />
      <UniversityLogos />
      <Sobre />
      <Projetos />

      <Publicacoes />
      <Youtube />
      <Pesquisadores />
      <Contato />
      <Footer />
    </Container>
  );
}

const Container = styled('div', {});
