import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "../layouts/DashboardSidebar.module.css";
import LogoutButton from "../modules/LogoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { FiLogOut } from "react-icons/fi";

async function DashboardSidebar({ children }) {


  const session = await getServerSession(authOptions)
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>

        <div className={styles.topDashboard}>
          <CgProfile size={40} />
          <p>{session?.user.email}</p>
          <span></span>
        </div>

        <Link href="/dashboard" className={styles.link}>
          <CgProfile size={25} />
          <span>حساب کاربری</span>
        </Link>

        <Link href="/dashboard/my-profiles" className={styles.link}>
          <MdOutlineFormatListBulleted size={25} />
          <span>آگهی های من</span>
        </Link>

        <Link href="/dashboard/add" className={styles.link}>
          <AiOutlinePlusCircle size={25} />
          <span>ثبت آگهی</span>
        </Link>
        <Link href={'#'} className={styles.hide2}>
          <FiLogOut size={25} color="rgb(219, 5, 5)" />
        </Link>
        <Link href={'#'} className={styles.hide1} >
          <LogoutButton />
        </Link>
      </div>

      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
