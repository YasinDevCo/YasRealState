import Profile from '@/models/Profile'
import AddProfilePage from '@/template/AddProfilePage'
import connectDB from '@/utils/connectDB'
import React from 'react'

async function Edit({ params: { profileId } }) {
    await connectDB()
    const profile = await Profile.findOne({ _id: profileId })
    if (!profile) return <h3>مشکلی پیش امده است دوباره امتحان کنید</h3>
    return (
        <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />
    )
}

export default Edit