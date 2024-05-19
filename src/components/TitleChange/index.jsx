import styles from "./TitleChangePage.module.css";

import { Link } from "react-router-dom";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { categories } from "../../arrayCategories";

export default function TitleChange({ title, category, nameCategory }) {
  const afterCategory = categories
    .filter((categoryArray) => {
      if (Number(category) === 1) {
        return Number(categoryArray.idCategory) === Number(categories.length);
      } else {
        return Number(categoryArray.idCategory) === Number(category) - 1;
      }
    })
    .map((idCategory) => idCategory.id);

  const nextCategory = categories
    .filter((categoryArray) => {
      if (Number(category) === Number(categories.length)) {
        return Number(categoryArray.idCategory) === 1;
      } else {
        return Number(categoryArray.idCategory) === Number(category) + 1;
      }
    })
    .map((idCategory) => idCategory.id);

  return (
    <div className={styles.title}>
      <>
        <Link to={`/products/${afterCategory}`}>
          <IoIosArrowBack />
        </Link>
        <h2>{title}</h2>
        <Link to={`/products/${nextCategory}`}>
          <IoIosArrowForward />
        </Link>
      </>
      {/* {nameCategory ? (
        <>
          <Link
            to={`/products/${nameCategory}/${
              Number(category) === 1
                ? Number(categories.length)
                : Number(category) - 1
            }`}
          >
            <IoIosArrowBack />
          </Link>
          <h2>{title}</h2>
          <Link
            to={`/products/${nameCategory}/${
              Number(category) === Number(categories.length)
                ? 1
                : Number(category) + 1
            }`}
          >
            <IoIosArrowForward />
          </Link>
        </>
      ) : (
        <>
          <Link to={`/products/${afterCategory}`}>
            <IoIosArrowBack />
          </Link>
          <h2>{title}</h2>
          <Link to={`/products/${nextCategory}`}>
            <IoIosArrowForward />
          </Link>
        </>
      )} */}
    </div>
  );
}
