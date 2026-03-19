import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const image = searchParams.get("image");
  const email = searchParams.get("email");

  const client = await clientPromise;
  const db = client.db("tripgraphy");

  await db.collection("purchases").insertOne({
    title,
    price,
    image,
    email,
    createdAt: new Date(),
  });

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/my-products`);
}