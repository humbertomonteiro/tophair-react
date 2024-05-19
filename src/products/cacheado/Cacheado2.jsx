import styles from "../products.module.css";

import cacheado2 from "../../assets/imgs/cabelosCacheados/cabelo_cacheado_permanente_caipira_50_a_55_cm_castanho_natural.webp";

import BtnWhatsapp from "../../components/BtnWhatsapp";

import Boxes from "../../components/Boxes";

export default function Cacheado2() {
  return (
    <section className={styles.containerProduct}>
      <a href="../pages/cacheado.html" class="backPage">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      <div className={styles.descriptionProduct}>
        <h2>CABELO CACHEADO PERMANENTE CAIPIRA 50 A 55 CM CASTANHO NATURAL</h2>
        <div className={styles.imgProduct}>
          <img
            src={cacheado2}
            alt="CABELO CACHEADO PERMANENTE CAIPIRA 50 A 55 CM CASTANHO NATURAL"
          />
        </div>
        <div className={styles.description}>
          <h3>TOP HAIR SSA</h3>
          <p>Origem: Humano.</p>
          <p>Ondulação: Cacho caipira com permanente.</p>
          <p>Características: Cabelos em gramas amarrados em elástico.</p>
          <p>
            Tratamento: O Cabelo é higienizado, lavado, hidratado e
            esterilizado.
          </p>
          <p>Foto 100% real</p>

          <p>
            Conteúdo do Produto: Conforme escolhido nas opções. (Quantidade com
            100grs)
          </p>
          <p>
            Quantidade Média Utilizada para uma Cabeça: 50 a 300grs dependendo
            do seu volume, ou de acordo com a indicação do seu profissional.
          </p>

          {/* <div class="description-img">
                <img src="../imgs/logos/tamanhso.webp" alt="">
            </div> */}

          <BtnWhatsapp />
          <Boxes />

          <div class="video"></div>

          <p>Lave corretamente:</p>
          <p>
            Por mais tranquilo, mais relaxante que possa parecer, não use água
            muito quente para lavar os cabelos todos os dias. A água fria irá
            ajudar a fechar as cutículas e a evitar aquele aspecto de cabelo
            descamado e arrepiado. Também não dormir com cabelo úmido, pois não
            faz bem para a saúde do seu cabelo!
          </p>
          <p>
            Quando os fios estão úmidos eles ficam mais sensíveis e, por isso,
            quebram com facilidade.
          </p>
          <p>Portanto nunca (nunquinha mesmo) durma com os cabelos molhados!</p>
          <p>
            Evite prender o cabelo ainda úmido, e nem pensar em prender molhado.
          </p>
          <p>
            O melhor é deixar o cabelo respirar e lavar sempre nas primeiras
            horas do dia com água fria, seu cabelo agradece!
          </p>
          <h3>IMPORTANTE:</h3>
          <p>
            <ul>
              <li>
                <p>
                  A TOP HAIR SSA, não se responsabiliza por serviços de
                  terceiros realizados nos cabelos
                </p>
              </li>
              <li>
                <p>
                  Os produtos devolvidos serão submetidos à analise por técnicos
                  especializados.
                </p>
              </li>
              <li>
                <p>
                  O produto adquirido será enviado a partir de fios de maior
                  proximidade em cor e comprimento
                </p>
              </li>
            </ul>
          </p>
          <BtnWhatsapp />
        </div>
      </div>
    </section>
  );
}
