import { Sun, Moon } from "@geist-ui/icons";
import { useTranslation } from "react-i18next";
import { ThemeType } from "../../types";
import styles from "./Footer.module.scss";

interface FooterProps {
  themeType: ThemeType;
  switchThemes: () => void;
}

export default function Footer({ themeType, switchThemes }: FooterProps) {
  const { i18n } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.buttonContainer}>
        <button
          className={styles.switcher}
          onClick={switchThemes}
          aria-label="Switch themes"
        >
          {themeType === ThemeType.LIGHT ? (
            <Sun size="15px" />
          ) : (
            <Moon size="15px" />
          )}
        </button>
        <button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "ja" : "en")
          }
          className={styles.switcher}
        >
          <span>{i18n.language}</span>
        </button>
      </div>
      <small>&copy; {new Date().getFullYear()} Daiki Okayama</small>
    </footer>
  );
}
