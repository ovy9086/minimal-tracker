import { createJWT, hashPassword } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(request: Request) {
  const input = await request.json();

  const data = {
    email: input.email,
    password: await hashPassword(input.password),
    firstName: input.firstName,
    lastName: input.lastName,
  };

  const user = await db.user.create({
    data,
  });

  const jwt = await createJWT(user);
  //TODO: omit password ?
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
