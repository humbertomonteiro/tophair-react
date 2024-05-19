import styles from "./product.module.css";
import { useParams } from "react-router-dom";
import { categories } from "../../arrayCategories";

import ButtonBack from "../../components/ButtonBack";

export default function Product() {
  const { id, product } = useParams();

  const currentCategory = categories
    .filter((category) => category.id === product)
    .map((prod) => prod.pages.filter((e) => e.id === Number(id)))
    .map((p) => p.map((e) => e.component));

  return (
    <div className={styles.container}>
      <ButtonBack />
      {currentCategory}
    </div>
  );
}
