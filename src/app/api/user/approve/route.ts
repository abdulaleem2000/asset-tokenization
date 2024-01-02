import dbConnect from "@/lib/mongoConnection";
import User from "@/models/user";
import { TokenData } from "@/types/constants/token-data.interface";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    dbConnect();
    const updateData = {
      kyc: true,
      // Other fields you want to update
    };
    const { id } = await request.json();
    const user = await User.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    console.log(user);

    return NextResponse.json({
      message: "User Updated",
      success: true,
      user,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
      success: false,
    });
  }
}
