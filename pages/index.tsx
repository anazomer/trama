import Head from 'next/head';
import { styled } from '../styles/stitches.config';

import Navbar from './components/Navbar';
import Main from './components/Main';
import UniversityLogos from './components/UniversityLogos';
import Sobre from './components/Sobre';
import Pesquisadores from './components/Pesquisadores';
import Publicacoes from './components/Publicacoes';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function Home() {
  return (
    <Container>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' />
        <title>TRAMA</title>
      </Head>
      <Navbar />
      <Main />
      <UniversityLogos />
      <Sobre />
      <Pesquisadores />
      <Publicacoes />
      <Contato />
      <Footer />
    </Container>
  );
}

const Container = styled('div', {});
