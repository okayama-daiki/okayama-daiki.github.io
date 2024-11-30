import { Sun, Moon } from "@geist-ui/icons";

import { ThemeType } from "../../types";
import styles from "./Footer.module.scss";

interface FooterProps {
  themeType: ThemeType;
  switchThemes: () => void;
}

export default function Footer({ themeType, switchThemes }: FooterProps) {
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
          onClick={() => {
            alert("Sorry, but this feature is not implemented yet.");
          }}
          className={styles.switcher}
        >
          <span style={{}}>EN</span>
        </button>
      </div>
      <small>&copy; {new Date().getFullYear()} Daiki Okayama</small>
    </footer>
  );
}
