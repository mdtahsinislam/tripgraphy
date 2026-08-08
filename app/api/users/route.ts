import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("tripgraphy");

    const users = await db
      .collection("users")
      .find(
        {},
        {
          projection: {
            password: 0, // password কখনো পাঠাবেন না
          },
        }
      )
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ users });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch users" },
      { status: 500 }
    );
  }
}