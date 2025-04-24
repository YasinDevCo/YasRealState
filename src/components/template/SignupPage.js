"use client"
import React, { useState } from 'react'
import style from "./SignupPage.module.css"
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Loader from '../modules/Loader'

function SignupPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (!email || !password || !rePassword) {
            toast.error('لطفا اطلاعات معتبر وارد کنید')
            setLoading(false)
            return
        }

        if (password !== rePassword) {
            toast.error('رمز عبورها باهم مطابقت ندارند')
            setLoading(false)
            return
        }

        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const data = await res.json()
        setLoading(false)

        if (res.status !== 201) {
            toast.error(data?.error || "خطا در عملیات ثبت‌نام")
        } else {
            toast.success('ثبت نام با موفقیت انجام شد')
            router.push('/signin')
        }
    }

    return (
        <div className={style.form}>
            <h4>ثبت نام</h4>
            <form onSubmit={handleSubmit}>
                <label>ایمیل :</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>رمز عبور :</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <label>تکرار رمز عبور :</label>
                <input type='password' value={rePassword} onChange={(e) => setRePassword(e.target.value)} />

                {loading
                    ? <Loader/>
                    : <button type='submit'>ثبت نام</button>
                }

                <p>
                    حساب کاربری دارید؟ <Link href='/signin'>ورود</Link>
                </p>
            </form>
        </div>
    )
}

export default SignupPage
