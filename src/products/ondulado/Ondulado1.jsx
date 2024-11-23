import styles from "../products.module.css";

import ondulado1 from "../../assets/imgs/cabelosOndulados/cabelo_liso_e_ondulado_55cm_castanho_natural.webp";

import BtnWhatsapp from "../../components/BtnWhatsapp";

import Boxes from "../../components/Boxes";

export default function Ondulado1() {
  return (
    <section className={styles.containerProduct}>
      <div className={styles.descriptionProduct}>
        <h2>CABELO LISO ONDULADO 55CM CASTANHO NATURAL</h2>
        <div className={styles.imgProduct}>
          <img
            loading="lazy"
            src={ondulado1}
            alt="CABELO LISO ONDULADO 55CM CASTANHO NATURAL"
          />
        </div>
        <div className={styles.description}>
          <h3>TOP HAIR SSA</h3>
          <p>Cabelo 100% Humano natural liso com leves ondulações</p>
          <p>Origem: Indiano</p>
          <p>Lavado e Hidratado</p>
          <p>Cor: Preto tom aproximado 2</p>
          <p>Pode tingir, descolorir, matizar, alisar e fazer permanente</p>
          <h3>LEIA TODO O ANÚNCIO ANTES DE COMPRAR</h3>
          <p>
            Cabelos naturais, totalmente humano, levemente ondulado, semi limpo,
            hidratado e higienizados. De excelente qualidade, macios e sedosos,
            estes cabelos podem ser utilizados em diversos tipos de alogamentos
            apliques e podem ser tingidos, descoloridos, alisados.
          </p>

          {/* <div class="description-img">
        <img loading='lazy' src="../imgs/logos/tamanhso.webp" alt="" />
      </div> */}

          <h3>PERGUNTAS FREQUENTES:</h3>
          <p>É CABELO HUMANO MESMO?</p>
          <p>
            Sim, é cabelo totalmente humano, não trabalhamos com cabelos
            misturados.
          </p>

          <p>QUE GARANTIA TENHO?</p>
          <p>
            Compra segura, garantimos a entrega e a qualidade, caso o cliente
            não goste, pode fazer a devolução, desde que não haja manipulação no
            mesmo e dentro de um prazo de até 7 (sete) dias.
          </p>

          <p>POSSO DESCOLORIR?</p>
          <p>
            Pode sim, cabelo virgem, porém não damos garantia em serviço
            realizado por terceiros.
          </p>

          <p>O CABELO É LIMPO OU SEMI LIMPO?</p>
          <p>Esse cabelo é semi limpo.</p>

          <BtnWhatsapp />
          <Boxes />

          <h3>ATENÇÃO!!!!</h3>
          <p>
            O comprimento dos fios segue o padrão de comercialização instituído
            no mercado nacional, sendo que o cabelo possui de 10 a 20% de fios
            menores. O elástico que amarra o produto conta na composição do peso
            do produto.
          </p>
          <p>
            Pode haver diferenças entre os tons reais dos produtos e suas
            reproduções digitais do site, apesar das fotos serem dos produtos
            comercializados. Portanto sugerimos que elas sejam utilizadas apenas
            como referência.
          </p>
          <p>
            A cada 100grs, 10g são da cordinha utilizada para prender o cabelo.
          </p>
          <p>Qualquer dúvida consulte-nos antes de finalizar a compra!</p>

          <BtnWhatsapp />
        </div>
      </div>
    </section>
  );
}
