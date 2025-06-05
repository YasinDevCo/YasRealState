import { FaGithub } from "react-icons/fa";
import styles from "../layouts/Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.desc}>
            <h3>سامانه خرید و اجاره ملک</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <div>
            <ul>
              <li>تعرفه قانونی</li>
              <li>دسترسی سریع</li>
              <li>مشاورین خبره</li>
              <li>قولنامه محضری</li>
            </ul>
          </div>
        </div>

        <p className={styles.footerText}>
          ساخته شده با ❤️ توسط
          <Link
            href="https://github.com/YasinDevCo/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
    
          >
            YasinDevCo 
            <FaGithub className={styles.footerIcon} />
          </Link>
        </p>
      </footer>
    </>
  );
}

export default Footer;
