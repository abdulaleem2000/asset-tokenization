import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { JwtPayload, jwtDecode } from "jwt-decode";
interface CustomJwtPayload extends JwtPayload {
  id: string;
  username: string;
  email: string;
  role: string;
}
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log(request);
  const isPublicPath = path === "/" || path === "/login" || path === "/signup";
  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    //decoding jwt token
    //const decoded = jwtDecode(token);
    const decoded: CustomJwtPayload = jwtDecode(token);
    console.log("decoded", decoded);
    //giving role based access
    if (decoded.role === "Client")
      return NextResponse.redirect(
        new URL("/Investor/dashboard", request.nextUrl)
      );
    else if (decoded.role === "Admin")
      return NextResponse.redirect(
        new URL("/admin/dashboard", request.nextUrl)
      );
  } else if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/dashboard", "/login", "/signup"],
};
