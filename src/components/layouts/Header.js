"use client";

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import styles from "../layouts/Header.module.css";
import ThemeToggle from "@/template/ThemeToggle";
import { useSession } from "next-auth/react";
import { BiCloset, BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";

function Header() {
  const { data: session, status } = useSession();
  const [btnToggle, setBtnToggle] = useState(false)
  
  return (
    <>
      <header className={styles.header}>
        <div>
          <ul>
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="/buy-residential">آگهی ها</Link>
            </li>
          </ul>
        </div>
        <button className={styles.btnMenu} onClick={() => setBtnToggle(true)}><BiMenu size={32} /></button>


        {status === "authenticated" ? (
          <div className={styles.login}>
            <Link href="/dashboard">
              <FaUserAlt />
            </Link>
            <span className={styles.btnClose}>
              <ThemeToggle />
            </span>
          </div>
        ) : (
          <div className={styles.login}>
            <Link href="/signin">
              <FiLogIn />
              {/* <span>ورود</span> */}
            </Link>
            <span className={styles.btnClose}>
              <ThemeToggle />
            </span>
          </div>
        )}
      </header>
      {btnToggle && <div className={styles.hideMenu}>
        <ul>
          <li onClick={() => setBtnToggle(false)}>
            <CgClose size={30} />
          </li>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
          <li>
            تغییر تم :<ThemeToggle />
          </li>
        </ul>

      </div>}

    </>
  );
}

export default Header;
