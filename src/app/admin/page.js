import connectDB from '@/utils/connectDB'
import { getServerSession } from 'next-auth'
import React, { use } from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import User from '@/models/User'
import DashboardSidebar from 'src/components/layouts/DashboardSidebar'
import AdminPage from '@/template/AdminPage'
import Profiles from '@/models/Profile'
export const metadata = {
    title: "پتل ادمین املاک | یاس املاک",

};
async function page() {
    await connectDB()
    const session = await getServerSession(authOptions)
    if (!session) redirect('/signin')
    const user = await User.findOne({ email: session.user.email })
    if (!session) redirect('/dashboard')

    const profiles = await Profiles.find({ published: false })
    return (
        <DashboardSidebar role={user.role} email={user.email}>
            <AdminPage profiles={profiles} />
        </DashboardSidebar>
    )
}

export default page