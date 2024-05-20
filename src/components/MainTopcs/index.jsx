import styles from "./mainTopcs.module.css";

import { Link } from "react-router-dom";

import { MdOutlineDateRange } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function MainTopcs() {
  return (
    <div className={styles.mainTopcs} data-aos="fade-up" data-aos-delay="600">
      <a
        href="http://api.whatsapp.com/send?phone=5541991899501"
        target="_blank"
        className={styles.miniBox}
      >
        <MdOutlineDateRange />
        <span>Agendar Horário</span>
      </a>
      <div className={styles.topcs}>
        <a href="" className={styles.topc}>
          <Link>
            <FaTruck /> Frete Grátis
          </Link>
          <span>Em compras acima de R$195,00</span>
        </a>

        <div className={styles.border}></div>

        <div
          href="http://api.whatsapp.com/send?phone=5541991899501"
          target="_blank"
          className={styles.topc}
        >
          <a
            href="http://api.whatsapp.com/send?phone=5541991899501"
            target="_blank"
          >
            <FaWhatsapp /> Whatsapp
          </a>
        </div>

        <div className={styles.border}></div>

        <div className={styles.topc}>
          <a href="#depoiments">
            <FaRegCommentDots /> Depoimentos
          </a>
        </div>
      </div>
      <a
        href="https://www.instagram.com/tophaircwb/"
        target="_blank"
        className={styles.miniBox}
      >
        <FaInstagram />
        <span>Instagram</span>
      </a>
    </div>
  );
}
