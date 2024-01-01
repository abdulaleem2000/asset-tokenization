import dbConnect from "@/lib/mongoConnection";
import User from "@/models/user";
import { sendEmail } from "@/utils/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    dbConnect();

    const [data, subUserData] = await request.json();
    console.log(data);

    const updatedUser = await User.findOneAndUpdate(
      { _id: subUserData["id"] },
      { $set: data },
      { new: true }
      //   (err: any, updatedUser: any) => {
      //     if (err) {
      //       console.error("Error updating user:", err);
      //       // Handle the error
      //     } else {
      //       console.log("User updated successfully:", updatedUser);
      //       // Handle the updated user object
      //     }
      //   }
    );
    if (!updatedUser) {
      // If user is not found, handle the error
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    console.log("User updated successfully:", updatedUser);
    return NextResponse.json({ message: "User Updated" }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
