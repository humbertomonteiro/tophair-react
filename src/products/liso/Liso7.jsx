import styles from "../products.module.css";

import liso7 from "../../assets/imgs/cabelosLisos/cabelo_liso_peruano_60cm_100grs.webp";

import BtnWhatsapp from "../../components/BtnWhatsapp";

import Boxes from "../../components/Boxes";

export default function Liso7() {
  return (
    <section className={styles.containerProduct}>
      <a href="../pages/liso.html" class="backPage">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      <div className={styles.descriptionProduct}>
        <h2>CABELO LISO PERUANO 60CM 100GRS</h2>
        <div className={styles.imgProduct}>
          <img
            loading="lazy"
            src={liso7}
            alt="CABELO LISO PERUANO 60CM 100GRS"
          />
        </div>
        <div className={styles.description}>
          <h3>TOP HAIR SSA</h3>
          <p>Origem: Peruano</p>
          <p>Cabelo liso castanho natural.</p>

          <p>Tamanho: 50CM</p>
          <p>Características: Fio médio, cabelo selecionado, pontas cheias.</p>
          <p>Foto 100% real.</p>
          <p>
            Tratamento: O Cabelo é higienizado, lavado, hidratado e
            esterilizado. Poderá utlizar chapinha ou baby-liss para o penteado.
          </p>
          <p>Peso: 100grs</p>
          <p>
            Conteúdo do Produto: Conforme escolhido nas opções. (Quantidade 50
            ou 100grs).
          </p>
          <p>
            Quantidade Média Utilizada para uma Cabeça: 50 a 300grs dependendo
            do seu volume, ou de acordo com a indicação do seu profissional.
          </p>
          <p>
            A TOP HAIR SSA, não se responsabiliza por serviços de terceiros
            realizados nos cabelos
          </p>
          <p>
            Os produtos devolvidos serão submetidos à análise por técnicos
            especializados.
          </p>

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

          <Boxes />

          <BtnWhatsapp />

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
          <p>Qualquer dúvida consulte-nos antes de finalizar a compra!</p>
        </div>
      </div>
    </section>
  );
}
