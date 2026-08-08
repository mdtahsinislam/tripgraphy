// // import clientPromise from "@/lib/mongodb";
// // import { NextResponse } from "next/server";

// // export async function GET() {
// //   try {
// //     const client = await clientPromise;
// //     const db = client.db("tripgraphy");

// //     const packages = await db
// //       .collection("packages")
// //       .find({})
// //       .sort({ _id: 1 })
// //       .toArray();

// //     return NextResponse.json({ packages });
// //   } catch (error) {
// //     console.error(error);
// //     return NextResponse.json(
// //       { error: "Failed to fetch packages" },
// //       { status: 500 }
// //     );
// //   }
// // }

// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\package\route.ts

// import clientPromise from "@/lib/mongodb";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("tripgraphy");

//     const packages = await db
//       .collection("packages")
//       .find({})
//       .sort({ _id: -1 })
//       .toArray();

//     return NextResponse.json({ packages });
//   } catch (error: any) {
//     return NextResponse.json(
//       { error: error.message || "Failed to fetch packages" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { title, desc, price, img } = body;

//     if (!title || !desc || !price || !img) {
//       return NextResponse.json(
//         { message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     const client = await clientPromise;
//     const db = client.db("tripgraphy");

//     const newPackage = {
//       title,
//       desc,
//       price,
//       img,
//       createdAt: new Date(),
//     };

//     const result = await db.collection("packages").insertOne(newPackage);

//     return NextResponse.json({
//       message: "Package added successfully",
//       package: { _id: result.insertedId, ...newPackage },
//     });
//   } catch (error: any) {
//     return NextResponse.json(
//       { error: error.message || "Failed to add package" },
//       { status: 500 }
//     );
//   }
// }


// import clientPromise from "@/lib/mongodb";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("tripgraphy");

//     const packages = await db
//       .collection("packages")
//       .find({})
//       .sort({ _id: -1 })
//       .toArray();

//     return NextResponse.json({ packages });
//   } catch (error: any) {
//     console.error("GET packages error:", error);
//     return NextResponse.json(
//       { error: error.message || "Failed to fetch packages" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { title, desc, price, img } = body;

//     if (!title || !desc || !price || !img) {
//       return NextResponse.json(
//         { message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     const client = await clientPromise;
//     const db = client.db("tripgraphy");

//     const newPackage = {
//       title,
//       desc,
//       price,
//       img,
//       createdAt: new Date(),
//     };

//     const result = await db.collection("packages").insertOne(newPackage);

//     return NextResponse.json({
//       message: "Package added successfully",
//       package: { _id: result.insertedId, ...newPackage },
//     });
//   } catch (error: any) {
//     console.error("POST packages error:", error);
//     return NextResponse.json(
//       { 
//         message: "Failed to add package",
//         error: error.message || "Database connection failed" 
//       },
//       { status: 500 }
//     );
//   }
// }



// import clientPromise from "@/lib/mongodb";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("tripgraphy");

//     const packages = await db
//       .collection("packages")
//       .find({})
//       .sort({ _id: -1 })
//       .toArray();

//     return NextResponse.json({ packages });
//   } catch (error: any) {
//     console.error("GET Error:", error);
//     return NextResponse.json(
//       { error: error?.message || "Failed to fetch packages" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     console.log("Received body:", body);

//     const { title, desc, price, img } = body;

//     if (!title || !desc || !price || !img) {
//       return NextResponse.json(
//         { message: "All fields are required", received: body },
//         { status: 400 }
//       );
//     }

//     const client = await clientPromise;
//     const db = client.db("tripgraphy");

//     const newPackage = {
//       title,
//       desc,
//       price,
//       img,
//       createdAt: new Date(),
//     };

//     const result = await db.collection("packages").insertOne(newPackage);

//     return NextResponse.json({
//       message: "Package added successfully",
//       package: {
//         _id: result.insertedId,
//         ...newPackage,
//       },
//     });
//   } catch (error: any) {
//     console.error("POST Error:", error);
//     return NextResponse.json(
//       {
//         message: "Failed to add package",
//         error: error?.message || "Unknown error",
//       },
//       { status: 500 }
//     );
//   }
// }

//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\package\route.ts
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("tripgraphy");

    const packages = await db
      .collection("packages")
      .find({})
      .sort({ _id: -1 })
      .toArray();

    return NextResponse.json({ packages });
  } catch (error: any) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to fetch packages" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, desc, price, img } = body;

    if (!title || !desc || !price || !img) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("tripgraphy");

    const newPackage = {
      title,
      desc,
      price,
      img,
      createdAt: new Date(),
    };

    const result = await db.collection("packages").insertOne(newPackage);

    return NextResponse.json({
      message: "Package added successfully",
      package: {
        _id: result.insertedId,
        ...newPackage,
      },
    });
  } catch (error: any) {
    console.error("POST Error:", error);
    return NextResponse.json(
      {
        message: "Failed to add package",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}