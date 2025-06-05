import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFormatListBulleted, MdPending, MdPendingActions } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "../layouts/DashboardSidebar.module.css";
import LogoutButton from "../modules/LogoutButton";
import { FiLogOut } from "react-icons/fi";
import { FaClock, FaHourglassHalf } from "react-icons/fa";

async function DashboardSidebar({ children, role,
  email }) {


  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>

        <div className={styles.topDashboard}>
          <CgProfile size={40} />
          {role === "ADMIN" ? "ادمین" : null}
          <p>{email}</p>
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
        {role === "ADMIN" && <Link href="/admin" className={styles.link}>
          <MdPendingActions size={25} />
          <span>درانتظار تایید </span>
        </Link>}
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
