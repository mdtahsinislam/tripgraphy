// import { NextResponse } from "next/server";
// import clientPromise from "@/lib/mongodb";

// export async function POST(req: Request) {

//   const { title, price, email } = await req.json();

//   const client = await clientPromise;
//   const db = client.db("tripgraphy");

//   await db.collection("purchases").insertOne({
//     title,
//     price,
//     email,
//     createdAt: new Date(),
//   });

//   return NextResponse.json({ success: true });
// }


import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  const { title, price } = await req.json();

  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" });
  }

  const client = await clientPromise;
  const db = client.db("tripgraphy");

  await db.collection("purchases").insertOne({
    email: session.user?.email,
    title,
    price,
    createdAt: new Date(),
  });

  return NextResponse.json({ success: true });
}