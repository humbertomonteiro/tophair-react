import styles from "./products.module.css";

import { useParams, Link } from "react-router-dom";

import { categories } from "../../arrayCategories";

import TitleChange from "../../components/TitleChange";

const topPage = () => {
  window.scroll(0, 0);
};

export default function Products() {
  const { id } = useParams();

  const currentCategory = categories.filter((category) => id === category.id);

  return (
    <div className={styles.container}>
      <TitleChange
        title={currentCategory.map((products) => products.name)}
        category={currentCategory.map((products) => products.idCategory)}
      />
      <div className={styles.products}>
        {currentCategory.map((products) =>
          products.pages.map((product) => (
            <div key={product.id} className={styles.product}>
              <h3>{product.name}</h3>
              <div className={styles.productImg}>
                <img src={product.img} alt={product.name} />
              </div>
              <Link onClick={topPage} to={`/products/${id}/${product.id}`}>
                SABER MAIS
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
