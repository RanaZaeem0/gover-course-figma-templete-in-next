import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (token) {
    return NextResponse.json({ token });
  } else {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
}
