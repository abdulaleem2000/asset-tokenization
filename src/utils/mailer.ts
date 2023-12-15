import nodemailer from "nodemailer";
import User from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// TODO maybe do enum for types of mail and check from there
export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashTokenSymbols = await bcrypt.hash(userId.toString(), 10);
    const hashedToken = hashTokenSymbols.replace(/[^a-zA-Z0-9]/g, "");

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "8667698014981c",
        pass: "b6ea12dd220c03",
      },
    });

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verify_token: hashedToken,
        verify_token_expiry: Date.now() + 3600000,
      });
    } else if (emailType == "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgot_password_token: hashedToken,
        forgot_password_token_expiry: Date.now() + 3600000,
      });
    }

    const mailOptions = await constructMailOptions(
      emailType,
      email,
      hashedToken
    );

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

async function constructMailOptions(
  emailType: string,
  email: string,
  hashedToken: string
) {
  switch (emailType) {
    case "VERIFY":
      return {
        from: '"Fred Foo 👻" <foo@example.com>',
        to: email,
        subject: "Verify your email",
        html: `<p>Click <a href="${process.env.domain}/verify-email?token=${hashedToken}">here</a> to verify your email!</p>
        <br>
        <p>Or copy and past this link on your browser: <br> ${process.env.domain}/verify-email?token=${hashedToken}</p>`,
      };
    case "RESET":
      return {
        from: "sebastianarango201316@gmail.com",
        to: email,
        subject: "Reset your password",
        html: `<p>Click <a href="${process.env.domain}/forgot-password/reset?token=${hashedToken}">here</a> to reset your password!
        }</p>
        <br>
        <p>Or copy and past this link on your browser: <br> ${process.env.domain}/forgot-password/reset?token=${hashedToken}</p>`,
      };
    default:
      throw new Error(`Mail type ${emailType} not supported`);
  }
}
