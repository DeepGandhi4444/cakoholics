import { NextResponse } from "next/server";

export function middleware(req) {
  const isAdminLoggedIn = req.cookies.get("adminLoggedIn")?.value;

  if (isAdminLoggedIn !== "true") {
    return NextResponse.redirect(new URL("/auth/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
