import styles from "./categories.module.css";

import { Link } from "react-router-dom";

import { categories } from "../../arrayCategories";

const topPage = () => {
  window.scroll(0, 0);
};

export default function Categories() {
  return (
    <div className={styles.container} data-aos="fade-down" data-aos-delay="700">
      <h2>NOSSOS PRODUTOS</h2>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div key={category.name} className={styles.category}>
            <h3>{category.name}</h3>
            <div className={styles.categoryImg}>
              <img
                src={`../../../src/assets/imgs/${category.pages
                  .filter((e) => e.id === 1)
                  .map((img) => img.img)}`}
                alt={category.name}
              />
            </div>
            <Link onClick={topPage} to={`/products/${category.id}`}>
              SABER MAIS
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
