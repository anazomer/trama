import Image from "next/image";
import { Navbar } from "../components/Navbar1";
import Link from "next/link";
import { Layout, LayoutH1, LayoutP } from "@/styles/Layout.module";



export default function Congressos (){
    return(
        <>
             <Navbar />
            <Layout>
                <LayoutH1>Congressos EITAM </LayoutH1>
                <br></br>
                <LayoutP>Desde a sua criação em 2009, o principal objetivo dos Encontros Internacionais de Teoria e Análise Musical tem sido fortalecer as pesquisas nas áreas de Teoria e Análise Musical no cenário acadêmico.</LayoutP>
                <br></br>
                <LayoutP>As edições do EITAM são, em seu conjunto, uma realização de cooperação entre três Programas de Pós-Graduação em Música (PPGMUS) sediados em universidades públicas do Estado de São Paulo: USP, UNICAMP e UNESP. Ao longo de seu percurso tem estabelecido parcerias com programas de música de universidades de outros estados brasileiros, como UNIRIO e UFMG.</LayoutP>
                <br></br>
                <LayoutP>A Profa. Dra. Adriana Lopes Moreira tem participado de todas as edições do EITAM, como coordenadora da edição digital dos anais (2009, 2013, 2017), membro do comitê organizador (2011), Coordenadora científica (2019), e Presidente do comitê organizador e coordenadora geral do congresso (2013, 2017).</LayoutP>
                <br></br>
                <h2>EITAM: Encontros Internacionais de Pesquisa e Análise Musical</h2>
                <br></br>
                <LayoutP><Link href="https://www2.eca.usp.br/etam/iencontro/"><b>EITAM 1</b></Link></LayoutP>
                <LayoutP><Link href="https://www.eca.usp.br/sites/default/files/2022-08/Anais%20EITAM2.pdf"><b>EITAM 2</b></Link></LayoutP>
                <LayoutP><Link href="https://etam.eca.usp.br/iiiencontro/apresentacao.html"><b>EITAM 3</b></Link></LayoutP>
                <LayoutP><Link href="https://etam.eca.usp.br/ivencontro/"><b>EITAM 4</b></Link></LayoutP>
                <LayoutP><Link href="https://eitam5.nics.unicamp.br/"><b>EITAM 5</b></Link></LayoutP>
           </Layout>
            </>
    )
}