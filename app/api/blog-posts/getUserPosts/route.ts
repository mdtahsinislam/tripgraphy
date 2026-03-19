

// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\blog-posts\getUserPosts\route.ts

// import { NextRequest, NextResponse } from "next/server";
// import clientPromise from "@/lib/mongodb";

// export const GET = async (req: NextRequest) => {
//   try {

//     const email = req.nextUrl.searchParams.get("email");

//     if (!email) {
//       return NextResponse.json({ message: "Email required" }, { status: 400 });
//     }

//     const client = await clientPromise;
//     const db = client.db("tripgraphy");
//     const collection = db.collection("blogPosts");

//     const posts = await collection
//       .find({ userEmail: email })
//       .sort({ createdAt: -1 })
//       .toArray();

//     return NextResponse.json(posts);

//   } catch (err: any) {

//     return NextResponse.json(
//       { message: err.message },
//       { status: 500 }
//     );

//   }
// };


import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const GET = async (req: NextRequest) => {
  try {

    const email = req.nextUrl.searchParams.get("email");

    const client = await clientPromise;
    const db = client.db("tripgraphy");
    const collection = db.collection("blogPosts");

    // user specific posts
    const posts = await collection
      .find({ userEmail: email })
      .sort({ createdAt: -1 })
      .toArray();

    // total posts count
    const totalPosts = await collection.countDocuments();

    // different users count
    const users = await collection.distinct("userEmail");

    return NextResponse.json({
      posts,
      totalPosts,
      totalUsers: users.length
    });

  } catch (err: any) {

    return NextResponse.json(
      { message: err.message },
      { status: 500 }
    );

  }
};