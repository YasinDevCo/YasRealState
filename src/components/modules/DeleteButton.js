"use client";

import { useRouter } from "next/navigation";
import styles from './DeleteButton.module.css'
import { FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";
import { useState } from "react";
export default function DeleteButtonWithModal({ id }) {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const deleteHandler = async () => {
        try {
            const res = await fetch(`/api/profile/${id}`, { method: "DELETE" });
            const result = await res.json();

            if (res.ok) {
                toast.success(result.message || "آگهی با موفقیت حذف شد");
                router.refresh();
            } else {
                toast.error(result.error || "خطا در حذف آگهی");
            }
        } catch (error) {
            console.error("DELETE ERROR:", error);
            toast.error("مشکلی در ارتباط با سرور پیش آمد");
        } finally {
            setShowModal(false);
        }
    };

    return (
        <>
            <button onClick={() => setShowModal(true)} className={styles.delete_button}>
                <FiTrash2 size={18} />
                حذف آگهی
            </button>

            {showModal && (
                <div className={styles.modal_overlay}>
                    <div className={styles.modal_box}>
                        <h3>آیا مطمئن هستید؟</h3>
                        <p>این عمل غیرقابل بازگشت است.</p>
                        <div className={styles.modal_actions}>
                            <button onClick={deleteHandler} className={styles.confirm_btn}>
                                بله، حذف کن
                            </button>
                            <button onClick={() => setShowModal(false)} className={styles.cancel_btn}>
                                لغو
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
