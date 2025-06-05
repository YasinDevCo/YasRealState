"use client";

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import {FaUserAlt } from "react-icons/fa";
import styles from "../layouts/Header.module.css";
import ThemeToggle from "@/template/ThemeToggle";
import { useSession } from "next-auth/react";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineProduct } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { IoLogInOutline } from "react-icons/io5";

function Header() {
  const { data: session, status } = useSession();

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
  


      <header className={styles.headerMobile}>

        <Link href="/"><GrHomeRounded size={26} /></Link>

        <Link href="/buy-residential"> <AiOutlineProduct size={30} />
        </Link>



        {status === "authenticated" ? (
          < >
            <Link href="/dashboard">
              <GoPerson size={30} />
            </Link>
            <ThemeToggle />
          </>
        ) : (
          <>
            <Link href="/signin">
              <IoLogInOutline size={30}  />
            </Link>
            <ThemeToggle />
          </>
        )}

      </header>
    </>
  );
}

export default Header;
