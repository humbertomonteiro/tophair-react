import styles from "../products.module.css";

import fita from "../../assets/imgs/acessoriosMegaHair/fita_adesiva_lace_front_azul_36_mts_1_unidade.webp";

import BtnWhatsapp from "../../components/BtnWhatsapp";

import Boxes from "../../components/Boxes";

export default function MH6() {
  return (
    <section className={styles.containerProduct}>
      <a href="../pages/megaHair.html" class="backPage">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      <div className={styles.descriptionProduct}>
        <h2>FITA ADESIVA LACE FRONT AZUL 36 MTS 1 UNIDADE</h2>
        <div className={styles.imgProduct}>
          <img loading="lazy" src={fita} alt="fita" />
        </div>
        <div className={styles.description}>
          <h3>TOP HAIR SSA</h3>
          <h3>ESCOVA DESEMBARAÇANTE MEGA HAIR</h3>
          <p>A escova desembaraçante é própria para mega hair.</p>
          <p>
            Como não possui aquelas bolinhas nas pontas das cerdas, ela não
            engata na base da fita, queratina, microlink ou tela.
          </p>
          <p>
            Em formado arredondado e anatômico, é perfeita pois você não precisa
            ter medo de escovar o couro cabeludo sem arrebentar seu próprio
            cabelo, onde está fixada a mecha de mega hair.
          </p>
          <p>Você não pode deixar de ter uma escova dessas!</p>
          <BtnWhatsapp />
          <Boxes />
        </div>
      </div>
    </section>
  );
}
