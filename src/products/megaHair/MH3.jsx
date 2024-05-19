import styles from "../products.module.css";

import queratina from "../../assets/imgs/acessoriosMegaHair/queratina_k_em_fita_transparente.webp";

import BtnWhatsapp from "../../components/BtnWhatsapp";

import Boxes from "../../components/Boxes";

export default function MH3() {
  return (
    <section className={styles.containerProduct}>
      <a href="../pages/megaHair.html" class="backPage">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      <div className={styles.descriptionProduct}>
        <h2>QUERATINA K EM FITA TRANSPARENTE</h2>
        <div className={styles.imgProduct}>
          <img src={queratina} alt="escova desembaraçadora" />
        </div>
        <div class="description-content">
          <BtnWhatsapp />
          <Boxes />
        </div>
      </div>
    </section>
  );
}
