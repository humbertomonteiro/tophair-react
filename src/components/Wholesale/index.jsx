import styles from "./wholesale.module.css";

import { Link } from "react-router-dom";

import imgWholesale from "../../assets/imgs/cabeloAtacado/cabelo_brasileiro_atacado.webp";
import goldhair from "../../assets/imgs/slides/goldHair.jpeg";
import logo from "../../assets/imgs/logos/logo-tophair-rosa.webp/";

export default function Wholesale() {
  return (
    <section className={styles.container} data-aos="fade-up">
      <div className={styles.containerWholesale}>
        <div className={styles.imgWholesale}>
          <img src={imgWholesale} alt="Cabelo em atacado" />
        </div>
        <div className={styles.contentWholesale}>
          <h2>Cabelo em Atacado</h2>
          <p>
            Descubra a verdadeira transformação com nossos megahairs de
            qualidade excepcional. Adquira agora em atacado e liberte sua beleza
            com fios deslumbrantes. Seja a inspiração que você sempre quis ser!
          </p>
          <Link>SABER MAIS</Link>
        </div>
      </div>
      <div className={styles.imgHair}>
        <img src={goldhair} alt="cabelo loiro" />
      </div>
      {/* <img className={styles.logo} src={logo} alt="Logo" /> */}
    </section>
  );
}
