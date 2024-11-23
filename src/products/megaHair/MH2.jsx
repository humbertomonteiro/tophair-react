import styles from "../products.module.css";

import removedor from "../../assets/imgs/acessoriosMegaHair/removedor_fita_adesiva_k_100ml.webp";

import BtnWhatsapp from "../../components/BtnWhatsapp";

import Boxes from "../../components/Boxes";

export default function MH2() {
  return (
    <section className={styles.containerProduct}>
      <a href="../pages/megaHair.html" class="backPage">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      <div className={styles.descriptionProduct}>
        <h2>REMOVEDOR FITA ADESIVA TOP HAIR 100ML</h2>

        <div className={styles.imgProduct}>
          <img loading="lazy" src={removedor} alt="escova desembaraçadora" />
        </div>
        <div className={styles.description}>
          <h3>TOP HAIR SSA</h3>
          <p>Origem: BR.</p>
          <p>Marca: TOP HAIR</p>
          <p>
            Características: O removedor exclusivo para remoção da fita adesiva
            a base de essências naturais.
          </p>
          <p>Conteúdo: 120ml.</p>

          <BtnWhatsapp />
          <Boxes />
        </div>
      </div>
    </section>
  );
}
