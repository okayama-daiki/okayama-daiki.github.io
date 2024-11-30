import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import { ChevronsDown } from "@geist-ui/icons";
import styles from "./TopPage.module.scss";

const TYPING_ANIMATION_DURATION = 4500;

const scroll = () => {
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
};

export default function TopPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const typed = document.querySelector(".typed-cursor");
      if (typed) {
        typed.classList.remove("typed-cursor--blink");
        typed.classList.add(styles.fadeOut);
      }
    }, TYPING_ANIMATION_DURATION);

    return () => clearTimeout(timer);
  });

  return (
    <section className={styles.main}>
      <ReactTyped
        strings={["Hello, World!", "I'm Daiki Okayama."]}
        typeSpeed={40}
        backSpeed={50}
        style={{ fontSize: "1.5em" }}
        className={styles.sacramento}
      />
      <ChevronsDown className={styles.downIcon} onClick={scroll} />
    </section>
  );
}
