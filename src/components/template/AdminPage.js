import AdminCard from "../modules/AdminCard";
import styles from "./AdminPage.module.css";

function AdminPage({ profiles }) {
    return (
        <div>
            {profiles?.length ? null : (
                <p className={styles.text}>هیچ آگهی در انتظار تاییدی وجود ندارد</p>
            )}
            <div className={styles.container}>{profiles?.map((i) => (
                <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
            ))}</div>
        </div>
    );
}

export default AdminPage;