import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoConnection";
import User from "@/models/user";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const users = await User.find().sort({ dateCreated: -1 }).limit(3).exec();

    return NextResponse.json({
      success: true,
      users,
    });
  } catch (err: any) {
    console.error("API Error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
