"use client"
import React, { useState } from 'react'
import style from "./SignupPage.module.css"
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { ThreeDots } from 'react-loader-spinner'
import { signIn } from 'next-auth/react'

function SigninPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (!email || !password) {
            toast.error('لطفا اطلاعات معتبر وارد کنید')
            setLoading(false)
            return
        }

        const res = await signIn('credentials', {
            email,
            password,
            redirect: false
        })

        setLoading(false)

        if (res?.error) {
            toast.error(res.error || "خطا در عملیات ورود")
        } else {
            toast.success('ورود با موفقیت انجام شد')
            router.push('/')
        }
    }

    return (
        <div className={style.form}>
            <h4>ورود</h4>
            <form onSubmit={handleSubmit}>
                <label>ایمیل :</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>رمز عبور :</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                {loading
                    ? <ThreeDots wrapperStyle={{ margin: 'auto' }} color="#00BFFF" height={40} width={50} />
                    : <button type='submit'>ورود</button>
                }

                <p>
                    حساب کاربری ندارید؟ <Link href='/signup'>ثبت‌نام</Link>
                </p>
            </form>
        </div>
    )
}

export default SigninPage
