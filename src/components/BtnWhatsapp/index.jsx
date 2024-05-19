import styles from "./btnWhatsapp.module.css";

import whatsappImg from "../../assets/imgs/logos/logowhatsapppng.png";

export default function BtnWhatsapp() {
  return (
    <div className={styles.whatsapp}>
      <a
        href="http://api.whatsapp.com/send?phone=5541991899501"
        target="_blank"
        whatsapp
      >
        <img src={whatsappImg} alt="logo whatsapp" />
        <h4>Compre pelo Whatsapp</h4>
      </a>
    </div>
  );
}
