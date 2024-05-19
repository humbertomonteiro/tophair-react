import styles from "./home.module.css";

import Slider from "../../components/Slider";
import MainTopcs from "../../components/MainTopcs";
import Categories from "../Categories";
import Wholesale from "../../components/Wholesale";
import Location from "../../components/Location";
import SlidesDepoiments from "../../components/SlidesDepoiments";
import Boxes from "../../components/Boxes";

export default function Home() {
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
