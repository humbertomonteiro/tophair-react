import styles from "./location.module.css";
import { Link } from "react-router-dom";

export default function Location() {
  return (
    <section className={styles.container} data-aos="zoom-in">
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1802.005132332123!2d-49.257879!3d-25.404467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce69dcce0d333%3A0x88c5c3fc507ac36e!2sAv.%20Anita%20Garibaldi%2C%20825%20-%20Cabral%2C%20Curitiba%20-%20PR%2C%2080540-110!5e0!3m2!1spt-BR!2sbr!4v1715631217082!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.locationContent}>
        <h2>Venha nos visitar!</h2>
        <p>
          Visite-nos e transforme sua aparência com confiança e beleza. Estamos
          ansiosos para recebê-lo em nossa loja, onde a excelência em megahair
          encontra a sua beleza única! 💖✨
        </p>
        <p>Av. Anita Garibaldi, 850, Curitiba, PR - Sala 501</p>
        <Link>VER NO MAPA</Link>
      </div>
    </section>
  );
}
