"use client";

import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import styles from "./DashboardCard.module.css";
import Card from "./Card";
import { useState } from "react";

function DashboardCard({ data }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  const deleteHandler = async () => {
    setLoading(true)
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    setLoading(false)
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          <span>
            ویرایش
          </span>
          <FiEdit />
        </button>
        {loading ? <button>
          <span>
            درحال حذف  ...
          </span>
        </button> : <button onClick={deleteHandler} >
          <span>حذف آگهی
          </span>
          <AiOutlineDelete />
        </button>}

      </div>
      <Toaster />
    </div>
  );
}

export default DashboardCard;