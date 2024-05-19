import styles from "./titleBack.module.css";

import { IoIosArrowBack } from "react-icons/io";

import { useNavigate, useParams } from "react-router-dom";

export default function ButtonBack() {
  const navigate = useNavigate();
  const { product } = useParams();

  const backPageProducts = () => {
    navigate(`/products/${product}`);
  };

  return (
    <div className={styles.title} onClick={backPageProducts}>
      <IoIosArrowBack />
    </div>
  );
}
