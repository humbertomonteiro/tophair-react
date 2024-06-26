import styles from "../pagesFooter.module.css";

export default function Payment() {
  return (
    <section className={styles.container}>
      <div>
        <h2>Tempo de Garantia</h2>
        <p>
          A troca deverá ser realizada em até 7 dias corridos a partir da data
          do recebimento, para dar entrada ao processo de devolução ou troca do
          produto entre em contato conosco.
        </p>
        <ul>
          <p>Condições:</p>
          <li>
            Não aceitaremos a devolução se o produto for enviado fora do prazo.
          </li>
          <li>
            Todos os itens como: touca, folder explicativo e brinde (caso
            receba) deverão ser devolvidos.
          </li>
          <li>
            O produto deverá estar intacto como recebido, inclusive com a
            etiqueta da marca.
          </li>
          <li>
            O cliente deverá enviar o comprovante de postagem da devolução com
            código de rastreio legível.
          </li>
          <li>
            Se o motivo da devolução for arrependimento da compra, os custos com
            o frete ficam sob responsabilidade do cliente
          </li>
          <li>
            O cliente receberá uma etiqueta de postagem caso receba o produto
            com algum tipo de defeito ou diferente do mostrado nas fotos.
            lembramos que todos os nosso produtos passam por uma cuidadosa
            análise antes do envio pra nos certificarmos de que o cliente
            receberá seu pedido em perfeitas condições.
          </li>
        </ul>
        <p>
          *Caso descumpra alguma condição relacionada à cima não aceitaremos a
          devolução ou troca da mercadoria
        </p>
      </div>
    </section>
  );
}
