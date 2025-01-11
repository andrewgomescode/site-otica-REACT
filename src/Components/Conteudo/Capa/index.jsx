import style from './Capa.module.css';
import global_style from '@/styles/format_conteudo.module.css';

export default function Capa() {
  return (
    <section className={style.capa}>
      <div className={global_style.limitar_secao}>
        <p>Preços baixos em</p>
        <h1>Óculos de grau e de sol</h1>
        <p>Você só encontra aqui</p>
      </div>
    </section>
  )
}