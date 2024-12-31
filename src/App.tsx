import { useReducer } from "react";
import Header from "./components/Header/Header";
import TopPage from "./components/TopPage/TopPage";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer/Footer";
import { ThemeType } from "./types";
import styles from "./App.module.scss";

export default function App() {
  const [themeType, switchThemes] = useReducer(
    (theme: ThemeType) => {
      const nextTheme =
        theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;
      localStorage.setItem("theme", nextTheme);
      const root = document.querySelector("html");
      root?.classList.remove(theme);
      root?.classList.add(nextTheme);
      return nextTheme;
    },
    (localStorage.getItem("theme") as ThemeType) || ThemeType.LIGHT,
    (theme) => {
      document.querySelector("html")?.classList.add(theme);
      return theme;
    }
  );

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <TopPage />
        <MainPage />
      </main>
      <Footer themeType={themeType} switchThemes={switchThemes} />
    </div>
  );
}
