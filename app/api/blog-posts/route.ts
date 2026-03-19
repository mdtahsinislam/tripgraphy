
// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\blog-posts\route.ts
// // import { NextRequest, NextResponse } from 'next/server';
// // import clientPromise from '@/lib/mongodb';
// // import FormData from 'form-data';

// // export const POST = async (req: NextRequest) => {
// //   try {
// //     const formData = await req.formData();

// //     const title = formData.get('title')?.toString();
// //     const content = formData.get('content')?.toString();
// //     const userEmail = formData.get('userEmail')?.toString() || 'unknown@example.com';
// //     const imagesFiles = formData.getAll('images') as File[];

// //     if (!title || !content || imagesFiles.length === 0) {
// //       return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
// //     }

// //     // Upload images to ImgBB
// //     const uploadedImages: string[] = [];

// //     for (const file of imagesFiles) {
// //       const arrayBuffer = await file.arrayBuffer();
// //       const buffer = Buffer.from(arrayBuffer);

// //       const imgbbForm = new FormData();
// //       imgbbForm.append('image', buffer.toString('base64'));
// //       imgbbForm.append('name', file.name);

// //       const imgbbRes = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMAGEBB_API}`, {
// //         method: 'POST',
// //         body: imgbbForm,
// //       });

// //       const imgbbData = await imgbbRes.json();
// //       if (!imgbbData.success) {
// //         return NextResponse.json({ message: 'Image upload failed' }, { status: 500 });
// //       }

// //       uploadedImages.push(imgbbData.data.url);
// //     }

// //     // Store in MongoDB
// //     const client = await clientPromise;
// //     const db = client.db('tripgraphy'); // You can use any DB name
// //     const collection = db.collection('blogPosts');

// //     const newPost = {
// //       userEmail,
// //       title,
// //       content,
// //       images: uploadedImages,
// //       createdAt: new Date(),
// //     };

// //     const result = await collection.insertOne(newPost);

// //     return NextResponse.json({ message: 'Post created successfully', postId: result.insertedId });
// //   } catch (err: any) {
// //     console.error(err);
// //     return NextResponse.json({ message: err.message || 'Internal Server Error' }, { status: 500 });
// //   }
// // };


// // app/api/blog-posts/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import clientPromise from '@/lib/mongodb';

// export const POST = async (req: NextRequest) => {
//   try {
//     const formData = await req.formData();

//     const title = formData.get('title')?.toString();
//     const content = formData.get('content')?.toString();
//     const userEmail = formData.get('userEmail')?.toString() || 'unknown@example.com';
//     const imagesFiles = formData.getAll('images') as File[];

//     if (!title || !content || imagesFiles.length === 0) {
//       return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
//     }

//     // Upload images to ImgBB concurrently
//     const uploadedImages = await Promise.all(
//       imagesFiles.map(async (file) => {
//         const arrayBuffer = await file.arrayBuffer();
//         const base64Image = Buffer.from(arrayBuffer).toString('base64');

//         const imgbbRes = await fetch(
//           `https://api.imgbb.com/1/upload?key=${process.env.IMAGEBB_API}`,
//           {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//               image: base64Image,
//               name: file.name,
//             }),
//           }
//         );

//         const imgbbData = await imgbbRes.json();

//         if (!imgbbData.success) {
//           throw new Error('Image upload failed');
//         }

//         return imgbbData.data.url;
//       })
//     );

//     // Store post in MongoDB
//     const client = await clientPromise;
//     const db = client.db('tripgraphy');
//     const collection = db.collection('blogPosts');

//     const newPost = {
//       userEmail,
//       title,
//       content,
//       images: uploadedImages,
//       createdAt: new Date(),
//     };

//     const result = await collection.insertOne(newPost);

//     return NextResponse.json({
//       message: 'Post created successfully',
//       postId: result.insertedId,
//     });
//   } catch (err: any) {
//     console.error(err);
//     return NextResponse.json(
//       { message: err.message || 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// };






// app/api/blog-posts/route.ts

//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\api\blog-posts\route.ts
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const title = formData.get('title')?.toString();
    const content = formData.get('content')?.toString();
    const userEmail = formData.get('userEmail')?.toString() || 'unknown@example.com';
    const imagesFiles = formData.getAll('images') as File[];

    if (!title || !content || imagesFiles.length === 0) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const uploadedImages = await Promise.all(
      imagesFiles.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const base64Image = Buffer.from(arrayBuffer).toString('base64');

        // URLSearchParams for application/x-www-form-urlencoded
        const body = new URLSearchParams();
        body.append('key', process.env.IMAGEBB_API!);
        body.append('image', base64Image);
        body.append('name', file.name);

        const imgbbRes = await fetch('https://api.imgbb.com/1/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: body.toString(),
        });

        const imgbbData = await imgbbRes.json();

        if (!imgbbData.success) {
          console.error('ImgBB Error:', imgbbData);
          throw new Error('Image upload failed');
        }

        return imgbbData.data.url;
      })
    );

    // Store post in MongoDB
    const client = await clientPromise;
    const db = client.db('tripgraphy');
    const collection = db.collection('blogPosts');

    const newPost = {
      userEmail,
      title,
      content,
      images: uploadedImages,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(newPost);

    return NextResponse.json({
      message: 'Post created successfully',
      postId: result.insertedId,
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { message: err.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
};