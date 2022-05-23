import { FC } from "react";
import { Header } from "../Header";
import { FollowUs, AboutUs } from "../../components";
import styles from './styles.module.scss';

export const Layout:FC = () => {
  return (
    <div className={styles.main}>
      <Header />
      <AboutUs />
      <FollowUs />
    </div>
  );
};