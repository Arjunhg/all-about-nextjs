import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/register", request.nextUrl));
  }
}

export const config = {
  matchers: "/dashboard",
};
// no need for if statement, as the config will only match the dashboard route