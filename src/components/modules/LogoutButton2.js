"use client";

import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import styles from "./LogoutButton.module.css";
import Link from "next/link";

function LogoutButton2() {
  return (
    <Link href={''} className={styles.hide2} onClick={signOut}>
      <FiLogOut size={25} color="rgb(219, 5, 5)" />
    </Link>
  );
}

export default LogoutButton2;