import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { HiBars3BottomRight } from "react-icons/hi2";

import logo from "../../assets/imgs/logos/logo-tophair-rosa.webp";

export const topPage = () => {
  window.scroll(0, 0);
};

export default function Header({ setLink }) {
  const [iconBars, setIconBars] = useState(false);
  const [stateNav, setStateNav] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 750) {
        setIconBars(true);
        setStateNav(true);
      } else {
        setIconBars(false);
      }
    });
  }, []);

  const navBar = () => {
    setStateNav(!stateNav);
  };

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className={stateNav ? styles.nav : styles.navMobile}>
        <Link onClick={topPage} to="/products/megaHair">
          Acessórios Mega Hair
        </Link>
        <Link onClick={topPage} to="/products/brasileiro">
          Cabelo Brasileiro
        </Link>
        <Link onClick={topPage} to="/products/brasileiroRegi">
          Brasileiro Regional
        </Link>
        <Link onClick={topPage} to="/products/liso">
          Cabelo Liso
        </Link>
        <Link onClick={topPage} to="/products/cacheado">
          Cabelo Cacheado
        </Link>
        <Link onClick={topPage} to="/products/ondulado">
          Cabelo Ondulado
        </Link>
        <Link onClick={topPage} to="/products/atacado">
          Cabelo em Atacado
        </Link>
      </nav>
      <button
        onClick={navBar}
        className={iconBars ? styles.bars : styles.noBars}
      >
        <HiBars3BottomRight />
      </button>
    </header>
  );
}
