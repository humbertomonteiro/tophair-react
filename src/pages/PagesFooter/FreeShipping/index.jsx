import styles from "../pagesFooter.module.css";
import Boxes from "../../../components/Boxes";
import BtnWhatsapp from "../../../components/BtnWhatsapp";

const FreeShipping = () => {
  return (
    <section className={styles.container}>
      <div>
        <h2>Políticas de envio</h2>
        <h3>Envio nacional</h3>
        <p>Enviamos para todo Brasil com segurança e qualidade no envio!</p>
        <h3>Envio internacional</h3>
        <p>
          Além de enviarmos para todo Brasil, também enviamos para mais de 190
          países através da DHL.
        </p>
        <h3>Qual o tempo limite para devolução?</h3>
        <p>
          Troca ou devoluções podem ser realizadas até 7 dias após a compra em
          caso de desistência.
        </p>
        <ul>
          <li>
            ltens com desconto são de venda final e não são passíveis de trocas
            ou devoluções;
          </li>
          <li>
            ltens devolvidos devem estar da mesma maneira que entregamos (sem
            química, carte,faltando gramas e em métodos);
          </li>
          <li>
            Tempo para troca ou devolução: O produtos chegando na loja já
            efetuamos a troca ou a evolução;
          </li>
          <li>
            Pagamentos feitos com link através de cartão de crédito, tem juros!
            E esses juros não são reembolsados.
          </li>
        </ul>
        {/* <Boxes />
        <BtnWhatsapp /> */}
      </div>
    </section>
  );
};

export default FreeShipping;
