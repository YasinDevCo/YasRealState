import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SigninPage from '@/template/SigninPage'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

async function SignIn() {
  const session = await getServerSession(authOptions)
  if (session) redirect('/dashboard')
  return (
    <div>
      <SigninPage />
    </div>
  )
}

export default SignIn