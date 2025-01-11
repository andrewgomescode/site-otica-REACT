import global_style from '@/styles/format_conteudo.module.css';
import style from './Produtos.module.css';
import Image from 'next/image';
import Produto01 from '/public/oculos01.png';
import Produto02 from '/public/oculos02.png';
import Produto03 from '/public/oculos03.png';
import Produto04 from '/public/oculos04.png';

export default function Produtos() {
  return (
    <section id="produtos" className={style.produtos}>
      <div className={global_style.limitar_secao}>
        <h3>Nossos Produtos</h3>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        <div className={style.container_produtos}>
          <div className={style.box_produtos}>
            <h4>Óculos de grau</h4>
            <Image src={Produto01} alt="Primeiro Produto" />
            <p>R$ 500,00</p>
          </div>
          <div className={style.box_produtos}>
            <h4>Óculos transition</h4>
            <Image src={Produto02} alt="Segundo Produto" />
            <p>R$ 750,00</p>
          </div>
          <div className={style.box_produtos}>
            <h4>Óculos de sol</h4>
            <Image src={Produto03} alt="Terceiro Produto" />
            <p>R$ 700,00</p>
          </div>
          <div className={style.box_produtos}>
            <h4>Óculos infantil</h4>
            <Image src={Produto04} alt="Quarto Produto" />
            <p>R$ 500,00</p>
          </div>
        </div>

        <p>Todos os nossos produtos incluem:</p>

        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  )
}