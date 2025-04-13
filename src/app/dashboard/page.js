import DashboardPage from '@/template/DashboardPage'
import connectDB from '@/utils/connectDB'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import User from '@/models/User'
import { getServerSession } from 'next-auth'

async function Dashborad() {
  await connectDB()
  const session = await getServerSession(authOptions)
  const user = await User.findOne({ email: session?.user.email })


  return (
    <>
      <DashboardPage createdAt={user.createdAt} />
    </>
  )
}

export default Dashborad