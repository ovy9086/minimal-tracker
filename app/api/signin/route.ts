import { comparePasswords, createJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const input = await request.json();
  const { email, password } = input;

  const user = await db.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: "Invalid login" }, { status: 401 });
  }

  const passwordOk = await comparePasswords(password, user.password);
  if (!passwordOk) {
    return NextResponse.json({ error: "Invalid login" }, { status: 401 });
  }

  const jwt = await createJWT(user);
  return NextResponse.json(user, {
    status: 201,
    headers: {
      "Set-Cookie": serialize(process.env.COOKIE_NAME as string, jwt, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      }),
    },
  });
}
