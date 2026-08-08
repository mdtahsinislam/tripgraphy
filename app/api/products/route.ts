// import clientPromise from "@/lib/mongodb";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("tripgraphy");

//     const products = await db
//       .collection("products")
//       .find({})
//       .sort({ _id: 1 })
//       .toArray();

//     return NextResponse.json({ products });
//   } catch (error: any) {
//     console.error(error);
//     return NextResponse.json(
//       { error: error.message || "Failed to fetch products" },
//       { status: 500 }
//     );
//   }
// }


import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("tripgraphy");

    const products = await db
      .collection("products")
      .find({})
      .sort({ _id: -1 })
      .toArray();

    return NextResponse.json({ products });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, price, image, alt } = body;

    if (!title || !price || !image) {
      return NextResponse.json(
        { message: "Title, price and image are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("tripgraphy");

    const newProduct = {
      title,
      price,
      image,
      alt: alt || title,
      createdAt: new Date(),
    };

    const result = await db.collection("products").insertOne(newProduct);

    return NextResponse.json({
      message: "Product added successfully",
      product: { _id: result.insertedId, ...newProduct },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to add product" },
      { status: 500 }
    );
  }
}