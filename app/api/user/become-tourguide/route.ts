import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "You must be logged in" },
        { status: 401 }
      );
    }

    const client = await clientPromise;
    const db = client.db("tripgraphy");

    const result = await db.collection("users").updateOne(
      { email: session.user.email },
      {
        $set: {
          role: "tourguide",
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Congratulations! You are now a Tour Guide",
      role: "tourguide",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to update role" },
      { status: 500 }
    );
  }
}