import styles from "../products.module.css";

import brasilDoSulNat from "../../assets/imgs/cabelosBrasileiro/cabelo_brasileiro_loiro_natural_do_sul_fio_fino_100grs_loiro_virgem_50cm.webp";

import BtnWhatsapp from "../../components/BtnWhatsapp";

import Boxes from "../../components/Boxes";

export default function Brasileiro3() {
  return (
    <section className={styles.containerProduct}>
      <a href="../pages/brasileiros.html" class="backPage">
        <i class="fa-solid fa-angle-left"></i>
      </a>
      <div className={styles.descriptionProduct}>
        <h2>CABELO BRASILEIRO CASTANHO DO SUL FIO FINO 100GRS 50CM</h2>
        <div className={styles.imgProduct}>
          <img
            loading="lazy"
            src={brasilDoSulNat}
            alt="CABELO BRASILEIRO CASTANHO DO SUL FIO FINO"
          />
        </div>
        <div className={styles.description}>
          <h3>CABELO BRASILEIRO DO SUL</h3>
          <p>Tom: Loiro Natural</p>
          <p>Textura: Fio Fino</p>
          <p>Tamanho: 50CM</p>
          <p>Peso: 100GRS</p>
          <h3>CABELO BRASILEIRO</h3>
          <p>
            O cabelo do brasileiro do Sul está literalmente bombando! Ele é um
            cabelo de fio fino, cortado de uma única só cabeça de crianças e ou
            mulheres adultas. Os cabelos são 100% naturais. Ele é um cabelo leve
            e sedoso, e tem um brilho radiante. Não embaraça depois de aplicado
            na cabeça, independente da técnica que foi usada para colocação.
            Fios livres de produtos químicos, totalmente naturais.
          </p>

          {/* <div class="description-img">
                <img loading='lazy' src="../imgs/logos/tamanhso.webp" alt="">
            </div> */}

          <h3>POR QUE COMPRAR O CABELO BRASILEIRO?</h3>
          <p>
            Sabe aquelas artistas que você assiste filme ou novela, e você fica
            simplesmente apaixonada pelos cabelos? Normalmente elas estão usando
            um cabelo <strong>brasileiro do Sul</strong>, e fica tão natural e
            parecidos com os delas que você nem percebe que elas estão usando.
          </p>

          <BtnWhatsapp />

          <h3>QUALIDADE DO CABELO BRASILEIRO?</h3>
          <p>
            Confeccionamos no método tic tac, adesivado e ponto americano para
            melhor satisfação dos nossos clientes, (lembrando que esse serviço é
            um valor a parte, NÃO está incluso no valor do cabelo), caso a
            cliente tenha interesse em fazer os métodos acima citados conosco,
            devem chamar na nossa central de atendimento Whats 71 992430501.
          </p>

          <div class="video"></div>
          <h3>POR QUE VOCÊ PRECISA TER UM CABELO BRASILEIRO?</h3>
          <ul>
            <li>
              Quer ter um cabelo 100% natural, sedoso, saudável, com movimentos
              e brilhos?
            </li>
            <li>Cabelo liso que é somente lavar e já está maravilhoso?</li>
            <li>Sem precisar se preocupar com chapinha ou escova?</li>
            <li>
              Você vai encontrar tudo isso em nossa loja comprando os nossos
              <strong>cabelos brasileiros do Sul</strong> fio fino.
            </li>
          </ul>
          <h3>
            DICAS PARA VOCÊ FICAR AINDA MAIS LINDA COM O CABELO BRASILEIRO
          </h3>
          <h3>Hidrate seu cabelo</h3>
          <p>
            Hidratar o cabelo é importante para mantê-lo bonito e saudável, e
            nos casos dos cabelos compridos ela é indispensável.
          </p>
          <p>
            Escovar e desembaraçar os fios com calma e corretamente, sempre das
            pontas do cabelo até a raiz, na hora de pentear os cabelos não tenha
            pressa.
          </p>
          <p>
            Para que o cabelo não danifique, penteie com escovas de cerdas
            naturais, escova raquete e ou pentes de madeiras que são as melhores
            opções que tem no mercado.
          </p>
          <p>
            Desembaraçar os cabelos de qualquer jeito, sem delicadeza também
            provoca danos aos fios. A melhor hora para fazer isso é durante o
            banho, aplique um leave-in, para deixa-los mais hidratados.
          </p>

          <h3>Lave corretamente:</h3>
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
          <Boxes />
          <h3>IMPORTANTE:</h3>

          <ul>
            <li>
              A TOP HAIR SSA, não se responsabiliza por serviços de terceiros
              realizados nos cabelos
            </li>
            <li>
              Os produtos devolvidos serão submetidos à analise por técnicos
              especializados.
            </li>
            <li>
              O produto adquirido será enviado a partir de fios de maior
              proximidade em cor e comprimento
            </li>
          </ul>

          <BtnWhatsapp />
        </div>
      </div>
    </section>
  );
}
