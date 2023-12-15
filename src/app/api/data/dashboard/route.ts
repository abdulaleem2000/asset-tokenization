import dbConnect from "@/lib/mongoConnection";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/utils/getDataFromToken";
import { TokenData } from "@/types/constants/token-data.interface";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const tokenData: TokenData = getDataFromToken(request);

    const user = await User.findOne({ _id: tokenData.id }).select("-password");

    return NextResponse.json({ message: "Success", success: true, user });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Issue happened while searching for data", success: false },
      { status: 400 }
    );
  }
}
