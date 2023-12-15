import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";

    if (token) {
      const tokenData: any = jwt.verify(token, process.env.TOKEN_SECRET!);

      return tokenData;
    } else {
      return;
    }
  } catch (err: any) {
    console.log("Error getting token data");
    throw new Error(err.message);
  }
};
