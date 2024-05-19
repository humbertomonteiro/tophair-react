import styles from "../pagesFooter.module.css";

export default function Payment() {
  return (
    <section className={styles.container}>
      <div>
        <h2>Pagamento</h2>
        <p>Trabalhamos com diversas formas de pagamento.</p>
        <p>
          Assim que finalizar sua compra, você poderá escolher qual a forma que
          mais lhe agrada. Demais instruções serão passadas após a escolha da
          forma de pagamento.
        </p>
      </div>
    </section>
  );
}
