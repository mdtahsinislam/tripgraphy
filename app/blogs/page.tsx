

// // // // // // // // // // // // //who-we-are  C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\blogs\page.tsx
// // // // // // // // // // // // const Blogs=()=>{
// // // // // // // // // // // //     return (
// // // // // // // // // // // //         <div>Blogs</div>
// // // // // // // // // // // //     )
// // // // // // // // // // // // }
// // // // // // // // // // // // export default Blogs

// // // // // // // // // // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\blogs\page.tsx

// // // // // // // // // // // 'use client';

// // // // // // // // // // // import { useEffect, useState } from 'react';
// // // // // // // // // // // import Image from 'next/image';

// // // // // // // // // // // type BlogPost = {
// // // // // // // // // // //   _id: string;
// // // // // // // // // // //   userEmail: string;
// // // // // // // // // // //   title: string;
// // // // // // // // // // //   content: string;
// // // // // // // // // // //   images: string[];
// // // // // // // // // // //   createdAt: string;
// // // // // // // // // // // };

// // // // // // // // // // // export default function Blogs() {
// // // // // // // // // // //   const [posts, setPosts] = useState<BlogPost[]>([]);
// // // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchPosts = async () => {
// // // // // // // // // // //       try {
// // // // // // // // // // //         const res = await fetch('/api/blog-posts/getAll');
// // // // // // // // // // //         const data: BlogPost[] = await res.json();
// // // // // // // // // // //         setPosts(data);
// // // // // // // // // // //       } catch (err) {
// // // // // // // // // // //         console.error(err);
// // // // // // // // // // //       } finally {
// // // // // // // // // // //         setLoading(false);
// // // // // // // // // // //       }
// // // // // // // // // // //     };
// // // // // // // // // // //     fetchPosts();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   if (loading) return <p className="text-center mt-20 text-gray-500">Loading posts...</p>;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="min-h-screen py-10 px-5 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-50 to-white">
// // // // // // // // // // //       <h1 className="text-4xl font-bold text-center mb-10 text-teal-600">Travel Stories Gallery</h1>

// // // // // // // // // // //       {posts.length === 0 && (
// // // // // // // // // // //         <p className="text-center text-gray-500">No posts yet. Be the first to share your journey!</p>
// // // // // // // // // // //       )}

// // // // // // // // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // // // // // // // // //         {posts.map((post) => (
// // // // // // // // // // //           <div
// // // // // // // // // // //             key={post._id}
// // // // // // // // // // //             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300"
// // // // // // // // // // //           >
// // // // // // // // // // //             {/* Image carousel / first image */}
// // // // // // // // // // //             {post.images.length > 0 && (
// // // // // // // // // // //               <div className="relative h-48 sm:h-56">
// // // // // // // // // // //                 <Image
// // // // // // // // // // //                   src={post.images[0]}
// // // // // // // // // // //                   alt={post.title}
// // // // // // // // // // //                   fill
// // // // // // // // // // //                   className="object-cover"
// // // // // // // // // // //                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
// // // // // // // // // // //                 />
// // // // // // // // // // //               </div>
// // // // // // // // // // //             )}

// // // // // // // // // // //             {/* Content */}
// // // // // // // // // // //             <div className="p-5 space-y-2">
// // // // // // // // // // //               <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
// // // // // // // // // // //               <p className="text-sm text-gray-500 line-clamp-3">{post.content}</p>
// // // // // // // // // // //               <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
// // // // // // // // // // //                 <span>{new Date(post.createdAt).toLocaleDateString()}</span>
// // // // // // // // // // //                 <span>{post.userEmail}</span>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }


// // // // // // // // // // 'use client';

// // // // // // // // // // import { useEffect, useState } from 'react';
// // // // // // // // // // import Image from 'next/image';

// // // // // // // // // // type BlogPost = {
// // // // // // // // // //   _id: string;
// // // // // // // // // //   userEmail: string;
// // // // // // // // // //   title: string;
// // // // // // // // // //   content: string;
// // // // // // // // // //   images: string[];
// // // // // // // // // //   createdAt: string;
// // // // // // // // // // };

// // // // // // // // // // type UserPosts = {
// // // // // // // // // //   userEmail: string;
// // // // // // // // // //   posts: BlogPost[];
// // // // // // // // // // };

// // // // // // // // // // export default function Blogs() {
// // // // // // // // // //   const [userPosts, setUserPosts] = useState<UserPosts[]>([]);
// // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchPosts = async () => {
// // // // // // // // // //       try {
// // // // // // // // // //         const res = await fetch('/api/blog-posts/getAll');
// // // // // // // // // //         const data: BlogPost[] = await res.json();

// // // // // // // // // //         // Group posts by userEmail
// // // // // // // // // //         const grouped: Record<string, BlogPost[]> = {};
// // // // // // // // // //         data.forEach((post) => {
// // // // // // // // // //           if (!grouped[post.userEmail]) grouped[post.userEmail] = [];
// // // // // // // // // //           grouped[post.userEmail].push(post);
// // // // // // // // // //         });

// // // // // // // // // //         const groupedArray: UserPosts[] = Object.entries(grouped).map(([userEmail, posts]) => ({
// // // // // // // // // //           userEmail,
// // // // // // // // // //           posts,
// // // // // // // // // //         }));

// // // // // // // // // //         setUserPosts(groupedArray);
// // // // // // // // // //       } catch (err) {
// // // // // // // // // //         console.error(err);
// // // // // // // // // //       } finally {
// // // // // // // // // //         setLoading(false);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     fetchPosts();
// // // // // // // // // //   }, []);

// // // // // // // // // //   if (loading) return <p className="text-center mt-20 text-gray-500">Loading posts...</p>;

// // // // // // // // // //   if (userPosts.length === 0)
// // // // // // // // // //     return <p className="text-center text-gray-500 mt-20">No posts yet. Be the first to share!</p>;

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen py-10 px-5 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-50 to-white">
// // // // // // // // // //       <h1 className="text-4xl font-bold text-center mb-10 text-teal-600">Travel Stories Gallery</h1>

// // // // // // // // // //       {userPosts.map((user) => (
// // // // // // // // // //         <div key={user.userEmail} className="mb-12">
// // // // // // // // // //           {/* User Email */}
// // // // // // // // // //           <h2 className="text-2xl font-semibold text-teal-700 mb-6">{user.userEmail}</h2>

// // // // // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // // // // // // // // //             {user.posts.map((post) =>
// // // // // // // // // //               post.images.map((img, idx) => (
// // // // // // // // // //                 <div
// // // // // // // // // //                   key={`${post._id}-${idx}`}
// // // // // // // // // //                   className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300"
// // // // // // // // // //                 >
// // // // // // // // // //                   <div className="relative h-48 sm:h-56">
// // // // // // // // // //                     <Image src={img} alt={post.title} fill className="object-cover" />
// // // // // // // // // //                   </div>
// // // // // // // // // //                   <div className="p-4 space-y-1">
// // // // // // // // // //                     <h3 className="text-md font-medium text-gray-800 line-clamp-1">{post.title}</h3>
// // // // // // // // // //                     <p className="text-sm text-gray-500 line-clamp-2">{post.content}</p>
// // // // // // // // // //                     <span className="text-xs text-gray-400">
// // // // // // // // // //                       {new Date(post.createdAt).toLocaleDateString()}
// // // // // // // // // //                     </span>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ))
// // // // // // // // // //             )}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       ))}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }


// // // // // // // // // 'use client';

// // // // // // // // // import { useEffect, useState } from 'react';
// // // // // // // // // import Image from 'next/image';

// // // // // // // // // type BlogPost = {
// // // // // // // // //   _id: string;
// // // // // // // // //   userEmail: string;
// // // // // // // // //   title: string;
// // // // // // // // //   content: string;
// // // // // // // // //   images: string[];
// // // // // // // // //   createdAt: string;
// // // // // // // // // };

