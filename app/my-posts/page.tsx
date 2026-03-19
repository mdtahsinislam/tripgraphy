
//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\my-posts\page.tsx
// import React from 'react'

// export default function page() {
//   return (
//     <div>page</div>
//   )
// }

// I want to see specific user post here 

// 'use client';

// import { useEffect, useState } from 'react';
// import { useSession } from 'next-auth/react';
// import Image from 'next/image';

// type BlogPost = {
//   _id: string;
//   userEmail: string;
//   title: string;
//   content: string;
//   images: string[];
// };

// export default function MyPosts() {

//   const { data: session } = useSession();
//   const [posts, setPosts] = useState<BlogPost[]>([]);

//   useEffect(() => {

//     if (!session?.user?.email) return;

//     const fetchPosts = async () => {

//       const res = await fetch(
//         `/api/blog-posts/getUserPosts?email=${session.user.email}`
//       );

//       const data = await res.json();
//       setPosts(data);
//     };

//     fetchPosts();

//   }, [session]);

//   return (
//     <div className="max-w-4xl mx-auto py-10 space-y-8">

//       <h1 className="text-3xl font-bold text-center">
//         My Blog Posts
//       </h1>

//       {posts.length === 0 && (
//         <p className="text-center text-gray-500">
//           No posts found
//         </p>
//       )}

//       {posts.map(post => (

//         <div
//           key={post._id}
//           className="bg-white shadow rounded-xl p-6"
//         >

//           <h2 className="text-xl font-bold">
//             {post.title}
//           </h2>

//           <p className="mt-2 text-gray-700">
//             {post.content}
//           </p>

//           <div className="grid grid-cols-2 gap-3 mt-4">

//             {post.images.map((img, i) => (

//               <Image
//                 key={i}
//                 src={img}
//                 width={500}
//                 height={350}
//                 alt="blog image"
//                 className="rounded-lg object-cover"
//               />

//             ))}

//           </div>

//         </div>

//       ))}

//     </div>
//   );
// }




'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

type BlogPost = {
  _id: string;
  userEmail: string;
  title: string;
  content: string;
  images: string[];
};

export default function MyPosts() {

  const { data: session } = useSession();

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [totalPosts,setTotalPosts] = useState(0);
  const [totalUsers,setTotalUsers] = useState(0);

  useEffect(() => {

    if (!session?.user?.email) return;

    const email = session.user.email; // ✅ FIX

    const fetchPosts = async () => {

      const res = await fetch(
        `/api/blog-posts/getUserPosts?email=${email}`
      );

      const data = await res.json();

      setPosts(data.posts);
      setTotalPosts(data.totalPosts);
      setTotalUsers(data.totalUsers);
    };

    fetchPosts();

  }, [session]);

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-8">

      <h1 className="text-3xl font-bold text-center">
        My Blog Posts
      </h1>

      {/* STATS */}
      <div className="flex justify-center gap-8 text-center">

        <div className="bg-gray-100 px-6 py-3 rounded-lg">
          <p className="text-xl font-bold">{posts.length}</p>
          <p className="text-sm text-gray-500">My Posts</p>
        </div>

        <div className="bg-gray-100 px-6 py-3 rounded-lg">
          <p className="text-xl font-bold">{totalPosts}</p>
          <p className="text-sm text-gray-500">Total Posts</p>
        </div>

      </div>

      {/* POSTS */}
      {posts.length === 0 && (
        <p className="text-center text-gray-500">
          No posts found
        </p>
      )}

      {posts.map(post => (
        <div
          key={post._id}
          className="bg-white shadow rounded-xl p-6"
        >

          <p className="text-sm text-green-500">
            {post.userEmail}
          </p>

          <h2 className="text-xl font-bold">
            {post.title}
          </h2>

          <p className="mt-2 text-gray-700">
            {post.content}
          </p>

          <div className="grid grid-cols-2 gap-3 mt-4">
            {post.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                width={500}
                height={350}
                alt="blog image"
                className="rounded-lg object-cover"
              />
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}