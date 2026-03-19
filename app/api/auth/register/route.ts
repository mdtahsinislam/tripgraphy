

//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\auth\register\route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const phone = formData.get("phone") as string;
    const photo = formData.get("photo") as File;

    const client = await clientPromise;
    const db = client.db("tripgraphy");
    const users = db.collection("users");

    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    let photoURL = "";

    if (photo && photo.size > 0) {
      const imgData = new FormData();
      imgData.append("image", photo);

      const imgRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.IMAGEBB_API}`,
        {
          method: "POST",
          body: imgData,
        }
      );

      const imgJson = await imgRes.json();
      photoURL = imgJson.data.url;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      phone,
      photo: photoURL,
      createdAt: new Date(),
    };

    const result = await users.insertOne(newUser);

    return NextResponse.json({
      message: "User registered successfully",
      user: {
        _id: result.insertedId,
        name,
        email,
        phone,
        photo: photoURL,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Registration failed" },
      { status: 500 }
    );
  }
}