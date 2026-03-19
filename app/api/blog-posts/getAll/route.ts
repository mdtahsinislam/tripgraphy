// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\blog-posts\getAll\route.ts
// import { NextResponse } from 'next/server';
// import clientPromise from '@/lib/mongodb';

// export const GET = async () => {
//   try {
//     const client = await clientPromise;
//     const db = client.db('tripgraphy');
//     const collection = db.collection('blogPosts');

//     const posts = await collection
//       .find({})
//       .sort({ createdAt: -1 }) // newest first
//       .toArray();

//     return NextResponse.json(posts);
//   } catch (err: any) {
//     console.error(err);
//     return NextResponse.json(
//       { message: err.message || 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// };



import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export const GET = async () => {
  try {
    const client = await clientPromise;
    const db = client.db('tripgraphy');
    const collection = db.collection('blogPosts');

    const posts = await collection
      .find({})
      .sort({ createdAt: -1 }) // newest first
      .toArray();

    return NextResponse.json(posts);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { message: err.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
};