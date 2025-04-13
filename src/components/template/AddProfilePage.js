"use client";
import styles from './AddProfilePage.module.css'
import TextInput from '../modules/TextInput';
import { useState } from 'react';

function AddProfilePage() {
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

    const submitHandler = () => {
        console.log(profileData);
    }
    return (

        <div className={styles.container}>
            <h3>افزودن اگهی</h3>
            <TextInput
                title="عنوان آگهی"
                name="title"
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
            <TextInput
                title="آدرس"
                name="location"
                profileData={profileData}
                setProfileData={setProfileData}
            />
            <TextInput
                title="شماره تماس"
                name="phone"
                profileData={profileData}
                setProfileData={setProfileData}
            />
            <TextInput
                title="قیمت(تومان)"
                name="price"
                profileData={profileData}
                setProfileData={setProfileData}
            />
            <TextInput
                title="بنگاه"
                name="realState"
                profileData={profileData}
                setProfileData={setProfileData}
            />

            <button className={styles.submit} onClick={submitHandler}>ثبت اگهی</button>
        </div>
    )
}

export default AddProfilePage