// // // // // // // // // export default function Blogs() {
// // // // // // // // //   const [posts, setPosts] = useState<BlogPost[]>([]);
// // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchPosts = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const res = await fetch('/api/blog-posts/getAll');
// // // // // // // // //         const data: BlogPost[] = await res.json();
// // // // // // // // //         setPosts(data);
// // // // // // // // //       } catch (err) {
// // // // // // // // //         console.error(err);
// // // // // // // // //       } finally {
// // // // // // // // //         setLoading(false);
// // // // // // // // //       }
// // // // // // // // //     };
// // // // // // // // //     fetchPosts();
// // // // // // // // //   }, []);

// // // // // // // // //   if (loading) return <p className="text-center mt-20 text-gray-500">Loading posts...</p>;

// // // // // // // // //   if (posts.length === 0)
// // // // // // // // //     return <p className="text-center text-gray-500 mt-20">No posts yet. Be the first to share your journey!</p>;

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen py-10 px-5 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-50 to-white space-y-8">
// // // // // // // // //       <h1 className="text-4xl font-bold text-center mb-10 text-teal-600">Travel Stories Gallery</h1>

// // // // // // // // //       {posts.map((post) => (
// // // // // // // // //         <div
// // // // // // // // //           key={post._id}
// // // // // // // // //           className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
// // // // // // // // //         >
// // // // // // // // //           {/* Post header */}
// // // // // // // // //           <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
// // // // // // // // //             <div className="text-sm text-gray-500">
// // // // // // // // //               <span className="font-medium text-gray-800">{post.userEmail}</span> •{' '}
// // // // // // // // //               {new Date(post.createdAt).toLocaleDateString()}
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Post content */}
// // // // // // // // //           <div className="p-5 space-y-3">
// // // // // // // // //             <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
// // // // // // // // //             <p className="text-gray-600">{post.content}</p>

// // // // // // // // //             {/* Images gallery */}
// // // // // // // // //             {post.images.length > 0 && (
// // // // // // // // //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
// // // // // // // // //                 {post.images.map((img, idx) => (
// // // // // // // // //                   <div key={idx} className="relative w-full h-48 sm:h-40 md:h-32 rounded-lg overflow-hidden shadow-sm">
// // // // // // // // //                     <Image
// // // // // // // // //                       src={img}
// // // // // // // // //                       alt={`${post.title} image ${idx + 1}`}
// // // // // // // // //                       fill
// // // // // // // // //                       className="object-cover"
// // // // // // // // //                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
// // // // // // // // //                     />
// // // // // // // // //                   </div>
// // // // // // // // //                 ))}
// // // // // // // // //               </div>
// // // // // // // // //             )}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       ))}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // 'use client';

// // // // // // // // import { useEffect, useState } from 'react';
// // // // // // // // import Image from 'next/image';
// // // // // // // // import Lightbox from 'yet-another-react-lightbox';
// // // // // // // // import 'yet-another-react-lightbox/styles.css';
// // // // // // // // import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// // // // // // // // import 'yet-another-react-lightbox/plugins/thumbnails.css';

// // // // // // // // type BlogPost = {
// // // // // // // //   _id: string;
// // // // // // // //   userEmail: string;
// // // // // // // //   title: string;
// // // // // // // //   content: string;
// // // // // // // //   images: string[];
// // // // // // // //   createdAt: string;
// // // // // // // // };

// // // // // // // // export default function Blogs() {
// // // // // // // //   const [posts, setPosts] = useState<BlogPost[]>([]);
// // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // //   // Lightbox state
// // // // // // // //   const [open, setOpen] = useState(false);
// // // // // // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// // // // // // // //   const [lightboxImages, setLightboxImages] = useState<{ src: string }[]>([]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchPosts = async () => {
// // // // // // // //       try {
// // // // // // // //         const res = await fetch('/api/blog-posts/getAll');
// // // // // // // //         const data: BlogPost[] = await res.json();
// // // // // // // //         setPosts(data);
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error(err);
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //     fetchPosts();
// // // // // // // //   }, []);

// // // // // // // //   const openLightbox = (images: string[], index: number) => {
// // // // // // // //     setLightboxImages(images.map((img) => ({ src: img })));
// // // // // // // //     setCurrentImageIndex(index);
// // // // // // // //     setOpen(true);
// // // // // // // //   };

// // // // // // // //   if (loading) return <p className="text-center mt-20 text-gray-500">Loading posts...</p>;

// // // // // // // //   if (posts.length === 0)
// // // // // // // //     return <p className="text-center text-gray-500 mt-20">No posts yet. Be the first to share your journey!</p>;

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen py-10 px-5 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-50 to-white space-y-8">
// // // // // // // //       <h1 className="text-4xl font-bold text-center mb-10 text-teal-600">Travel Stories Gallery</h1>

// // // // // // // //       {posts.map((post) => (
// // // // // // // //         <div
// // // // // // // //           key={post._id}
// // // // // // // //           className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
// // // // // // // //         >
// // // // // // // //           {/* Post header */}
// // // // // // // //           <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
// // // // // // // //             <div className="text-sm text-gray-500">
// // // // // // // //               <span className="font-medium text-gray-800">{post.userEmail}</span> •{' '}
// // // // // // // //               {new Date(post.createdAt).toLocaleDateString()}
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Post content */}
// // // // // // // //           <div className="p-5 space-y-3">
// // // // // // // //             <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
// // // // // // // //             <p className="text-gray-600">{post.content}</p>

// // // // // // // //             {/* Images gallery */}
// // // // // // // //             {post.images.length > 0 && (
// // // // // // // //               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3">
// // // // // // // //                 {post.images.map((img, idx) => (
// // // // // // // //                   <div
// // // // // // // //                     key={idx}
// // // // // // // //                     className="relative w-full h-48 sm:h-40 md:h-32 rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-all"
// // // // // // // //                     onClick={() => openLightbox(post.images, idx)}
// // // // // // // //                   >
// // // // // // // //                     <Image
// // // // // // // //                       src={img}
// // // // // // // //                       alt={`${post.title} image ${idx + 1}`}
// // // // // // // //                       fill
// // // // // // // //                       className="object-cover"
// // // // // // // //                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
// // // // // // // //                     />
// // // // // // // //                   </div>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       ))}

// // // // // // // //       {/* Lightbox */}
// // // // // // // //       <Lightbox
// // // // // // // //         open={open}
// // // // // // // //         close={() => setOpen(false)}
// // // // // // // //         slides={lightboxImages}
// // // // // // // //         index={currentImageIndex}
// // // // // // // //         plugins={[Thumbnails]}
// // // // // // // //         thumbnails={{
// // // // // // // //           position: 'bottom',
// // // // // // // //           width: 140,
// // // // // // // //           height: 100,
// // // // // // // //           gap: 12,
// // // // // // // //           padding: 8,
// // // // // // // //           border: 2,
// // // // // // // //           borderRadius: 8,
// // // // // // // //           imageFit: 'cover',
// // // // // // // //           vignette: false,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\blogs\page.tsx


// // // // // // // // 'use client';

// // // // // // // // import { useEffect, useState } from 'react';
// // // // // // // // import Image from 'next/image';
// // // // // // // // import Lightbox from 'yet-another-react-lightbox';
// // // // // // // // import 'yet-another-react-lightbox/styles.css';
// // // // // // // // import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// // // // // // // // import 'yet-another-react-lightbox/plugins/thumbnails.css';

// // // // // // // // type BlogPost = {
// // // // // // // //   _id: string;
// // // // // // // //   userEmail: string;
// // // // // // // //   title: string;
// // // // // // // //   content: string;
// // // // // // // //   images: string[];
// // // // // // // //   createdAt: string;
// // // // // // // // };

// // // // // // // // export default function Blogs() {
// // // // // // // //   const [posts, setPosts] = useState<BlogPost[]>([]);
// // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // //   // Lightbox state
// // // // // // // //   const [open, setOpen] = useState(false);
// // // // // // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// // // // // // // //   const [lightboxImages, setLightboxImages] = useState<{ src: string }[]>([]);

// // // // // // // //   // Comments state (per post)
// // // // // // // //   const [comments, setComments] = useState<Record<string, string[]>>({});
// // // // // // // //   const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchPosts = async () => {
// // // // // // // //       try {
// // // // // // // //         const res = await fetch('/api/blog-posts/getAll');
// // // // // // // //         const data: BlogPost[] = await res.json();
// // // // // // // //         setPosts(data);

