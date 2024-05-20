import styles from "./footer.module.css";
import logo from "../../assets/imgs/logos/logo-tophair-rosa.webp";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";

import { GiSmartphone } from "react-icons/gi";

import { MdOutlineEmail } from "react-icons/md";

const topPage = () => {
  window.scroll(0, 0);
};

export default function Footer() {
  return (
    <footer className={styles.container} data-aos="fade-up">
      <div className={styles.footerTop}>
        <div className={styles.logoSocial}>
          <Link onClick={topPage} className={styles.logo} to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className={styles.social}>
            <a href="https://www.facebook.com/tophairssa/" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/tophaircwb/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/google" target="_blank">
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/UC60OzoY54tre-3II169YnQQ"
              target="_blank"
            >
              <FaYoutube />
            </a>
            <a href="https://pin.it/60uWeK4" target="_blank">
              <FaPinterest />
            </a>
            <a href="https://br.linkedin.com/company/google" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className={styles.institute}>
          <h2>Institucional</h2>
          <Link onClick={topPage} to="/about">
            Sobre nós
          </Link>
          <Link onClick={topPage} to="/security">
            Segurança
          </Link>
          <Link onClick={topPage} to="/send">
            Envio
          </Link>
          <Link onClick={topPage} to="/payment">
            Pagamento
          </Link>
          <Link onClick={topPage} to="/guarantee">
            Tempo de Garantia
          </Link>
          <a
            href="http://api.whatsapp.com/send?phone=5541991899501"
            target="_blank"
          >
            Fale Conosco
          </a>
        </div>

        <div className={styles.attendance}>
          <h2>Atendimento</h2>
          <div className={styles.item}>
            <GiSmartphone />
            <span>(41) 99189-9501</span>
          </div>
          <div className={styles.item}>
            <MdOutlineEmail />
            <span>tophairbrasil@hotmail.com</span>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div>
          <p>&#174;Top Hair - Todos os direitos reservados</p>
        </div>
        <div>
          <p>
            Criado por:
            <a
              href="https://stately-caramel-2daa67.netlify.app/"
              target="_blank"
            >
              Humberto Monteiro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
