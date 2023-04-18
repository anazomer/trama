import Image from "next/image";
import { Navbar } from "../components/Navbar1";
import Link from "next/link";
import { Layout, LayoutH1, LayoutP } from "@/styles/Layout.module";


export default function Laboratorio() {
    return (
        <>
            <Navbar />
            <Layout>
                <LayoutH1>Laboratório didático PAM </LayoutH1>
                <br></br>
                <LayoutP>Criado em 2008 pela Profa. dra. Adriana Lopes Moreira, o Laboratório de Percepção, História, Estética e Análise Musical da Universidade de São Paulo possui como função primeira agregar Atividades Laboratoriais Didáticas decorrentes de investigações realizadas junto a grupos de pesquisa, eventos acadêmicos e publicações de pesquisadores a ele vinculados. Reúne pesquisadores voltados a estudos em Musicologia e promove a difusão de sua produção junto à comunidade acadêmica. Conta com plantões de dúvidas semanais sobre estudos em Musicologia para apoio aos estudantes de Graduação do Departamento de Música da ECA-USP.</LayoutP>
                <br></br>
                <LayoutP>Ao longo de seu percurso, o Laboratório PAM veio ganhando adeptos e tendo sua capacidade de ação expandida. Hoje conta com o regente Roberto Rodrigues para a prática de Atividades Laboratoriais e com a coordenação colaborativa dos Profs. Drs. Adriana Lopes Moreira, Paulo de Tarso Salles, Mônica Lucas e Mário Videira.</LayoutP>
                <br></br>
                <LayoutP>Desde sua criação em 2015, o Grupo de Pesquisa TRAMA tem mantido uma correlação estreita com o Laboratório Didático PAM.</LayoutP>
                <br></br>
                <LayoutP><Link href="https://www.eca.usp.br/cmu/laboratorios-didaticos"><b>PAM na USP</b></Link></LayoutP>
           </Layout>
        </>
    )
}