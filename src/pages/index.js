import Head from "next/head";
import Header from "@/Components/Header";
import Capa from "@/Components/Conteudo/Capa";
import Produtos from "@/Components/Conteudo/Produtos";
import Sobre from "@/Components/Conteudo/Sobre";
import Contato from "@/Components/Conteudo/Contato/Contato";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="A melhor ótica do Rio de Janeiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Capa />
      <Produtos />
      <Sobre />
      <Contato />
      <Footer />
    </>
  );
}
