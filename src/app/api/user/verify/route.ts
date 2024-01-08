import dbConnect from "@/lib/mongoConnection";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/utils/getDataFromToken";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { TokenData } from "@/types/constants/token-data.interface";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
interface CustomJwtPayload extends JwtPayload {
  id: string;
  username: string;
  email: string;
  role: string;
  is_verified: boolean;
}
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { verifyToken } = await request.json();

    const user = await User.findOne({
      verify_token: verifyToken,
    });

    console.log(user);

    const dataFromToken = getDataFromToken(request);

    let loggedUserVerifiedState = false;
    if (dataFromToken) {
      const { email } = dataFromToken;

      loggedUserVerifiedState = (await User.findOne({ email })).is_verified;
    }

    if (!user.verify_token_expiry) {
      return NextResponse.json(
        { message: "Token has expired", success: false },
        { status: 500 }
      );
    } else if (!user) {
      return NextResponse.json(
        { message: "Invalid Token", success: false },
        { status: 500 }
      );
    } else if (user.verify_token_expiry < Date.now()) {
      return NextResponse.json({
        message: "Ask for verification again. No token found!",
      });
    } else if (loggedUserVerifiedState) {
      return NextResponse.json(
        {
          message: "Your email was already verified",
          success: true,
        },
        { status: 200 }
      );
    }

    user.is_verified = true;
    user.verify_token = undefined;
    user.verify_token_expiry = undefined;
    // const tokenData: TokenData = {
    //   id: user._id,
    //   username: user.username,
    //   email: user.email,
    //   role: user.rol,
    //   is_verified: user.is_verified,
    // };
    // const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
    //   expiresIn: "1d",
    // });

    // cookies().set("token", token, {
    //   httpOnly: true,
    // });
    await user.save();

    return NextResponse.json({
      message: "Email verified successfully!",
      success: true,
    });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
