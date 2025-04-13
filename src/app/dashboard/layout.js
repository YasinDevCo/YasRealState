import React from 'react'
import DashboardSidebar from 'src/components/layouts/DashboardSidebar'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

async function DashboradLayout({ children }) {
    const session = await getServerSession(authOptions)
    if (!session) redirect('/signin')
    return (

        <DashboardSidebar>{children}</DashboardSidebar>
    )
}

export default DashboradLayout