// // // // // // // //         // Initialize empty comments for each post
// // // // // // // //         const initialComments: Record<string, string[]> = {};
// // // // // // // //         data.forEach((post) => {
// // // // // // // //           initialComments[post._id] = [];
// // // // // // // //         });
// // // // // // // //         setComments(initialComments);
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error(err);
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //     fetchPosts();
// // // // // // // //   }, []);

// // // // // // // //   const openLightbox = (images: string[], index: number) => {
// // // // // // // //     setLightboxImages(images.map((img) => ({ src: img })));
// // // // // // // //     setCurrentImageIndex(index);
// // // // // // // //     setOpen(true);
// // // // // // // //   };

// // // // // // // //   const handleCommentChange = (postId: string, value: string) => {
// // // // // // // //     setCommentInputs((prev) => ({ ...prev, [postId]: value }));
// // // // // // // //   };

// // // // // // // //   const handlePostComment = (postId: string) => {
// // // // // // // //     const newComment = commentInputs[postId]?.trim();
// // // // // // // //     if (!newComment) return;

// // // // // // // //     setComments((prev) => ({
// // // // // // // //       ...prev,
// // // // // // // //       [postId]: [...prev[postId], newComment],
// // // // // // // //     }));

// // // // // // // //     setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
// // // // // // // //   };

// // // // // // // //   if (loading) return <p className="text-center mt-20 text-gray-500">Loading posts...</p>;

// // // // // // // //   if (posts.length === 0)
// // // // // // // //     return <p className="text-center text-gray-500 mt-20">No posts yet. Be the first to share your journey!</p>;

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen py-10 px-5 sm:px-8 lg:px-12 bg-gradient-to-b from-slate-50 to-white space-y-8">
// // // // // // // //       <h1 className="text-4xl font-bold text-center mb-10 text-teal-600">Travel Stories Gallery</h1>

// // // // // // // //       {posts.map((post) => (
// // // // // // // //         <div
// // // // // // // //           key={post._id}
// // // // // // // //           className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
// // // // // // // //         >
// // // // // // // //           {/* Post header */}
// // // // // // // //           <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center">
// // // // // // // //             <div className="text-sm text-gray-500">
// // // // // // // //               <span className="font-medium text-gray-800">{post.userEmail}</span> •{' '}
// // // // // // // //               {new Date(post.createdAt).toLocaleDateString()}
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           {/* Post content */}
// // // // // // // //           <div className="p-5 space-y-3">
// // // // // // // //             <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
// // // // // // // //             <p className="text-gray-600">{post.content}</p>

// // // // // // // //             {/* Images gallery */}
// // // // // // // //             {post.images.length > 0 && (
// // // // // // // //               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3">
// // // // // // // //                 {post.images.map((img, idx) => (
// // // // // // // //                   <div
// // // // // // // //                     key={idx}
// // // // // // // //                     className="relative w-full h-48 sm:h-40 md:h-32 rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-all"
// // // // // // // //                     onClick={() => openLightbox(post.images, idx)}
// // // // // // // //                   >
// // // // // // // //                     <Image
// // // // // // // //                       src={img}
// // // // // // // //                       alt={`${post.title} image ${idx + 1}`}
// // // // // // // //                       fill
// // // // // // // //                       className="object-cover"
// // // // // // // //                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
// // // // // // // //                     />
// // // // // // // //                   </div>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //             )}

// // // // // // // //             {/* Comment input */}
// // // // // // // //             <div className="mt-4">
// // // // // // // //               <div className="flex gap-2">
// // // // // // // //                 <input
// // // // // // // //                   type="text"
// // // // // // // //                   placeholder="Write a comment..."
// // // // // // // //                   value={commentInputs[post._id] || ''}
// // // // // // // //                   onChange={(e) => handleCommentChange(post._id, e.target.value)}
// // // // // // // //                   className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
// // // // // // // //                 />
// // // // // // // //                 <button
// // // // // // // //                   onClick={() => handlePostComment(post._id)}
// // // // // // // //                   className="bg-cyan-600 text-white px-4 py-2 rounded-xl hover:bg-cyan-700 transition"
// // // // // // // //                 >
// // // // // // // //                   Post
// // // // // // // //                 </button>
// // // // // // // //               </div>

// // // // // // // //               {/* Display comments */}
// // // // // // // //               <div className="mt-3 space-y-2">
// // // // // // // //                 {comments[post._id]?.map((cmt, idx) => (
// // // // // // // //                   <div
// // // // // // // //                     key={idx}
// // // // // // // //                     className="bg-gray-100 px-4 py-2 rounded-xl text-gray-700 text-sm shadow-sm"
// // // // // // // //                   >
// // // // // // // //                     {cmt}
// // // // // // // //                   </div>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       ))}

// // // // // // // //       {/* Lightbox */}
// // // // // // // //       <Lightbox
// // // // // // // //         open={open}
// // // // // // // //         close={() => setOpen(false)}
// // // // // // // //         slides={lightboxImages}
// // // // // // // //         index={currentImageIndex}
// // // // // // // //         plugins={[Thumbnails]}
// // // // // // // //         thumbnails={{
// // // // // // // //           position: 'bottom',
// // // // // // // //           width: 140,
// // // // // // // //           height: 100,
// // // // // // // //           gap: 12,
// // // // // // // //           padding: 8,
// // // // // // // //           border: 2,
// // // // // // // //           borderRadius: 8,
// // // // // // // //           imageFit: 'cover',
// // // // // // // //           vignette: false,
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\blogs\page.tsx

// // // // // // // 'use client';

// // // // // // // import { useEffect, useState } from 'react';
// // // // // // // import Image from 'next/image';
// // // // // // // import { useSession } from 'next-auth/react';

// // // // // // // type Comment = {
// // // // // // //   userEmail: string;
// // // // // // //   comment: string;
// // // // // // //   createdAt: string;
// // // // // // // };

// // // // // // // type BlogPost = {
// // // // // // //   _id: string;
// // // // // // //   userEmail: string;
// // // // // // //   title: string;
// // // // // // //   content: string;
// // // // // // //   images: string[];
// // // // // // //   createdAt: string;
// // // // // // //   comments: Comment[];
// // // // // // // };

// // // // // // // export default function Blogs() {
// // // // // // //   const { data: session } = useSession();

// // // // // // //   const [posts, setPosts] = useState<BlogPost[]>([]);
// // // // // // //   const [commentInputs, setCommentInputs] = useState<{[key:string]:string}>({});

// // // // // // //   const fetchPosts = async () => {
// // // // // // //     const res = await fetch('/api/blog-posts/getAll');
// // // // // // //     const data = await res.json();
// // // // // // //     setPosts(data);
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     fetchPosts();
// // // // // // //   }, []);

// // // // // // //   const handleCommentChange = (postId:string,value:string)=>{
// // // // // // //     setCommentInputs(prev=>({...prev,[postId]:value}))
// // // // // // //   }

// // // // // // //   const submitComment = async(postId:string)=>{

// // // // // // //     if(!session?.user?.email){
// // // // // // //       alert("Login required")
// // // // // // //       return
// // // // // // //     }

// // // // // // //     const comment = commentInputs[postId]

// // // // // // //     if(!comment) return

// // // // // // //     await fetch('/api/blog-posts/comment',{
// // // // // // //       method:'POST',
// // // // // // //       headers:{
// // // // // // //         "Content-Type":"application/json"
// // // // // // //       },
// // // // // // //       body:JSON.stringify({
// // // // // // //         postId,
// // // // // // //         comment,
// // // // // // //         userEmail:session.user.email
// // // // // // //       })
// // // // // // //     })

// // // // // // //     setCommentInputs(prev=>({...prev,[postId]:""}))

// // // // // // //     fetchPosts()
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="max-w-4xl mx-auto py-10 space-y-8">

// // // // // // //       {posts.map(post=>(
// // // // // // //         <div key={post._id} className="bg-white shadow rounded-xl p-6">

// // // // // // //           <p className="text-sm text-gray-500">
// // // // // // //             {post.userEmail}
// // // // // // //           </p>

// // // // // // //           <h2 className="text-xl font-bold">
// // // // // // //             {post.title}
// // // // // // //           </h2>

