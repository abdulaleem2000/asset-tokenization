import dbConnect from "@/lib/mongoConnection";
import User from "@/models/user";
import { sendEmail } from "@/utils/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const { username, email, password, dateCreated } = await request.json();

    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!existingUser) {
      const dateCreatedAsDate = new Date(dateCreated * 1000);

      // TODO Do script to look at admin/invertor allowed mails
      // and if so give the rol automatically

      const newUser = new User({
        username,
        password,
        email,
        rol: "Client",
        createdDate: dateCreatedAsDate,
      });

      const savedUser = await newUser.save();

      await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

      return NextResponse.json(
        { message: "Signup completed!", savedUser },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Username or Email already in use",
        },
        { status: 409 }
      );
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
}
