import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  const jwt = request.cookies.get(process.env.COOKIE_NAME as string);
  if (!jwt) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  try {
    await verifyJWT(jwt.value);
    return NextResponse.next();
  } catch (e) {
    console.error(e);
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

export const config = {
  matcher: ["/home", "/project/:path*", "/"],
};

const verifyJWT = async (jwt: string) => {
  const { payload } = await jwtVerify(jwt, new TextEncoder().encode(process.env.JWT_SECRET));

  return payload.payload;
};
