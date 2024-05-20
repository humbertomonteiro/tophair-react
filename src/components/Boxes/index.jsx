import styles from "./boxes.module.css";

import { FaCheckSquare, FaLock } from "react-icons/fa";
import { FaTruckFast, FaCreditCard } from "react-icons/fa6";

export default function Boxes() {
  return (
    <article className={styles.boxes} data-aos="fade-up">
      <div className={styles.box}>
        <FaCheckSquare />
        <h4>Qualidade</h4>
        <p>Garantimos qualidade em nossos produtos</p>
      </div>

      <div className={styles.box}>
        <FaTruckFast />
        <h4>Receba em casa</h4>
        <p>Entregamos para todo Brasil</p>
      </div>

      <div className={styles.box}>
        <FaCreditCard />
        <h4>Parcele em até</h4>
        <p>12X Com cartões de crédito</p>
      </div>

      <div className={styles.box}>
        <FaLock />
        <h4>100% seguro</h4>
        <p>Seus dados estão protegidos</p>
      </div>
    </article>
  );
}
