import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Profiles from "@/models/Profile";

export async function PATCH(req, context) {
    try {
        await connectDB();

        const id = context.params.profileId;

        const session = await getServerSession(req);
        if (!session) {
            return NextResponse.json(
                {
                    error: "لطفا وارد حساب کاربری خود شوید",
                },
                { status: 401 }
            );
        }

        const user = await User.findOne({ email: session.user.email });
        if (!user) {
            return NextResponse.json(
                {
                    error: "حساب کاربری یافت نشد",
                },
                { status: 404 }
            );
        }
        if (user.role !== "ADMIN") {
            return NextResponse.json(
                { error: "دسترسی محدود" },
                {
                    status: 403,
                }
            );
        }

        const profile = await Profiles.findOne({ _id: id });
        profile.published = true;
        profile.save();

        return NextResponse.json({ message: "آگهی منتشر شد" }, { status: 200 });
    } catch (err) {
        return NextResponse.json(
            { error: "مشکلی در سرور رخ داده است" },
            { status: 500 }
        );
    }
}