// // // // // // //           <p className="mt-2 text-gray-700">
// // // // // // //             {post.content}
// // // // // // //           </p>

// // // // // // //           {/* Images */}
// // // // // // //           <div className="grid grid-cols-2 gap-3 mt-4">
// // // // // // //             {post.images.map((img,i)=>(
// // // // // // //               <Image
// // // // // // //                 key={i}
// // // // // // //                 src={img}
// // // // // // //                 width={400}
// // // // // // //                 height={300}
// // // // // // //                 alt=""
// // // // // // //                 className="rounded-lg"
// // // // // // //               />
// // // // // // //             ))}
// // // // // // //           </div>

// // // // // // //           {/* COMMENT SECTION */}

// // // // // // //           <div className="mt-6 border-t pt-4">

// // // // // // //             <h3 className="font-semibold mb-3">
// // // // // // //               Comments ({post.comments?.length || 0})
// // // // // // //             </h3>

// // // // // // //             {/* comment list */}

// // // // // // //             <div className="space-y-2 mb-4">

// // // // // // //               {post.comments?.map((c,i)=>(
// // // // // // //                 <div key={i} className="bg-gray-100 p-3 rounded-lg">

// // // // // // //                   <p className="text-sm font-semibold">
// // // // // // //                     {c.userEmail}
// // // // // // //                   </p>

// // // // // // //                   <p className="text-sm">
// // // // // // //                     {c.comment}
// // // // // // //                   </p>

// // // // // // //                 </div>
// // // // // // //               ))}

// // // // // // //             </div>

// // // // // // //             {/* input */}

// // // // // // //             <div className="flex gap-2">

// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 placeholder="Write a comment..."
// // // // // // //                 value={commentInputs[post._id] || ""}
// // // // // // //                 onChange={(e)=>handleCommentChange(post._id,e.target.value)}
// // // // // // //                 className="flex-1 border rounded-lg px-3 py-2"
// // // // // // //               />

// // // // // // //               <button
// // // // // // //                 onClick={()=>submitComment(post._id)}
// // // // // // //                 className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
// // // // // // //               >
// // // // // // //                 Post
// // // // // // //               </button>

// // // // // // //             </div>

// // // // // // //           </div>

// // // // // // //         </div>
// // // // // // //       ))}

// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }




// // // // // // 'use client';

// // // // // // import { useEffect, useState } from 'react';
// // // // // // import Image from 'next/image';
// // // // // // import { useSession } from 'next-auth/react';

// // // // // // import Lightbox from 'yet-another-react-lightbox';
// // // // // // import 'yet-another-react-lightbox/styles.css';

// // // // // // import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// // // // // // import 'yet-another-react-lightbox/plugins/thumbnails.css';

// // // // // // type Comment = {
// // // // // //   userEmail: string;
// // // // // //   comment: string;
// // // // // //   createdAt: string;
// // // // // // };

// // // // // // type BlogPost = {
// // // // // //   _id: string;
// // // // // //   userEmail: string;
// // // // // //   title: string;
// // // // // //   content: string;
// // // // // //   images: string[];
// // // // // //   createdAt: string;
// // // // // //   comments: Comment[];
// // // // // // };

// // // // // // export default function Blogs() {

// // // // // //   const { data: session } = useSession();

// // // // // //   const [posts, setPosts] = useState<BlogPost[]>([]);
// // // // // //   const [commentInputs, setCommentInputs] = useState<{[key:string]:string}>({});

// // // // // //   // LIGHTBOX STATE
// // // // // //   const [open, setOpen] = useState(false);
// // // // // //   const [slides, setSlides] = useState<{src:string}[]>([]);
// // // // // //   const [currentIndex,setCurrentIndex] = useState(0);

// // // // // //   const fetchPosts = async () => {
// // // // // //     const res = await fetch('/api/blog-posts/getAll');
// // // // // //     const data = await res.json();
// // // // // //     setPosts(data);
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     fetchPosts();
// // // // // //   }, []);

// // // // // //   const handleCommentChange = (postId:string,value:string)=>{
// // // // // //     setCommentInputs(prev=>({...prev,[postId]:value}))
// // // // // //   }

// // // // // //   const submitComment = async(postId:string)=>{

// // // // // //     if(!session?.user?.email){
// // // // // //       alert("Login required")
// // // // // //       return
// // // // // //     }

// // // // // //     const comment = commentInputs[postId]

// // // // // //     if(!comment) return

// // // // // //     await fetch('/api/blog-posts/comment',{
// // // // // //       method:'POST',
// // // // // //       headers:{
// // // // // //         "Content-Type":"application/json"
// // // // // //       },
// // // // // //       body:JSON.stringify({
// // // // // //         postId,
// // // // // //         comment,
// // // // // //         userEmail:session.user.email
// // // // // //       })
// // // // // //     })

// // // // // //     setCommentInputs(prev=>({...prev,[postId]:""}))

// // // // // //     fetchPosts()
// // // // // //   }

// // // // // //   // OPEN LIGHTBOX
// // // // // //   const openGallery = (images:string[],index:number)=>{
// // // // // //     setSlides(images.map(img=>({src:img})))
// // // // // //     setCurrentIndex(index)
// // // // // //     setOpen(true)
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="max-w-4xl mx-auto py-10 space-y-8">

// // // // // //       {posts.map(post=>(

// // // // // //         <div key={post._id} className="bg-white shadow rounded-xl p-6">

// // // // // //           <p className="text-sm text-gray-500">
// // // // // //             {post.userEmail}
// // // // // //           </p>

// // // // // //           <h2 className="text-xl font-bold">
// // // // // //             {post.title}
// // // // // //           </h2>

// // // // // //           <p className="mt-2 text-gray-700">
// // // // // //             {post.content}
// // // // // //           </p>

// // // // // //           {/* Images */}

// // // // // //           <div className="grid grid-cols-2 gap-3 mt-4">

// // // // // //             {post.images.map((img,i)=>(

// // // // // //               <div
// // // // // //                 key={i}
// // // // // //                 onClick={()=>openGallery(post.images,i)}
// // // // // //                 className="cursor-pointer"
// // // // // //               >

// // // // // //                 <Image
// // // // // //                   src={img}
// // // // // //                   width={400}
// // // // // //                   height={300}
// // // // // //                   alt=""
// // // // // //                   className="rounded-lg object-cover hover:scale-105 transition"
// // // // // //                 />

// // // // // //               </div>

// // // // // //             ))}

// // // // // //           </div>


// // // // // //           {/* COMMENT SECTION */}

// // // // // //           <div className="mt-6 border-t pt-4">

// // // // // //             <h3 className="font-semibold mb-3">
// // // // // //               Comments ({post.comments?.length || 0})
// // // // // //             </h3>

// // // // // //             <div className="space-y-2 mb-4">

// // // // // //               {post.comments?.map((c,i)=>(

// // // // // //                 <div key={i} className="bg-gray-100 p-3 rounded-lg">

// // // // // //                   <p className="text-sm font-semibold">
// // // // // //                     {c.userEmail}
// // // // // //                   </p>

// // // // // //                   <p className="text-sm">
// // // // // //                     {c.comment}
// // // // // //                   </p>

// // // // // //                 </div>

// // // // // //               ))}

// // // // // //             </div>

// // // // // //             <div className="flex gap-2">

// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Write a comment..."
// // // // // //                 value={commentInputs[post._id] || ""}
// // // // // //                 onChange={(e)=>handleCommentChange(post._id,e.target.value)}
// // // // // //                 className="flex-1 border rounded-lg px-3 py-2"
// // // // // //               />

// // // // // //               <button
// // // // // //                 onClick={()=>submitComment(post._id)}
// // // // // //                 className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
// // // // // //               >
// // // // // //                 Post
// // // // // //               </button>

// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //       ))}

// // // // // //       {/* LIGHTBOX */}

