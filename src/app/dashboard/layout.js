import React from 'react'
import DashboardSidebar from 'src/components/layouts/DashboardSidebar'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import connectDB from '@/utils/connectDB'
import User from '@/models/User'

export const metadata = {
    title: " پنل کاربری املاک | یاس املاک",

};


async function DashboradLayout({ children }) {
    const session = await getServerSession(authOptions)
    if (!session) redirect('/signin')
    await connectDB()
    const user = await User.findOne({ email: session.user?.email })
    if (!user) {
        <h3>مشکلی پیش امده است </h3>
    }

    return (

        <DashboardSidebar role={user.role} email={user.email}>{children}</DashboardSidebar>
    )
}

export default DashboradLayout