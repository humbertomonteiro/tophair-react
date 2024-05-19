import styles from "../pagesFooter.module.css";

export default function Security() {
  return (
    <section className={styles.container}>
      <div>
        <h2>Segurança</h2>
        <p>
          Com relação aos seus dados pessoais de endereçamento, pagamento e
          conteúdo do pedido, você pode estar certo de que não serão utilizados
          para outros fins que não o de processamento dos pedidos realizados,
          não sendo portanto divulgados em hipótese alguma.
        </p>
        <p>
          Com relação à segurança no tráfego de dados, toda transação que
          envolver pagamento, seja por cartão de crédito ou não, estará
          encriptada com a tecnologia SSL (Secure Socket Layer). Isso significa
          que só nossa empresa terá acesso a estes dados
        </p>
      </div>
    </section>
  );
}
