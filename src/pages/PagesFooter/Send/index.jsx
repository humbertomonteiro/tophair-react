import styles from "../pagesFooter.module.css";

export default function Send() {
  return (
    <section className={styles.container}>
      <div>
        <h2>Envio</h2>
        <p>
          Todos os produtos serão enviados de acordo com a forma escolhida pelo
          cliente, em até 2 dias úteis da confirmação do pagamento. O prazo para
          a entrega varia de acordo com a forma de envio escolhida e não é de
          nossa responsabilidade, ,já que a entrega fica a cargo dos Correios.
        </p>
        <p>
          Você será informado do código para rastrear sua encomenda através do
          site dos correios assim que ela for postada.
        </p>
      </div>
    </section>
  );
}
