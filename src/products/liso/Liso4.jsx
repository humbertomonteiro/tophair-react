import styles from "../products.module.css";

import liso4 from "../../assets/imgs/cabelosLisos/cabelo_liso_vietna_castanho_natural_70cm.webp";

import BtnWhatsapp from "../../components/BtnWhatsapp";

import Boxes from "../../components/Boxes";

export default function Liso4() {
  return (
    <section className={styles.containerProduct}>
      <a href="../pages/liso.html" class="backPage">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      <div className={styles.descriptionProduct}>
        <h2>CABELO LISO VIETNÃ CASTANHO NATURAL 70CM</h2>
        <div className={styles.imgProduct}>
          <img
            loading="lazy"
            src={liso4}
            alt="CABELO LISO VIETNÃ CASTANHO NATURAL"
          />
        </div>
        <div className={styles.description}>
          <h3>TOP HAIR SSA</h3>
          <p>Origem: humano</p>
          <p>Cabelo liso/ondulado, virgem, castanho natural.</p>
          <p>
            Cabelos do Vietnã, também conhecido como cabelos Asiáticos, são
            cabelos com fios mais grossos, pois possuem mais células nas
            cutículas de cada fio, sabe aquele cabelo mais pesado, mais armado é
            ele, o que normalmente não acontece nos outros tipos de cabelos.
          </p>
          <p>
            Para quem gosta de um cabelo Asiático com essas características essa
            é uma ótima escolha.
          </p>
          <p>
            Isso acaba tornando os fios mais selados, mais brilhante, pesado e
            liso. Geralmente eles são lisos, mas, tem ondulado também e sua cor
            é um castanho natural.
          </p>
          <p>Cabelos semi limpos com pontas cheias.</p>
          <p>
            Características: Cabelos em gramas amarrados em elástico, cabelos
            semilimpos, pontas cheias.
          </p>
          <p>
            Tratamento: O Cabelo é higienizado, lavado, hidratado e
            esterilizado. Poderá utlizar chapinha ou baby-liss para o penteado.
          </p>
          <p>Cor exata da foto</p>
          <p>Cabelo da foto/ Imagem real.</p>
          <p>
            Conteúdo do Produto: Conforme escolhido nas opções. (Quantidade 50
            ou 100grs).
          </p>
          <p>
            Quantidade Média Utilizada para uma Cabeça: 50 a 300grs dependendo
            do seu volume, ou de acordo com a indicação do seu profissional.
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
          <BtnWhatsapp />

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

          <BtnWhatsapp />
        </div>
      </div>
    </section>
  );
}
