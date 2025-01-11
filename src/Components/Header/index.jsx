import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";
import style from "./Header.module.css";

export default function Header() {
  return (
    <div className={style.header}>
      <div>
        <Image src={Logo} alt="Logo da Óticas Vida" />
        <nav>
          <Link href="#produtos">PRODUTOS</Link>
          <Link href="#sobre">SOBRE</Link>
          <Link href="#contato">CONTATO</Link>
        </nav>
      </div>
    </div>
  )
}