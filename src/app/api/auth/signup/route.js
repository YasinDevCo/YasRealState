import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "لطفا اطلاعات معتبر وارد کنید" }, { status: 422 });
    }
    const exsistingUser = await User.findOne({ email });
    if (exsistingUser) {
      return NextResponse.json({ error: "این ایمیل قبلا ��بت شده ا��ت" }, { status: 422 });
    }

    const hashedPassword = await hashPassword(password);
    await User.create({ email, password: hashedPassword });


    return NextResponse.json({ message: "ثبت نام با موفقیت انجام شد" }, { status: 201 });

  } catch {
    return NextResponse.json({ error: "مشکلی در سرور رخ داده است. لطفا دوباره تلاش کنید" },
      { status: 500 });
  }
}

