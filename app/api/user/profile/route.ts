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

    const user = await db.collection("users").findOne(
      { email },
      {
        projection: {
          password: 0, // password কখনো পাঠাবেন না
        },
      }
    );

    if (!user) {
      return NextResponse.json({ user: null });
    }

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone || "",
        photo: user.photo || "",
        role: user.role || "user",
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}