import dbConnect from "@/lib/mongoConnection";
import User from "@/models/user";
import { TokenData } from "@/types/constants/token-data.interface";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcrypt";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { usernameOrEmail, password } = await request.json();

    const user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });

    if (!user) {
      return NextResponse.json({
        status: 401,
        success: false,
        message: "Username or email not registered",
      });
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword)
      return NextResponse.json({ success: false }, { status: 409 });

    const tokenData: TokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.rol,
      is_verified: user.is_verified,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    cookies().set("token", token, {
      httpOnly: true,
    });
    return NextResponse.json({
      message: "Logged in successfully!",
      success: true,
      tokenData,
    });
  } catch (err: any) {
    console.error("API Error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
