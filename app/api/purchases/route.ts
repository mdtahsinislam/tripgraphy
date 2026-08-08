import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("tripgraphy");

    const purchases = await db
      .collection("purchases")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ purchases });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch purchases" },
      { status: 500 }
    );
  }
}