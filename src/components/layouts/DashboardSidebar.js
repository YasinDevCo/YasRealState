import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "../layouts/DashboardSidebar.module.css";
import LogoutButton from "../modules/LogoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function DashboardSidebar({ children }) {
  const session = await getServerSession(authOptions)
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile size={40} />
        <p>{session?.user.email}</p>
        <span></span>

        <Link href="/dashboard" className={styles.link}>
          <CgProfile size={20} />
          حساب کاربری
        </Link>

        <Link href="/dashboard/my-profiles" className={styles.link}>
          <MdOutlineFormatListBulleted size={20} />
          آگهی های من
        </Link>

        <Link href="/dashboard/add" className={styles.link}>
          <AiOutlinePlusCircle size={20} />
          ثبت آگهی
        </Link>

        <LogoutButton />
      </div>

      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
