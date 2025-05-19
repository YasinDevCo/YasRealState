import styles from "@/template/MyProfilesPage.module.css";
import DashboardCard from "../modules/DashboardCard";

function MyProfilesPage({ profiles }) {
  return (
    <>
      <div className="topMargin">
        <br />
      </div>
      <div>

        {profiles.length ? null : (
          <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
        )}
        {profiles.map((i) => (
          <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
        ))}
      </div>
    </>
  );
}

export default MyProfilesPage;