// // // // // //       <Lightbox
// // // // // //         open={open}
// // // // // //         close={()=>setOpen(false)}
// // // // // //         slides={slides}
// // // // // //         index={currentIndex}
// // // // // //         plugins={[Thumbnails]}
// // // // // //         thumbnails={{
// // // // // //           position:'bottom',
// // // // // //           width:140,
// // // // // //           height:100,
// // // // // //           gap:12,
// // // // // //           padding:8,
// // // // // //           border:2,
// // // // // //           borderRadius:8,
// // // // // //           imageFit:'cover',
// // // // // //           vignette:false
// // // // // //         }}
// // // // // //       />

// // // // // //     </div>
// // // // // //   )
// // // // // // }


// // // // // 'use client';

// // // // // import { useEffect, useState } from 'react';
// // // // // import Image from 'next/image';
// // // // // import { useSession } from 'next-auth/react';

// // // // // import Lightbox from 'yet-another-react-lightbox';
// // // // // import 'yet-another-react-lightbox/styles.css';

// // // // // import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// // // // // import 'yet-another-react-lightbox/plugins/thumbnails.css';

// // // // // type Comment = {
// // // // //   userEmail: string;
// // // // //   comment: string;
// // // // //   createdAt: string;
// // // // // };

// // // // // type BlogPost = {
// // // // //   _id: string;
// // // // //   userEmail: string;
// // // // //   title: string;
// // // // //   content: string;
// // // // //   images: string[];
// // // // //   createdAt: string;
// // // // //   comments: Comment[];
// // // // // };

// // // // // export default function Blogs() {

// // // // //   const { data: session } = useSession();

// // // // //   const [posts, setPosts] = useState<BlogPost[]>([]);
// // // // //   const [commentInputs, setCommentInputs] = useState<{[key:string]:string}>({});

// // // // //   const [open, setOpen] = useState(false);
// // // // //   const [slides, setSlides] = useState<{src:string}[]>([]);
// // // // //   const [currentIndex,setCurrentIndex] = useState(0);

// // // // //   const fetchPosts = async () => {
// // // // //     const res = await fetch('/api/blog-posts/getAll');
// // // // //     const data = await res.json();
// // // // //     setPosts(data);
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchPosts();
// // // // //   }, []);

// // // // //   const handleCommentChange = (postId:string,value:string)=>{
// // // // //     setCommentInputs(prev=>({...prev,[postId]:value}))
// // // // //   }

// // // // //   const submitComment = async(postId:string)=>{

// // // // //     if(!session?.user?.email){
// // // // //       alert("Login required")
// // // // //       return
// // // // //     }

// // // // //     const comment = commentInputs[postId]

// // // // //     if(!comment) return

// // // // //     await fetch('/api/blog-posts/comment',{
// // // // //       method:'POST',
// // // // //       headers:{
// // // // //         "Content-Type":"application/json"
// // // // //       },
// // // // //       body:JSON.stringify({
// // // // //         postId,
// // // // //         comment,
// // // // //         userEmail:session.user.email
// // // // //       })
// // // // //     })

// // // // //     setCommentInputs(prev=>({...prev,[postId]:""}))

// // // // //     fetchPosts()
// // // // //   }

// // // // //   // OPEN LIGHTBOX ONLY WITH CURRENT POST IMAGES
// // // // //   const openGallery = (postImages:string[], index:number) => {

// // // // //     const gallerySlides = postImages.map((img)=>({
// // // // //       src: img
// // // // //     }))

// // // // //     setSlides(gallerySlides)
// // // // //     setCurrentIndex(index)
// // // // //     setOpen(true)
// // // // //   }

// // // // //   return (
// // // // //     <div className="max-w-4xl mx-auto py-10 space-y-8">

// // // // //       {posts.map(post=>(

// // // // //         <div key={post._id} className="bg-white shadow rounded-xl p-6">

// // // // //           <p className="text-sm text-gray-500">
// // // // //             {post.userEmail}
// // // // //           </p>

// // // // //           <h2 className="text-xl font-bold">
// // // // //             {post.title}
// // // // //           </h2>

// // // // //           <p className="mt-2 text-gray-700">
// // // // //             {post.content}
// // // // //           </p>

// // // // //           {/* Images */}

// // // // //           <div className="grid grid-cols-2 gap-3 mt-4">

// // // // //             {post.images.map((img,i)=>(

// // // // //               <div
// // // // //                 key={i}
// // // // //                 onClick={()=>openGallery(post.images,i)}
// // // // //                 className="cursor-pointer"
// // // // //               >

// // // // //                 <Image
// // // // //                   src={img}
// // // // //                   width={400}
// // // // //                   height={300}
// // // // //                   alt="post image"
// // // // //                   className="rounded-lg object-cover hover:scale-105 transition"
// // // // //                 />

// // // // //               </div>

// // // // //             ))}

// // // // //           </div>

// // // // //           {/* COMMENT SECTION */}

// // // // //           <div className="mt-6 border-t pt-4">

// // // // //             <h3 className="font-semibold mb-3">
// // // // //               Comments ({post.comments?.length || 0})
// // // // //             </h3>

// // // // //             <div className="space-y-2 mb-4">

// // // // //               {post.comments?.map((c,i)=>(

// // // // //                 <div key={i} className="bg-gray-100 p-3 rounded-lg">

// // // // //                   <p className="text-sm font-semibold">
// // // // //                     {c.userEmail}
// // // // //                   </p>

// // // // //                   <p className="text-sm">
// // // // //                     {c.comment}
// // // // //                   </p>

// // // // //                 </div>

// // // // //               ))}

// // // // //             </div>

// // // // //             <div className="flex gap-2">

// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Write a comment..."
// // // // //                 value={commentInputs[post._id] || ""}
// // // // //                 onChange={(e)=>handleCommentChange(post._id,e.target.value)}
// // // // //                 className="flex-1 border rounded-lg px-3 py-2"
// // // // //               />

// // // // //               <button
// // // // //                 onClick={()=>submitComment(post._id)}
// // // // //                 className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
// // // // //               >
// // // // //                 Post
// // // // //               </button>

// // // // //             </div>

// // // // //           </div>

// // // // //         </div>

// // // // //       ))}

// // // // //       {/* LIGHTBOX */}

// // // // //       <Lightbox
// // // // //         open={open}
// // // // //         close={()=>setOpen(false)}
// // // // //         slides={slides}
// // // // //         index={currentIndex}
// // // // //         plugins={[Thumbnails]}
// // // // //         thumbnails={{
// // // // //           position:'bottom',
// // // // //           width:140,
// // // // //           height:100,
// // // // //           gap:12,
// // // // //           padding:8,
// // // // //           border:2,
// // // // //           borderRadius:8,
// // // // //           imageFit:'cover',
// // // // //           vignette:false
// // // // //         }}
// // // // //       />

// // // // //     </div>
// // // // //   )
// // // // // }




// // // // 'use client';

// // // // import { useEffect, useState } from 'react';
// // // // import Image from 'next/image';
// // // // import { useSession } from 'next-auth/react';

// // // // import Lightbox from 'yet-another-react-lightbox';
// // // // import 'yet-another-react-lightbox/styles.css';

// // // // import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// // // // import 'yet-another-react-lightbox/plugins/thumbnails.css';

// // // // type Comment = {
// // // //   userEmail: string;
// // // //   comment: string;
// // // //   createdAt: string;
// // // // };

// // // // type BlogPost = {
// // // //   _id: string;
// // // //   userEmail: string;
// // // //   title: string;
// // // //   content: string;
// // // //   images: string[];
// // // //   createdAt: string;
// // // //   comments: Comment[];
// // // // };

// // // // export default function Blogs() {

// // // //   const { data: session } = useSession();

// // // //   const [posts, setPosts] = useState<BlogPost[]>([]);
// // // //   const [commentInputs, setCommentInputs] = useState<{[key:string]:string}>({});

// // // //   // LIGHTBOX STATE
// // // //   const [open, setOpen] = useState(false);
// // // //   const [currentIndex,setCurrentIndex] = useState(0);

// // // //   // THIS WILL HOLD ONLY CURRENT POST IMAGES
// // // //   const [activeImages,setActiveImages] = useState<string[]>([]);

// // // //   const fetchPosts = async () => {
// // // //     const res = await fetch('/api/blog-posts/getAll');
// // // //     const data = await res.json();
// // // //     setPosts(data);
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchPosts();
// // // //   }, []);

