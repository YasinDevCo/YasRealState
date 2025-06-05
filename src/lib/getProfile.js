// lib/getProfile.js

import Profiles from "@/models/Profile";
import connectDB from "@/utils/connectDB";

export async function getProfileData() {
  try {
    await connectDB(); 
    const data = await Profiles.find({published:true}); 
    return { error: false, data };
  } catch (err) {
    console.error("DB Error:", err);
    return { error: true, data: null };
  }
}
