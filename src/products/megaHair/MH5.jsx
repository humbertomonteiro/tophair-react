import styles from "../products.module.css";

import gel from "../../assets/imgs/acessoriosMegaHair/gel_cola_para_fabricacao_nanopele_50grs.webp";

import BtnWhatsapp from "../../components/BtnWhatsapp";

import Boxes from "../../components/Boxes";

export default function MH5() {
  return (
    <section className={styles.containerProduct}>
      <a href="../pages/megaHair.html" class="backPage">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      <div className={styles.descriptionProduct}>
        <h2>GEL COLA PARA FABRICAÇÃO NANOPELE 50GRS</h2>
        <div className={styles.imgProduct}>
          <img loading="lazy" src={gel} alt="gel" />
        </div>
        <div className={styles.description}>
          <h3>TOP HAIR SSA</h3>
          <p>Marca: TOP HAIR</p>
          <p>Conteúdo: 50GRS</p>
          <p>Quantidade: 1 unidade.</p>
          <p>
            Caracteristicas: O gel serve para fabricação da nanopele, metódo
            adesivado.
          </p>

          <BtnWhatsapp />
          <Boxes />
        </div>
      </div>
    </section>
  );
}
