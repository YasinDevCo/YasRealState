"use client";
import styles from './AddProfilePage.module.css'
import TextInput from '../modules/TextInput';
import { useEffect, useState } from 'react';
import RadioList from '../modules/RaidoList';
import TextList from '../modules/TextList';
import CustomDatePicker from '../modules/CustomDatePicker';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Loader from '../modules/Loader';

function AddProfilePage({ data }) {
    const [profileData, setProfileData] = useState({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: [],
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (data) setProfileData(data)
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        const res = await fetch('/api/profile', {
            method: "POST",
            body: JSON.stringify(profileData),
            headers: { "Content-Type": "application/json" },
        })
        const data = await res.json()
        setLoading(false)
        if (data.error) {
            toast.error(data.error)
        } else {
            toast.success(data.message);
            router.refresh();
        }
        console.log(profileData);

    }
    const editHandler = async () => {
        setLoading(true)
        const res = await fetch('/api/profile',
            {
                method: "PATCH",
                body: JSON.stringify(profileData),
                headers: { "Content-Type": "application/json" }
            }
        )
        const dataUpdate = await res.json()
        setLoading(false)
        if (dataUpdate.error) {
            toast.error(dataUpdate.error)
        }
        else {
            toast.success(dataUpdate.message)
            router.refresh()
        }
    }
    return (
        <>
            <div className="topMargin">
                <br />
            </div>
            <div className={styles.container}>
                <h3>{data ? "ویرایش کاربر" : 'افزودن کاربر'}</h3>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <TextInput
                            title="عنوان آگهی"
                            name="title"
                            profileData={profileData}
                            setProfileData={setProfileData}
                        />
                    </div>
                    <div className={styles.item}>
                        <TextInput
                            title="شماره تماس"
                            name="phone"
                            profileData={profileData}
                            setProfileData={setProfileData}
                        />
                    </div>
                    <div className={styles.item}>
                        <TextInput
                            title="قیمت(تومان)"
                            name="price"
                            profileData={profileData}
                            setProfileData={setProfileData}
                        />
                    </div>
                    <div className={styles.item}>
                        <TextInput
                            title="بنگاه"
                            name="realState"
                            profileData={profileData}
                            setProfileData={setProfileData}
                        />
                    </div>



                </div>
                <TextInput
                    title="آدرس"
                    name="location"
                    profileData={profileData}
                    setProfileData={setProfileData}
                />
                <TextInput
                    title="توضیحات"
                    name="description"
                    profileData={profileData}
                    setProfileData={setProfileData}
                    textarea={true}
                />
                <RadioList profileData={profileData} setProfileData={setProfileData} />
                <div className={styles.items}>

                    <TextList title={"امکانات رفاهی"} profileData={profileData} setProfileData={setProfileData} type={'amenities'} />
                    <TextList title={"قوانین"} profileData={profileData} setProfileData={setProfileData} type={'rules'} />
                </div>
                <CustomDatePicker profileData={profileData} setProfileData={setProfileData} />
                {loading
                    ? <Loader />
                    : data
                        ? <button className={styles.submit} onClick={editHandler}>ویرایش اگهی</button>
                        : <button className={styles.submit} onClick={submitHandler}>ثبت اگهی</button>}
            </div>
        </>
    )
}

export default AddProfilePage