import Image from "next/image";
import style from "./Contato.module.css";
import global_style from "@/styles/format_conteudo.module.css";
import Local from "/public/local.png";
import Telefone from "/public/telefone.png";
import Email from "/public/email.png";
import Facebook from "/public/fb.png";
import Instagram from "/public/ig.png";
import Twitter from "/public/tt.png";

export default function Contato() {
  return (
    <section id="contato" className={style.contato}>
      <div className={global_style.limitar_secao}>
        <h3>Fale conosco</h3>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

        <div className={style.container}>
          <div className={style.conteudo}>
            <h4>Contato</h4>
            <div>
              <Image src={Local} title="Ícone local" alt="Pino de localização" />
              <span>Nova Iguaçu, RJ</span>
            </div>
            <div>
              <Image src={Telefone} title="Ícone telefone" alt="Ícone de um telefone" />
              <span>(21) 9999-9999</span>
            </div>
            <div>
              <Image src={Email} title="Ícone email" alt="Ícone de uma carta" />
              <span>contato@oticavida.com</span>
            </div>
          </div>

          <div className={style.conteudo}>
            <h4>Nossas Redes Sociais</h4>
            <div>
              <Image src={Facebook} title="Ícone Facebook" alt="Ícone do Facebook" />
              <span>/OticaVida</span>
            </div>
            <div>
              <Image src={Instagram} title="Ícone Instagram" alt="Ícone do Instagram" />
              <span>@oticavidarj</span>
            </div>
            <div>
              <Image src={Twitter} title="Ícone Twitter" alt="Ícone do Twitter" />
              <span>@oticavidarj</span>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}