// // // //   const handleCommentChange = (postId:string,value:string)=>{
// // // //     setCommentInputs(prev=>({...prev,[postId]:value}))
// // // //   }

// // // //   const submitComment = async(postId:string)=>{

// // // //     if(!session?.user?.email){
// // // //       alert("Login required")
// // // //       return
// // // //     }

// // // //     const comment = commentInputs[postId]

// // // //     if(!comment) return

// // // //     await fetch('/api/blog-posts/comment',{
// // // //       method:'POST',
// // // //       headers:{
// // // //         "Content-Type":"application/json"
// // // //       },
// // // //       body:JSON.stringify({
// // // //         postId,
// // // //         comment,
// // // //         userEmail:session.user.email
// // // //       })
// // // //     })

// // // //     setCommentInputs(prev=>({...prev,[postId]:""}))

// // // //     fetchPosts()
// // // //   }

// // // //   // OPEN LIGHTBOX FOR CURRENT POST ONLY
// // // //   const openGallery = (images:string[],index:number)=>{
// // // //     setActiveImages(images)
// // // //     setCurrentIndex(index)
// // // //     setOpen(true)
// // // //   }

// // // //   return (
// // // //     <div className="max-w-4xl mx-auto py-10 space-y-8">

// // // //       {posts.map(post=>(

// // // //         <div key={post._id} className="bg-white shadow rounded-xl p-6">

// // // //           <p className="text-sm text-gray-500">
// // // //             {post.userEmail}
// // // //           </p>

// // // //           <h2 className="text-xl font-bold">
// // // //             {post.title}
// // // //           </h2>

// // // //           <p className="mt-2 text-gray-700">
// // // //             {post.content}
// // // //           </p>

// // // //           {/* Images */}

// // // //           <div className="grid grid-cols-2 gap-3 mt-4">

// // // //             {post.images.map((img,i)=>(

// // // //               <div
// // // //                 key={i}
// // // //                 onClick={()=>openGallery(post.images,i)}
// // // //                 className="cursor-pointer"
// // // //               >

// // // //                 <Image
// // // //                   src={img}
// // // //                   width={400}
// // // //                   height={300}
// // // //                   alt=""
// // // //                   className="rounded-lg object-cover hover:scale-105 transition"
// // // //                 />

// // // //               </div>

// // // //             ))}

// // // //           </div>


// // // //           {/* COMMENT SECTION */}

// // // //           <div className="mt-6 border-t pt-4">

// // // //             <h3 className="font-semibold mb-3">
// // // //               Comments ({post.comments?.length || 0})
// // // //             </h3>

// // // //             <div className="space-y-2 mb-4">

// // // //               {post.comments?.map((c,i)=>(

// // // //                 <div key={i} className="bg-gray-100 p-3 rounded-lg">

// // // //                   <p className="text-sm font-semibold">
// // // //                     {c.userEmail}
// // // //                   </p>

// // // //                   <p className="text-sm">
// // // //                     {c.comment}
// // // //                   </p>

// // // //                 </div>

// // // //               ))}

// // // //             </div>

// // // //             <div className="flex gap-2">

// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Write a comment..."
// // // //                 value={commentInputs[post._id] || ""}
// // // //                 onChange={(e)=>handleCommentChange(post._id,e.target.value)}
// // // //                 className="flex-1 border rounded-lg px-3 py-2"
// // // //               />

// // // //               <button
// // // //                 onClick={()=>submitComment(post._id)}
// // // //                 className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
// // // //               >
// // // //                 Post
// // // //               </button>

// // // //             </div>

// // // //           </div>

// // // //         </div>

// // // //       ))}

// // // //       {/* LIGHTBOX */}

// // // //       <Lightbox
// // // //         open={open}
// // // //         close={()=>setOpen(false)}
// // // //         slides={activeImages.map(img=>({src:img}))}
// // // //         index={currentIndex}
// // // //         plugins={[Thumbnails]}
// // // //         thumbnails={{
// // // //           position:'bottom',
// // // //           width:140,
// // // //           height:100,
// // // //           gap:12,
// // // //           padding:8,
// // // //           border:2,
// // // //           borderRadius:8,
// // // //           imageFit:'cover',
// // // //           vignette:false
// // // //         }}
// // // //       />

// // // //     </div>
// // // //   )
// // // // }


// // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\blogs\page.tsx


// // // 'use client';

// // // import { useEffect, useState } from 'react';
// // // import Image from 'next/image';
// // // import { useSession } from 'next-auth/react';

// // // import Lightbox from "yet-another-react-lightbox";
// // // import "yet-another-react-lightbox/styles.css";

// // // import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// // // import "yet-another-react-lightbox/plugins/thumbnails.css";

// // // type Comment = {
// // //   userEmail: string;
// // //   comment: string;
// // //   createdAt: string;
// // // };

// // // type BlogPost = {
// // //   _id: string;
// // //   userEmail: string;
// // //   title: string;
// // //   content: string;
// // //   images: string[];
// // //   createdAt: string;
// // //   comments: Comment[];
// // // };

// // // export default function Blogs() {

// // //   const { data: session } = useSession();

// // //   const [posts, setPosts] = useState<BlogPost[]>([]);
// // //   const [commentInputs, setCommentInputs] = useState<{[key:string]:string}>({});

// // //   // LIGHTBOX
// // //   const [open, setOpen] = useState(false);
// // //   const [slides, setSlides] = useState<any[]>([]);
// // //   const [index, setIndex] = useState(0);

// // //   const fetchPosts = async () => {
// // //     const res = await fetch('/api/blog-posts/getAll');
// // //     const data = await res.json();
// // //     setPosts(data);
// // //   };

// // //   useEffect(() => {
// // //     fetchPosts();
// // //   }, []);

// // //   const handleCommentChange = (postId:string,value:string)=>{
// // //     setCommentInputs(prev=>({...prev,[postId]:value}))
// // //   }

// // //   const submitComment = async(postId:string)=>{

// // //     if(!session?.user?.email){
// // //       alert("Login required")
// // //       return
// // //     }

// // //     const comment = commentInputs[postId]

// // //     if(!comment) return

// // //     await fetch('/api/blog-posts/comment',{
// // //       method:'POST',
// // //       headers:{
// // //         "Content-Type":"application/json"
// // //       },
// // //       body:JSON.stringify({
// // //         postId,
// // //         comment,
// // //         userEmail:session.user.email
// // //       })
// // //     })

// // //     setCommentInputs(prev=>({...prev,[postId]:""}))

// // //     fetchPosts()
// // //   }

// // //   // OPEN LIGHTBOX
// // //   const openLightbox = (images:string[], imageIndex:number) => {

// // //     const gallerySlides = images.map((img)=>({
// // //       src: img
// // //     }))

// // //     setSlides(gallerySlides)
// // //     setIndex(imageIndex)
// // //     setOpen(true)

// // //   }

// // //   return (
// // //     <div className="max-w-4xl mx-auto py-10 space-y-8">

// // //       {posts.map(post=>(

// // //         <div key={post._id} className="bg-white shadow rounded-xl p-6">

// // //           <p className="text-sm text-green-500">
// // //             {post.userEmail}
// // //           </p>

// // //           <h2 className="text-xl font-bold">
// // //             {post.title}
// // //           </h2>

// // //           <p className="mt-2 text-gray-700">
// // //             {post.content}
// // //           </p>

// // //           {/* IMAGES */}

// // //           <div className="grid grid-cols-2 gap-3 mt-4">

// // //             {post.images.map((img,i)=>(

// // //               <div
// // //                 key={i}
// // //                 className="cursor-pointer"
// // //                 onClick={()=>openLightbox(post.images,i)}
// // //               >

// // //                 <Image
// // //                   src={img}
// // //                   width={500}
// // //                   height={350}
// // //                   alt="blog image"
// // //                   className="rounded-lg object-cover hover:scale-105 transition"
// // //                 />

// // //               </div>

// // //             ))}

// // //           </div>

// // //           {/* COMMENTS */}

// // //           <div className="mt-6 border-t pt-4">

// // //             <h3 className="font-semibold mb-3">
// // //               Comments ({post.comments?.length || 0})
// // //             </h3>

