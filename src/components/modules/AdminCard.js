"use client";

import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { sp } from "@/utils/replaceNumber";
import styles from "./AdminCard.module.css";
import DeleteButton from "./DeleteButton";
import { FaRocket } from "react-icons/fa";

function AdminCard({ data: { _id, title, description, location, price } }) {
    const router = useRouter();

    const publishHandler = async () => {
        const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
        const result = await res.json();
        if (result.message) {
            toast.success(result.message);
            router.refresh();
        }
    };




    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.properties}>
                <span>{location}</span>
                <span>{sp(price)}</span>
            </div>
            <div className={styles.btns}>
                <button onClick={publishHandler}>
                    <FaRocket />
                    انتشار</button>
                <DeleteButton id={_id} />
            </div>
        </div>
    );
}

export default AdminCard;