import styles from "../products.module.css";

import queratinaMarrom from "../../assets/imgs/acessoriosMegaHair/queratina_k_em_fita_marrom.webp";

import BtnWhatsapp from "../../components/BtnWhatsapp";

import Boxes from "../../components/Boxes";

export default function MH4() {
  return (
    <section className={styles.containerProduct}>
      <a href="../pages/megaHair.html" class="backPage">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      <div className={styles.descriptionProduct}>
        <h2>QUERATINA K EM FITA MARROM</h2>
        <div className={styles.imgProduct}>
          <img loading="lazy" src={queratinaMarrom} alt="Queratina" />
        </div>
        <div className={styles.description}>
          <h3>TOP HAIR SSA</h3>
          <h3>Origem: Itália.</h3>
          <h3>Marca: K.</h3>
          <p>
            Características: Queratina da marca "K" foi desenvolvida para
            fixação dos cabelo em mechas de queratina.
          </p>
          <p>
            Conteúdo: 1 Rolo de queratina com 2 a 3 metros equivalente a 1
            bastão de queratina.
          </p>
          <BtnWhatsapp />
          <Boxes />
        </div>
      </div>
    </section>
  );
}