// // //             <div className="space-y-2 mb-4">

// // //               {post.comments?.map((c,i)=>(

// // //                 <div key={i} className="bg-gray-100 p-3 rounded-lg">

// // //                   <p className="text-sm font-semibold">
// // //                     {c.userEmail}
// // //                   </p>

// // //                   <p className="text-sm">
// // //                     {c.comment}
// // //                   </p>

// // //                 </div>

// // //               ))}

// // //             </div>

// // //             <div className="flex gap-2">

// // //               <input
// // //                 type="text"
// // //                 placeholder="Write a comment..."
// // //                 value={commentInputs[post._id] || ""}
// // //                 onChange={(e)=>handleCommentChange(post._id,e.target.value)}
// // //                 className="flex-1 border rounded-lg px-3 py-2"
// // //               />

// // //               <button
// // //                 onClick={()=>submitComment(post._id)}
// // //                 className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
// // //               >
// // //                 Post
// // //               </button>

// // //             </div>

// // //           </div>

// // //         </div>

// // //       ))}

// // //       {/* LIGHTBOX */}

// // //       <Lightbox
// // //         open={open}
// // //         close={()=>setOpen(false)}
// // //         slides={slides}
// // //         index={index}
// // //         plugins={[Thumbnails]}
// // //         thumbnails={{
// // //           position:"bottom",
// // //           width:120,
// // //           height:80
// // //         }}
// // //       />

// // //     </div>
// // //   )
// // // }


// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\blogs\page.tsx


// // 'use client';

// // import { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import { useSession } from 'next-auth/react';

// // import Lightbox from "yet-another-react-lightbox";
// // import "yet-another-react-lightbox/styles.css";

// // import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// // import "yet-another-react-lightbox/plugins/thumbnails.css";

// // type Comment = {
// //   userEmail: string;
// //   comment: string;
// //   createdAt: string;
// // };

// // type BlogPost = {
// //   _id: string;
// //   userEmail: string;
// //   title: string;
// //   content: string;
// //   images: string[];
// //   createdAt: string;
// //   comments: Comment[];
// // };

// // export default function Blogs() {

// //   const { data: session } = useSession();

// //   const [posts, setPosts] = useState<BlogPost[]>([]);
// //   const [commentInputs, setCommentInputs] = useState<{[key:string]:string}>({});

// //   // LIGHTBOX
// //   const [open, setOpen] = useState(false);
// //   const [slides, setSlides] = useState<any[]>([]);
// //   const [index, setIndex] = useState(0);

// //   const fetchPosts = async () => {
// //     const res = await fetch('/api/blog-posts/getAll');
// //     const data = await res.json();
// //     setPosts(data);
// //   };

// //   useEffect(() => {
// //     fetchPosts();
// //   }, []);

// //   const handleCommentChange = (postId:string,value:string)=>{
// //     setCommentInputs(prev=>({...prev,[postId]:value}))
// //   }

// //   const submitComment = async(postId:string)=>{

// //     if(!session?.user?.email){
// //       alert("Login required")
// //       return
// //     }

// //     const comment = commentInputs[postId]

// //     if(!comment) return

// //     await fetch('/api/blog-posts/comment',{
// //       method:'POST',
// //       headers:{
// //         "Content-Type":"application/json"
// //       },
// //       body:JSON.stringify({
// //         postId,
// //         comment,
// //         userEmail:session.user.email
// //       })
// //     })

// //     setCommentInputs(prev=>({...prev,[postId]:""}))

// //     fetchPosts()
// //   }

// //   // OPEN LIGHTBOX
// //   const openLightbox = (images:string[], imageIndex:number) => {

// //     const gallerySlides = images.map((img)=>({
// //       src: img
// //     }))

// //     setSlides(gallerySlides)
// //     setIndex(imageIndex)
// //     setOpen(true)

// //   }

// //   return (



// //     <div>
// //                {/* Brand Header */}
// //       <section className='w-full'>
// //         <div className="brand-header items-center text-center py-12 md:py-16 bg-gradient-to-b from-amber-50 to-white">
// //           <h4
// //             style={{
// //               fontFamily: "'Brush Script MT', cursive",
// //               fontSize: "2.5rem",
// //               margin: 0,
// //               color: "#000",
// //             }}
// //             className="mb-2"
// //           >
// //             Backpack Traveler Shop
// //             <br />
// //             Travel Guide Book & Other Instruments
// //           </h4>

// //           <p className="text-lg md:text-xl text-gray-700 tracking-wide font-light">
// //             NEVER ENDING FOOTSTEPS
// //           </p>
// //         </div>
// //       </section>
// //  <div className="max-w-4xl mx-auto py-10 space-y-8">


                  





// //       {posts.map(post=>(

// //         <div key={post._id} className="bg-white shadow rounded-xl p-6">

// //           <p className="text-sm text-green-500">
// //             {post.userEmail}
// //           </p>

// //           <h2 className="text-xl font-bold">
// //             {post.title}
// //           </h2>

// //           <p className="mt-2 text-gray-700">
// //             {post.content}
// //           </p>

// //           {/* IMAGES */}

// //           <div className="grid grid-cols-2 gap-3 mt-4">

// //             {post.images.map((img,i)=>(

// //               <div
// //                 key={i}
// //                 className="cursor-pointer"
// //                 onClick={()=>openLightbox(post.images,i)}
// //               >

// //                 <Image
// //                   src={img}
// //                   width={500}
// //                   height={350}
// //                   alt="blog image"
// //                   className="rounded-lg object-cover hover:scale-105 transition"
// //                 />

// //               </div>

// //             ))}

// //           </div>

// //           {/* COMMENTS */}

// //           <div className="mt-6 border-t pt-4">

// //             <h3 className="font-semibold mb-3">
// //               Comments ({post.comments?.length || 0})
// //             </h3>

// //             <div className="space-y-2 mb-4">

// //               {post.comments?.map((c,i)=>(

// //                 <div key={i} className="bg-gray-100 p-3 rounded-lg">

// //                   <p className="text-sm font-semibold">
// //                     {c.userEmail}
// //                   </p>

// //                   <p className="text-sm">
// //                     {c.comment}
// //                   </p>

// //                 </div>

// //               ))}

// //             </div>

// //             <div className="flex gap-2">

// //               <input
// //                 type="text"
// //                 placeholder="Write a comment..."
// //                 value={commentInputs[post._id] || ""}
// //                 onChange={(e)=>handleCommentChange(post._id,e.target.value)}
// //                 className="flex-1 border rounded-lg px-3 py-2"
// //               />

// //               <button
// //                 onClick={()=>submitComment(post._id)}
// //                 className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
// //               >
// //                 Post
// //               </button>

// //             </div>

// //           </div>

// //         </div>

// //       ))}

// //       {/* LIGHTBOX */}

// //       <Lightbox
// //         open={open}
// //         close={()=>setOpen(false)}
// //         slides={slides}
// //         index={index}
// //         plugins={[Thumbnails]}
// //         thumbnails={{
// //           position:"bottom",
// //           width:120,
// //           height:80
// //         }}
// //       />

// //     </div>

// //     </div>
   
// //   )
// // }




// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { useSession } from 'next-auth/react';
// import Lightbox from 'yet-another-react-lightbox';
// import 'yet-another-react-lightbox/styles.css';
// import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// import 'yet-another-react-lightbox/plugins/thumbnails.css';

// type Comment = {
//   userEmail: string;
//   comment: string;
//   createdAt: string;
// };

// type BlogPost = {
//   _id: string;
//   userEmail: string;
//   title: string;
//   content: string;
//   images: string[];
//   createdAt: string;
//   comments: Comment[];
// };

// export default function Blogs() {
//   const { data: session } = useSession();
//   const [posts, setPosts] = useState<BlogPost[]>([]);
//   const [commentInputs, setCommentInputs] = useState<{ [key: string]: string }>({});

//   // Lightbox state
//   const [open, setOpen] = useState(false);
//   const [slides, setSlides] = useState<any[]>([]);
//   const [index, setIndex] = useState(0);

