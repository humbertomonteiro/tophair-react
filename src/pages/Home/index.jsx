import { useEffect } from "react";

import styles from "./home.module.css";

import Slider from "../../components/Slider";
import MainTopcs from "../../components/MainTopcs";
import Categories from "../Categories";
import Wholesale from "../../components/Wholesale";
import Location from "../../components/Location";
import SlidesDepoiments from "../../components/SlidesDepoiments";
import Boxes from "../../components/Boxes";

import "aos/dist/aos.css";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <Slider />
      <MainTopcs />
      <Categories />
      <Wholesale />
      <Boxes />
      <Location />
      <SlidesDepoiments />
    </div>
  );
}
