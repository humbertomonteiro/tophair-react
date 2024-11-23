import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
        <img loading="lazy" src={logo} alt="logo" />
      </Link>
      <nav className={stateNav ? styles.nav : styles.navMobile}>
        <NavLink
          onClick={topPage}
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/products/megaHair"
        >
          Acessórios Mega Hair
        </NavLink>
        <NavLink
          onClick={topPage}
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/products/brasileiro"
        >
          Cabelo Brasileiro
        </NavLink>
        <NavLink
          onClick={topPage}
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/products/brasileiroRegi"
        >
          Brasileiro Regional
        </NavLink>
        <NavLink
          onClick={topPage}
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/products/liso"
        >
          Cabelo Liso
        </NavLink>
        <NavLink
          onClick={topPage}
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/products/cacheado"
        >
          Cabelo Cacheado
        </NavLink>
        {/* <NavLink
          onClick={topPage}
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/products/ondulado"
        >
          Cabelo Ondulado
        </NavLink> */}
        <NavLink
          onClick={topPage}
          className={({ isActive }) => (isActive ? styles.active : "")}
          to="/wholesale"
        >
          Cabelo em Atacado
        </NavLink>
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