//   // Fetch posts
//   const fetchPosts = async () => {
//     const res = await fetch('/api/blog-posts/getAll');
//     const data = await res.json();
//     setPosts(data);
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   // Handle comment input change
//   const handleCommentChange = (postId: string, value: string) => {
//     setCommentInputs(prev => ({ ...prev, [postId]: value }));
//   };

//   // Submit comment
//   const submitComment = async (postId: string) => {
//     if (!session?.user?.email) {
//       alert('Login required');
//       return;
//     }

//     const comment = commentInputs[postId];
//     if (!comment) return;

//     await fetch('/api/blog-posts/comment', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         postId,
//         comment,
//         userEmail: session.user.email
//       })
//     });

//     setCommentInputs(prev => ({ ...prev, [postId]: '' }));
//     fetchPosts();
//   };

//   // Open Lightbox
//   const openLightbox = (images: string[], imageIndex: number) => {
//     const gallerySlides = images.map(img => ({ src: img }));
//     setSlides(gallerySlides);
//     setIndex(imageIndex);
//     setOpen(true);
//   };

//   return (
//     <div>
//       {/* Brand Header */}
//       <section className="w-full">
//         <div className="brand-header items-center text-center py-12 md:py-16 bg-gradient-to-b from-amber-50 to-white">
//           <h4
//             style={{
//               fontFamily: "'Brush Script MT', cursive",
//               fontSize: '2.5rem',
//               margin: 0,
//               color: '#000',
//             }}
//             className="mb-2"
//           >
//             Backpack Traveler Shop
//             <br />
//             Travel Guide Book & Other Instruments
//           </h4>
//           <p className="text-lg md:text-xl text-gray-700 tracking-wide font-light">
//             NEVER ENDING FOOTSTEPS
//           </p>
//         </div>
//       </section>

//       <div className="max-w-4xl mx-auto py-10 space-y-8">
//         {posts.map(post => (
//           <div key={post._id} className="bg-white shadow rounded-xl p-6">
//             <p className="text-sm text-green-500">{post.userEmail}</p>

//             <h2 className="text-xl font-bold">{post.title}</h2>

//             <p className="mt-2 text-gray-700">{post.content}</p>

//             {/* Images */}
//             <div className="grid grid-cols-2 gap-3 mt-4">
//               {post.images.map((img, i) => (
//                 <div
//                   key={i}
//                   className="cursor-pointer"
//                   onClick={() => openLightbox(post.images, i)}
//                 >
//                   <Image
//                     src={img}
//                     width={500}
//                     height={350}
//                     alt="blog image"
//                     className="rounded-lg object-cover hover:scale-105 transition"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Comments */}
//             <div className="mt-6 border-t pt-4">
//               <h3 className="font-semibold mb-3">
//                 Comments ({post.comments?.length || 0})
//               </h3>

//               <div className="space-y-2 mb-4">
//                 {post.comments?.map((c, i) => (
//                   <div key={i} className="bg-gray-100 p-3 rounded-lg">
//                     <p className="text-sm font-semibold">{c.userEmail}</p>
//                     <p className="text-sm">{c.comment}</p>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   placeholder="Write a comment..."
//                   value={commentInputs[post._id] || ''}
//                   onChange={e => handleCommentChange(post._id, e.target.value)}
//                   className="flex-1 border rounded-lg px-3 py-2"
//                 />
//                 <button
//                   onClick={() => submitComment(post._id)}
//                   className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
//                 >
//                   Post
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Lightbox */}
//         <Lightbox
//           open={open}
//           close={() => setOpen(false)}
//           slides={slides}
//           index={index}
//           plugins={[Thumbnails]}
//           thumbnails={{ position: 'bottom', width: 120, height: 80 }}
//         />
//       </div>
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import toast from "react-hot-toast";
type Comment = {
  userEmail: string;
  comment: string;
  createdAt: string;
};

type BlogPost = {
  _id: string;
  userEmail: string;
  title: string;
  content: string;
  images: string[];
  createdAt: string;
  comments: Comment[];
};

export default function Blogs() {

  const { data: session } = useSession();

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [commentInputs, setCommentInputs] = useState<{[key:string]:string}>({});

  // LIGHTBOX
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<any[]>([]);
  const [index, setIndex] = useState(0);

  // STATS
  const [totalPosts, setTotalPosts] = useState(0);
  const [uniqueUsers, setUniqueUsers] = useState<string[]>([]);

  const fetchPosts = async () => {
    const res = await fetch('/api/blog-posts/getAll');
    const data: BlogPost[] = await res.json();
    setPosts(data);

    // --- Stats ---
    setTotalPosts(data.length);
    const emails = Array.from(new Set(data.map(post => post.userEmail)));
    setUniqueUsers(emails);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCommentChange = (postId:string,value:string)=>{
    setCommentInputs(prev=>({...prev,[postId]:value}))
  }

  const submitComment = async(postId:string)=>{

    // if(!session?.user?.email){
    //   alert("Login required")
    //   return
    // }

    if (!session?.user?.email) {
  toast.error("Login required");
  return;
}

    const comment = commentInputs[postId]

    if(!comment) return

    await fetch('/api/blog-posts/comment',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        postId,
        comment,
        userEmail:session.user.email
      })
    })

    setCommentInputs(prev=>({...prev,[postId]:""}))

    fetchPosts()
  }

  // OPEN LIGHTBOX
  const openLightbox = (images:string[], imageIndex:number) => {
    const gallerySlides = images.map((img)=>({ src: img }));
    setSlides(gallerySlides);
    setIndex(imageIndex);
    setOpen(true);
  }

  return (
    <div>
      {/* Brand Header */}
      <section className='w-full'>
        <div className="brand-header items-center text-center py-12 md:py-16 bg-gradient-to-b from-amber-50 to-white">
          <h4
            style={{
              fontFamily: "'Brush Script MT', cursive",
              fontSize: "2.5rem",
              margin: 0,
              color: "#000",
            }}
            className="mb-2"
          >
            Backpack Traveler Shop
            <br />
            Travel Guide Book & Other Instruments
          </h4>

          <p className="text-lg md:text-xl text-gray-700 tracking-wide font-light">
            NEVER ENDING FOOTSTEPS
          </p>
        </div>
        {/* Stats */}
      <div className="max-w-4xl mx-auto py-10 space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p><strong>Total Posts:</strong> {totalPosts}</p>
          {/* <p><strong>Total Users:</strong> {uniqueUsers.length}</p>
          <p><strong>User Emails:</strong> {uniqueUsers.join(', ')}</p> */}
        </div>
      </div>
      </section>

      

      {/* Blog Posts */}
      <div className="max-w-4xl mx-auto py-10 space-y-8">

        {posts.map(post => (
          <div key={post._id} className="bg-white shadow rounded-xl p-6">

            <p className="text-sm text-green-500">{post.userEmail}</p>
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="mt-2 text-gray-700">{post.content}</p>

            {/* IMAGES */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {post.images.map((img,i)=>(
                <div
                  key={i}
                  className="cursor-pointer"
                  onClick={()=>openLightbox(post.images,i)}
                >
                  <Image
                    src={img}
                    width={500}
                    height={350}
                    alt="blog image"
                    className="rounded-lg object-cover hover:scale-105 transition"
                  />
                </div>
              ))}
            </div>

            {/* COMMENTS */}
            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold mb-3">
                Comments ({post.comments?.length || 0})
              </h3>

              <div className="space-y-2 mb-4">
                {post.comments?.map((c,i)=>(
                  <div key={i} className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm font-semibold">{c.userEmail}</p>
                    <p className="text-sm">{c.comment}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={commentInputs[post._id] || ""}
                  onChange={(e)=>handleCommentChange(post._id,e.target.value)}
                  className="flex-1 border rounded-lg px-3 py-2"
                />
                <button
                  onClick={()=>submitComment(post._id)}
                  className="bg-cyan-600 text-white px-4 py-2 rounded-lg"
                >
                  Post
                </button>
              </div>
            </div>

          </div>
        ))}

        {/* LIGHTBOX */}
        <Lightbox
          open={open}
          close={()=>setOpen(false)}
          slides={slides}
          index={index}
          plugins={[Thumbnails]}
          thumbnails={{ position:"bottom", width:120, height:80 }}
        />

      </div>
    </div>
  )
}