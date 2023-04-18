import Head from 'next/head';
import { styled } from '../styles/stitches.config';

import Main from './components/Main';
import UniversityLogos from './components/UniversityLogos';
import Sobre from './components/Sobre';
import Pesquisadores from './components/Pesquisadores';
import Publicacoes from './components/Publicacoes';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Caracol from './components/Caracol';
import Objetos from './components/Objetos';
import Youtube from './Components/Youtube';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MyNavbar from './components/Navbar1';

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
      <Caracol />
      <Objetos />
      <Publicacoes />
      <Youtube />
      <Pesquisadores />
      <Contato />
      <Footer />
    </Container>
  );
}

const Container = styled('div', {});
