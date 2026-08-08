import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("tripgraphy");

    const packages = await db
      .collection("purchases")
      .find({ email })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ packages });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch packages" },
      { status: 500 }
    );
  }
}