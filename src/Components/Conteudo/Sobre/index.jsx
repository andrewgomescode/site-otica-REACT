import Image from 'next/image';
import style from './Sobre.module.css';
import global_style from '@/styles/format_conteudo.module.css';
import Loja from '/public/loja.png';
import Atendimento from '/public/atendimento.png';

export default function Sobre() {
  return (
    <section id="sobre" className={style.sobre}>
      <div className={`${global_style.limitar_secao} ${style.container_sobre}`}>
        <h3>QUEM SOMOS NÓS?</h3>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
        <div className={style.box_card}>
          <Image src={Loja} alt='Imagem da Loja' />
          <div className={style.card}>
            <h4>Nossas Filiais</h4>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>

          <div className={style.card}>
            <h4>Nossas Filiais</h4>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>

          <Image src={Atendimento} alt="Imagem atendimento" />
        </div>
      </div>
    </section>
  )
}