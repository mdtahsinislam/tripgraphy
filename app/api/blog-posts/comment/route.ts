import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// Define the shape of a comment
interface Comment {
  userEmail: string;
  comment: string;
  createdAt: Date;
}

// Optional: define the shape of a blog post (with comments)
interface BlogPost {
  _id: ObjectId;
  title: string;
  content: string;
  comments?: Comment[];
}

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { postId, comment, userEmail } = body;

    if (!postId || !comment || !userEmail) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("tripgraphy");

    const newComment: Comment = {
      userEmail,
      comment,
      createdAt: new Date(),
    };

    // Use generic <any> to avoid TS type errors
    await db.collection<BlogPost>("blogPosts").updateOne(
      { _id: new ObjectId(postId) },
      { $push: { comments: newComment } as any } // <-- type casting
    );

    return NextResponse.json({
      message: "Comment added successfully",
      comment: newComment,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
};