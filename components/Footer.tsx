import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.poweredBy}>
          Powered by 🚀 {" "}
          <a href="https://nextra.vercel.app/" target="_blank" rel="noopener noreferrer">
            Nextra
          </a>
          ,{" "}
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            Next.js
          </a>
          , and{" "}
          <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
            Vercel
          </a>
        </div>
        <div className={styles.builtBy}>
          Built by ❤ <a href="https://miyucutee.com/">miyucutee</a> - <code>{new Date().getFullYear()}</code>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
