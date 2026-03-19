// // // // // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\blogs-post\page.tsx
// // // // // // import React from 'react'

// // // // // // export default function page() {
// // // // // //   return (
// // // // // //     <div>page</div>
// // // // // //   )
// // // // // // }


// // // // // // app/blogs-post/page.tsx



// // // // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\blogs-post\page.tsx
// // // // // 'use client';

// // // // // import { useState } from 'react';
// // // // // import { useForm, SubmitHandler } from 'react-hook-form';
// // // // // import { zodResolver } from '@hookform/resolvers/zod';
// // // // // import * as z from 'zod';
// // // // // import Image from 'next/image';
// // // // // import { useSession } from "next-auth/react";
// // // // // // ── Validation Schema ────────────────────────────────────────
// // // // // const postSchema = z.object({
// // // // //   title: z.string().min(3, 'Title must be at least 3 characters').max(120),
// // // // //   content: z.string().min(20, 'Content is too short').max(10000),
// // // // //   // images are handled separately (not in schema)
// // // // // });

// // // // // type PostFormData = z.infer<typeof postSchema>;

// // // // // export default function CreateBlogPost() {
// // // // //   const [images, setImages] = useState<File[]>([]);
// // // // //   const [previews, setPreviews] = useState<string[]>([]);
// // // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // // //   const [submitMessage, setSubmitMessage] = useState('');

// // // // //   const { data: session } = useSession();
// // // // // const userEmail = session?.user?.email || "";

// // // // //   const {
// // // // //     register,
// // // // //     handleSubmit,
// // // // //     formState: { errors },
// // // // //     reset,
// // // // //   } = useForm<PostFormData>({
// // // // //     resolver: zodResolver(postSchema),
// // // // //   });

// // // // //   // Handle multiple image selection
// // // // //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // // //     const files = Array.from(e.target.files || []);
// // // // //     if (files.length + images.length > 15) {
// // // // //       alert('Maximum 15 images allowed');
// // // // //       return;
// // // // //     }

// // // // //     const newPreviews = files.map((file) => URL.createObjectURL(file));

// // // // //     setImages((prev) => [...prev, ...files]);
// // // // //     setPreviews((prev) => [...prev, ...newPreviews]);
// // // // //   };

// // // // //   // Remove one image
// // // // //   const removeImage = (index: number) => {
// // // // //     setImages((prev) => prev.filter((_, i) => i !== index));
// // // // //     setPreviews((prev) => {
// // // // //       URL.revokeObjectURL(prev[index]); // cleanup
// // // // //       return prev.filter((_, i) => i !== index);
// // // // //     });
// // // // //   };

// // // // //   const onSubmit: SubmitHandler<PostFormData> = async (data) => {
// // // // //     if (images.length === 0) {
// // // // //       setSubmitMessage('Please add at least one image.');
// // // // //       return;
// // // // //     }

// // // // //     setIsSubmitting(true);
// // // // //     setSubmitMessage('');

// // // // //     try {
// // // // //       const formData = new FormData();
// // // // //       formData.append('title', data.title);
// // // // //       formData.append('content', data.content);

// // // // //       images.forEach((file) => {
// // // // //         formData.append('images', file);
// // // // //       });

// // // // //       const res = await fetch('/api/blog-posts', {
// // // // //         method: 'POST',
// // // // //         body: formData,
// // // // //       });

// // // // //       if (!res.ok) {
// // // // //         const error = await res.json();
// // // // //         throw new Error(error.message || 'Failed to create post');
// // // // //       }

// // // // //       const result = await res.json();
// // // // //       setSubmitMessage('Post created successfully! 🎉');
// // // // //       reset();
// // // // //       setImages([]);
// // // // //       setPreviews([]);
// // // // //     } catch (err: any) {
// // // // //       setSubmitMessage(`Error: ${err.message}`);
// // // // //     } finally {
// // // // //       setIsSubmitting(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
// // // // //       <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
// // // // //         {/* Header */}
// // // // //         <div className="bg-gradient-to-r from-gray-600 to-cyan-600 px-8 py-10 text-white">
// // // // //           <h1 className="text-3xl md:text-4xl font-bold">Create New Blog Post</h1>
// // // // //           <p className="mt-3 opacity-90">Share your travel story with the world 🌍</p>
// // // // //         </div>

// // // // //         {/* Form */}
// // // // //         <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-10 space-y-8">
           


// // // // // <div>
// // // // //   <label htmlFor="userEmail" className="block text-lg font-medium text-gray-700">
// // // // //     User Email
// // // // //   </label>
// // // // //   <input
// // // // //     id="userEmail"
// // // // //     type="text"
// // // // //     value={userEmail} // auto-filled
// // // // //     readOnly
// // // // //     className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed text-lg py-3 px-4"
// // // // //     placeholder="Your email will appear here"
// // // // //   />
// // // // // </div>

// // // // //           {/* Title */}
// // // // //           <div>
// // // // //             <label htmlFor="title" className="block text-lg font-medium text-gray-700">
// // // // //               Post Title
// // // // //             </label>
// // // // //             <input
// // // // //               id="title"
// // // // //               type="text"
// // // // //               {...register('title')}
// // // // //               className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg py-3 px-4"
// // // // //               placeholder="A day in Cox's Bazar..."
// // // // //             />
// // // // //             {errors.title && (
// // // // //               <p className="mt-1 text-red-600 text-sm">{errors.title.message}</p>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* Content */}
// // // // //           <div>
// // // // //             <label htmlFor="content" className="block text-lg font-medium text-gray-700">
// // // // //               Your Story
// // // // //             </label>
// // // // //             <textarea
// // // // //               id="content"
// // // // //               rows={10}
// // // // //               {...register('content')}
// // // // //               className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-base py-3 px-4"
// // // // //               placeholder="Tell us about your adventure..."
// // // // //             />
// // // // //             {errors.content && (
// // // // //               <p className="mt-1 text-red-600 text-sm">{errors.content.message}</p>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* Images Upload */}
// // // // //           <div>
// // // // //             <label className="block text-lg font-medium text-gray-700 mb-3">
// // // // //               Upload Photos (up to 15)
// // // // //             </label>

// // // // //             <div className="flex items-center justify-center w-full">
// // // // //               <label
// // // // //                 htmlFor="dropzone-file"
// // // // //                 className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
// // // // //               >
// // // // //                 <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
// // // // //                   <svg
// // // // //                     className="w-10 h-10 mb-3 text-gray-400"
// // // // //                     fill="none"
// // // // //                     stroke="currentColor"
// // // // //                     viewBox="0 0 24 24"
// // // // //                   >
// // // // //                     <path
// // // // //                       strokeLinecap="round"
// // // // //                       strokeLinejoin="round"
// // // // //                       strokeWidth="2"
// // // // //                       d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
// // // // //                     />
// // // // //                   </svg>
// // // // //                   <p className="mb-2 text-lg text-gray-500">
// // // // //                     <span className="font-semibold">Click to upload</span> or drag & drop
// // // // //                   </p>
// // // // //                   <p className="text-sm text-gray-400">PNG, JPG, WEBP (max 15 files)</p>
// // // // //                 </div>
// // // // //                 <input
// // // // //                   id="dropzone-file"
// // // // //                   type="file"
// // // // //                   accept="image/*"
// // // // //                   multiple
// // // // //                   onChange={handleImageChange}
// // // // //                   className="hidden"
// // // // //                 />
// // // // //               </label>
// // // // //             </div>

// // // // //             {/* Image Previews */}
// // // // //             {previews.length > 0 && (
// // // // //               <div className="mt-6">
// // // // //                 <p className="text-sm font-medium text-gray-700 mb-3">
// // // // //                   Selected Images ({previews.length})
// // // // //                 </p>
// // // // //                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
// // // // //                   {previews.map((src, idx) => (
// // // // //                     <div key={idx} className="relative group rounded-lg overflow-hidden shadow">
// // // // //                       <Image
// // // // //                         src={src}
// // // // //                         alt={`Preview ${idx + 1}`}
// // // // //                         width={300}
// // // // //                         height={200}
// // // // //                         className="object-cover w-full h-32 sm:h-40"
// // // // //                       />
// // // // //                       <button
// // // // //                         type="button"
// // // // //                         onClick={() => removeImage(idx)}
// // // // //                         className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
// // // // //                       >
// // // // //                         ×
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* Submit */}
// // // // //           <div className="pt-6">
// // // // //             <button
// // // // //               type="submit"
// // // // //               disabled={isSubmitting}
// // // // //               className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 transition text-lg shadow-md"
// // // // //             >
// // // // //               {isSubmitting ? 'Publishing...' : 'Publish Post'}
// // // // //             </button>
// // // // //           </div>

// // // // //           {/* Feedback */}
// // // // //           {submitMessage && (
// // // // //             <div
// // // // //               className={`mt-4 p-4 rounded-lg text-center ${
// // // // //                 submitMessage.includes('Error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
// // // // //               }`}
// // // // //             >
// // // // //               {submitMessage}
// // // // //             </div>
// // // // //           )}
// // // // //         </form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // //I want all Information store in mongodb
// // // // // ///User Email
// // // // // ///Post Title
// // // // // ///Your Story
// // // // // ///Upload Photos (up to 15)




// // // // // app/blogs-post/page.tsx

// // // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\blogs-post\page.tsx

// // // // 'use client';

// // // // import { useState } from 'react';
// // // // import { useForm, SubmitHandler } from 'react-hook-form';
// // // // import { zodResolver } from '@hookform/resolvers/zod';
// // // // import * as z from 'zod';
// // // // import Image from 'next/image';
// // // // import { useSession } from "next-auth/react";

// // // // // ── Validation Schema ────────────────────────────────────────
// // // // const postSchema = z.object({
// // // //   title: z.string().min(3, 'Title must be at least 3 characters').max(120),
// // // //   content: z.string().min(20, 'Content is too short').max(10000),
// // // // });

// // // // type PostFormData = z.infer<typeof postSchema>;

// // // // export default function CreateBlogPost() {
// // // //   const [images, setImages] = useState<File[]>([]);
// // // //   const [previews, setPreviews] = useState<string[]>([]);
// // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // //   const [submitMessage, setSubmitMessage] = useState('');

// // // //   const { data: session } = useSession();
// // // //   const userEmail = session?.user?.email || 'Not logged in';

// // // //   const {
// // // //     register,
// // // //     handleSubmit,
// // // //     formState: { errors },
// // // //     reset,
// // // //   } = useForm<PostFormData>({
// // // //     resolver: zodResolver(postSchema),
// // // //   });

// // // //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     const files = Array.from(e.target.files || []);
// // // //     if (files.length + images.length > 15) {
// // // //       alert('Maximum 15 images allowed');
// // // //       return;
// // // //     }

// // // //     const newPreviews = files.map((file) => URL.createObjectURL(file));

// // // //     setImages((prev) => [...prev, ...files]);
// // // //     setPreviews((prev) => [...prev, ...newPreviews]);
// // // //   };

// // // //   const removeImage = (index: number) => {
// // // //     setImages((prev) => prev.filter((_, i) => i !== index));
// // // //     setPreviews((prev) => {
// // // //       URL.revokeObjectURL(prev[index]);
// // // //       return prev.filter((_, i) => i !== index);
// // // //     });
// // // //   };

// // // //   const onSubmit: SubmitHandler<PostFormData> = async (data) => {
// // // //     if (images.length === 0) {
// // // //       setSubmitMessage('Please add at least one photo to your story.');
// // // //       return;
// // // //     }

// // // //     setIsSubmitting(true);
// // // //     setSubmitMessage('');

// // // //     try {
// // // //       const formData = new FormData();
// // // //       formData.append('title', data.title);
// // // //       formData.append('content', data.content);
// // // //       images.forEach((file) => formData.append('images', file));

// // // //       const res = await fetch('/api/blog-posts', {
// // // //         method: 'POST',
// // // //         body: formData,
// // // //       });

// // // //       if (!res.ok) throw new Error((await res.json()).message || 'Failed to publish');

// // // //       setSubmitMessage('Your story has been published! 🌴✨');
// // // //       reset();
// // // //       setImages([]);
// // // //       setPreviews([]);
// // // //     } catch (err: any) {
// // // //       setSubmitMessage(`Something went wrong: ${err.message}`);
// // // //     } finally {
// // // //       setIsSubmitting(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-5 sm:px-8 lg:px-12">
// // // //       <div className="max-w-4xl mx-auto">
// // // //         {/* Card with subtle glass-like effect + shadow */}
// // // //         <div className="bg-white/70 backdrop-blur-xl shadow-2xl shadow-black/8 rounded-3xl overflow-hidden border border-white/40">
// // // //           {/* Header – more elegant gradient */}
// // // //           <div className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 px-8 py-12 text-white">
// // // //             <h1 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-md">
// // // //               Share Your Journey
// // // //             </h1>
// // // //             <p className="mt-4 text-lg md:text-xl opacity-95 font-light">
// // // //               Inspire others with your travel memories 🌏 📸
// // // //             </p>
// // // //           </div>

// // // //           {/* Form content */}
// // // //           <form onSubmit={handleSubmit(onSubmit)} className="p-7 md:p-12 space-y-10">
// // // //             {/* Hidden / Read-only email field */}
// // // //             <div>
// // // //               <label className="block text-base font-medium text-gray-700 mb-2">
// // // //                 Your Email
// // // //               </label>
// // // //               <div className="relative">
// // // //                 <input
// // // //                   type="text"
// // // //                   value={userEmail}//user email not store in mongodb
// // // //                   readOnly
// // // //                   className="block w-full rounded-xl border-0 bg-gray-100/80 px-5 py-4 text-gray-700 shadow-inner focus:ring-2 focus:ring-cyan-500/40 transition"
// // // //                 />
// // // //                 <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
// // // //                   🔒
// // // //                 </span>
// // // //               </div>
// // // //             </div>

// // // //             {/* Title */}
// // // //             <div>
// // // //               <label className="block text-base font-medium text-gray-800 mb-2.5">
// // // //                 Post Title
// // // //               </label>
// // // //               <input
// // // //                 {...register('title')}
// // // //                 className="block w-full rounded-xl border border-gray-200 px-5 py-4 text-lg shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition placeholder:text-gray-400"
// // // //                 placeholder="Sunset at St. Martin's Island..."
// // // //               />
// // // //               {errors.title && (
// // // //                 <p className="mt-2 text-sm text-rose-600">{errors.title.message}</p>
// // // //               )}
// // // //             </div>

// // // //             {/* Content */}
// // // //             <div>
// // // //               <label className="block text-base font-medium text-gray-800 mb-2.5">
// // // //                 Your Travel Story
// // // //               </label>
// // // //               <textarea
// // // //                 {...register('content')}
// // // //                 rows={12}
// // // //                 className="block w-full rounded-xl border border-gray-200 px-5 py-4 text-base shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition resize-y min-h-[180px] placeholder:text-gray-400"
// // // //                 placeholder="Describe the smells, sounds, feelings... make us feel like we were there."
// // // //               />
// // // //               {errors.content && (
// // // //                 <p className="mt-2 text-sm text-rose-600">{errors.content.message}</p>
// // // //               )}
// // // //             </div>

// // // //             {/* Images */}
// // // //             <div className="space-y-5">
// // // //               <label className="block text-base font-medium text-gray-800">
// // // //                 Photos (up to 15) — make it visual!
// // // //               </label>

// // // //               {/* Dropzone – nicer hover effect */}
// // // //               <label
// // // //                 htmlFor="dropzone-file"
// // // //                 className="group relative flex flex-col items-center justify-center w-full h-56 border-2 border-dashed border-gray-300/70 rounded-2xl bg-gradient-to-br from-slate-50/70 to-white/30 hover:border-cyan-400 hover:bg-cyan-50/30 transition-all duration-300 cursor-pointer overflow-hidden"
// // // //               >
// // // //                 <div className="flex flex-col items-center justify-center py-10 px-6 text-center transition">
// // // //                   <svg
// // // //                     className="w-14 h-14 mb-5 text-gray-400 group-hover:text-cyan-500 transition-colors"
// // // //                     fill="none"
// // // //                     stroke="currentColor"
// // // //                     viewBox="0 0 24 24"
// // // //                   >
// // // //                     <path
// // // //                       strokeLinecap="round"
// // // //                       strokeLinejoin="round"
// // // //                       strokeWidth={1.8}
// // // //                       d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
// // // //                     />
// // // //                   </svg>
// // // //                   <p className="text-lg font-medium text-gray-600 group-hover:text-cyan-700">
// // // //                     Click or drag photos here
// // // //                   </p>
// // // //                   <p className="mt-2 text-sm text-gray-500">
// // // //                     PNG · JPG · WEBP (max 15 files)
// // // //                   </p>
// // // //                 </div>
// // // //                 <input
// // // //                   id="dropzone-file"
// // // //                   type="file"
// // // //                   accept="image/*"
// // // //                   multiple
// // // //                   onChange={handleImageChange}
// // // //                   className="hidden"
// // // //                 />
// // // //               </label>

// // // //               {/* Previews – nicer grid + hover lift effect */}
// // // //               {previews.length > 0 && (
// // // //                 <div className="space-y-4">
// // // //                   <p className="text-sm font-medium text-gray-700">
// // // //                     Selected photos ({previews.length}/15)
// // // //                   </p>
// // // //                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
// // // //                     {previews.map((src, idx) => (
// // // //                       <div
// // // //                         key={idx}
// // // //                         className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
// // // //                       >
// // // //                         <Image
// // // //                           src={src}
// // // //                           alt={`Preview ${idx + 1}`}
// // // //                           width={400}
// // // //                           height={300}
// // // //                           className="object-cover w-full aspect-[4/3] sm:aspect-square"
// // // //                         />
// // // //                         <button
// // // //                           type="button"
// // // //                           onClick={() => removeImage(idx)}
// // // //                           className="absolute top-3 right-3 bg-red-600/90 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
// // // //                         >
// // // //                           ×
// // // //                         </button>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //               )}
// // // //             </div>

// // // //             {/* Submit area */}
// // // //             <div className="pt-8">
// // // //               <button
// // // //                 type="submit"
// // // //                 disabled={isSubmitting}
// // // //                 className={`
// // // //                   w-full py-5 px-8 rounded-2xl font-semibold text-lg shadow-lg
// // // //                   transition-all duration-300
// // // //                   ${isSubmitting
// // // //                     ? 'bg-gray-400 cursor-not-allowed'
// // // //                     : 'bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white hover:shadow-xl hover:scale-[1.01] active:scale-95'
// // // //                   }
// // // //                 `}
// // // //               >
// // // //                 {isSubmitting ? (
// // // //                   <span className="flex items-center justify-center gap-3">
// // // //                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
// // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
// // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
// // // //                     </svg>
// // // //                     Publishing...
// // // //                   </span>
// // // //                 ) : (
// // // //                   'Publish Your Story'
// // // //                 )}
// // // //               </button>
// // // //             </div>

// // // //             {/* Feedback message */}
// // // //             {submitMessage && (
// // // //               <div
// // // //                 className={`mt-6 p-5 rounded-2xl text-center font-medium border-l-4 ${
// // // //                   submitMessage.includes('Error') || submitMessage.includes('went wrong')
// // // //                     ? 'bg-red-50 text-red-800 border-red-500'
// // // //                     : 'bg-emerald-50 text-emerald-800 border-emerald-500'
// // // //                 }`}
// // // //               >
// // // //                 {submitMessage}
// // // //               </div>
// // // //             )}
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }




// // // // app/blogs-post/page.tsx
// // // 'use client';

// // // import { useState } from 'react';
// // // import { useForm, SubmitHandler } from 'react-hook-form';
// // // import { zodResolver } from '@hookform/resolvers/zod';
// // // import * as z from 'zod';
// // // import Image from 'next/image';
// // // import { useSession } from 'next-auth/react';

// // // // ── Validation Schema ────────────────────────────────────────
// // // const postSchema = z.object({
// // //   title: z.string().min(3, 'Title must be at least 3 characters').max(120),
// // //   content: z.string().min(20, 'Content is too short').max(10000),
// // // });

// // // type PostFormData = z.infer<typeof postSchema>;

// // // // Server Action (can be in separate file: app/actions.ts with 'use server')
// // // async function createBlogPostAction(prevState: { message?: string; error?: string }, formData: FormData) {
// // //   'use server';

// // //   try {
// // //     const session = await getServerSession(); // or your auth logic
// // //     if (!session?.user?.email) {
// // //       return { error: 'You must be logged in to post a story.' };
// // //     }

// // //     const title = formData.get('title') as string;
// // //     const content = formData.get('content') as string;
// // //     const images = formData.getAll('images') as File[];

// // //     // Zod validation on server too (recommended)
// // //     postSchema.parse({ title, content });

// // //     if (images.length === 0) {
// // //       return { error: 'Please add at least one photo to your story.' };
// // //     }
// // //     if (images.length > 15) {
// // //       return { error: 'Maximum 15 images allowed.' };
// // //     }

// // //     // ── Your upload logic here ───────────────────────────────────────
// // //     // Example: save to disk (not recommended for production)
// // //     // or upload to S3 / Cloudinary / Supabase / UploadThing / Vercel Blob / etc.

// // //     // const uploadedUrls: string[] = [];
// // //     // for (const file of images) {
// // //     //   if (!file.type.startsWith('image/')) continue;
// // //     //   const buffer = Buffer.from(await file.arrayBuffer());
// // //     //   const filename = `${crypto.randomUUID()}-${file.name}`;
// // //     //   await fs.writeFile(`./public/uploads/${filename}`, buffer);
// // //     //   uploadedUrls.push(`/uploads/${filename}`);
// // //     // }

// // //     // Then save to database: title, content, userEmail, imageUrls[]

// // //     return { message: 'Your story has been published! 🌴✨' };
// // //   } catch (err: any) {
// // //     console.error(err);
// // //     return { error: err.message || 'Failed to publish story.' };
// // //   }
// // // }

// // // export default function CreateBlogPost() {
// // //   const [previews, setPreviews] = useState<string[]>([]);
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [state, formAction] = useFormState(createBlogPostAction, {});

// // //   const { data: session } = useSession();
// // //   const userEmail = session?.user?.email || '';

// // //   const {
// // //     register,
// // //     handleSubmit,
// // //     formState: { errors },
// // //     reset,
// // //   } = useForm<PostFormData>({
// // //     resolver: zodResolver(postSchema),
// // //   });

// // //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     const files = Array.from(e.target.files || []);
// // //     if (files.length + previews.length > 15) {
// // //       alert('Maximum 15 images allowed');
// // //       return;
// // //     }
// // //     const newPreviews = files.map((file) => URL.createObjectURL(file));
// // //     setPreviews((prev) => [...prev, ...newPreviews]);
// // //   };

// // //   const removePreview = (index: number) => {
// // //     setPreviews((prev) => {
// // //       URL.revokeObjectURL(prev[index]);
// // //       return prev.filter((_, i) => i !== index);
// // //     });
// // //   };

// // //   // Optional: still use RHF for text fields validation, but submit whole form natively
// // //   const onRHFSubmit: SubmitHandler<PostFormData> = () => {
// // //     // We don't really need this anymore — form uses native action
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-5 sm:px-8 lg:px-12">
// // //       <div className="max-w-4xl mx-auto">
// // //         <div className="bg-white/70 backdrop-blur-xl shadow-2xl shadow-black/8 rounded-3xl overflow-hidden border border-white/40">
// // //           <div className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 px-8 py-12 text-white">
// // //             <h1 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-md">
// // //               Share Your Journey
// // //             </h1>
// // //             <p className="mt-4 text-lg md:text-xl opacity-95 font-light">
// // //               Inspire others with your travel memories 🌏 📸
// // //             </p>
// // //           </div>

// // //           <form action={formAction} className="p-7 md:p-12 space-y-10">
// // //             {/* Email – still read-only */}
// // //             <div>
// // //               <label className="block text-base font-medium text-gray-700 mb-2">Your Email</label>
// // //               <div className="relative">
// // //                 <input
// // //                   type="text"
// // //                   value={userEmail}
// // //                   readOnly
// // //                   className="block w-full rounded-xl border-0 bg-gray-100/80 px-5 py-4 text-gray-700 shadow-inner focus:ring-2 focus:ring-cyan-500/40 transition"
// // //                 />
// // //                 <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">🔒</span>
// // //               </div>
// // //               <input type="hidden" name="userEmail" value={userEmail} />
// // //             </div>

// // //             {/* Title */}
// // //             <div>
// // //               <label className="block text-base font-medium text-gray-800 mb-2.5">Post Title</label>
// // //               <input
// // //                 {...register('title')}
// // //                 name="title"           // important for FormData
// // //                 className="block w-full rounded-xl border border-gray-200 px-5 py-4 text-lg shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition placeholder:text-gray-400"
// // //                 placeholder="Sunset at St. Martin's Island..."
// // //               />
// // //               {errors.title && <p className="mt-2 text-sm text-rose-600">{errors.title.message}</p>}
// // //             </div>

// // //             {/* Content */}
// // //             <div>
// // //               <label className="block text-base font-medium text-gray-800 mb-2.5">Your Travel Story</label>
// // //               <textarea
// // //                 {...register('content')}
// // //                 name="content"
// // //                 rows={12}
// // //                 className="block w-full rounded-xl border border-gray-200 px-5 py-4 text-base shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition resize-y min-h-[180px] placeholder:text-gray-400"
// // //                 placeholder="Describe the smells, sounds, feelings..."
// // //               />
// // //               {errors.content && <p className="mt-2 text-sm text-rose-600">{errors.content.message}</p>}
// // //             </div>

// // //             {/* Images – native input for server action */}
// // //             <div className="space-y-5">
// // //               <label className="block text-base font-medium text-gray-800">
// // //                 Photos (up to 15) — make it visual!
// // //               </label>

// // //               <label
// // //                 htmlFor="dropzone-file"
// // //                 className="group relative flex flex-col items-center justify-center w-full h-56 border-2 border-dashed border-gray-300/70 rounded-2xl bg-gradient-to-br from-slate-50/70 to-white/30 hover:border-cyan-400 hover:bg-cyan-50/30 transition-all duration-300 cursor-pointer overflow-hidden"
// // //               >
// // //                 {/* ... your nice SVG + text ... */}
// // //                 <input
// // //                   id="dropzone-file"
// // //                   name="images"                 // ← crucial
// // //                   type="file"
// // //                   accept="image/*"
// // //                   multiple
// // //                   onChange={handleImageChange}
// // //                   className="hidden"
// // //                 />
// // //               </label>

// // //               {previews.length > 0 && (
// // //                 <div className="space-y-4">
// // //                   <p className="text-sm font-medium text-gray-700">
// // //                     Selected photos ({previews.length}/15)
// // //                   </p>
// // //                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
// // //                     {previews.map((src, idx) => (
// // //                       <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
// // //                         <Image
// // //                           src={src}
// // //                           alt={`Preview ${idx + 1}`}
// // //                           width={300}
// // //                           height={400}
// // //                           className="object-cover w-full aspect-[4/3] sm:aspect-square"
// // //                         />
// // //                         <button
// // //                           type="button"
// // //                           onClick={() => removePreview(idx)}
// // //                           className="absolute top-3 right-3 bg-red-600/90 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
// // //                         >
// // //                           ×
// // //                         </button>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>

// // //             <div className="pt-8">
// // //               <button
// // //                 type="submit"
// // //                 disabled={isSubmitting}
// // //                 className={`w-full py-5 px-8 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 ${
// // //                   isSubmitting
// // //                     ? 'bg-gray-400 cursor-not-allowed'
// // //                     : 'bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white hover:shadow-xl hover:scale-[1.01] active:scale-95'
// // //                 }`}
// // //               >
// // //                 {isSubmitting ? 'Publishing...' : 'Publish Your Story'}
// // //               </button>
// // //             </div>

// // //             {state?.message && (
// // //               <div className="mt-6 p-5 rounded-2xl text-center font-medium border-l-4 bg-emerald-50 text-emerald-800 border-emerald-500">
// // //                 {state.message}
// // //               </div>
// // //             )}
// // //             {state?.error && (
// // //               <div className="mt-6 p-5 rounded-2xl text-center font-medium border-l-4 bg-red-50 text-red-800 border-red-500">
// // //                 {state.error}
// // //               </div>
// // //             )}
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // 'use client';
// // import { useState, useEffect } from 'react';
// // import { useForm, SubmitHandler } from 'react-hook-form';
// // import { zodResolver } from '@hookform/resolvers/zod';
// // import * as z from 'zod';
// // import Image from 'next/image';
// // import { useSession } from "next-auth/react";

// // // ── Validation Schema ────────────────────────────────────────
// // const postSchema = z.object({
// //   title: z.string().min(3, 'Title must be at least 3 characters').max(120),
// //   content: z.string().min(20, 'Content is too short').max(10000),
// // });
// // type PostFormData = z.infer<typeof postSchema>;

// // export default function CreateBlogPost() {
// //   const [images, setImages] = useState<File[]>([]);
// //   const [previews, setPreviews] = useState<string[]>([]);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitMessage, setSubmitMessage] = useState('');
// //   const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null); // for modal

// //   const { data: session } = useSession();
// //   const userEmail = session?.user?.email || '';

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //     reset,
// //   } = useForm<PostFormData>({
// //     resolver: zodResolver(postSchema),
// //   });

// //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const files = Array.from(e.target.files || []);
// //     if (files.length + images.length > 15) {
// //       alert('Maximum 15 images allowed');
// //       return;
// //     }
// //     const newPreviews = files.map((file) => URL.createObjectURL(file));
// //     setImages((prev) => [...prev, ...files]);
// //     setPreviews((prev) => [...prev, ...newPreviews]);
// //   };

// //   const removeImage = (index: number) => {
// //     setImages((prev) => prev.filter((_, i) => i !== index));
// //     setPreviews((prev) => {
// //       URL.revokeObjectURL(prev[index]);
// //       return prev.filter((_, i) => i !== index);
// //     });
// //   };

// //   // Keyboard navigation in modal
// //   useEffect(() => {
// //     const handleKeyDown = (e: KeyboardEvent) => {
// //       if (selectedImageIndex === null) return;

// //       if (e.key === 'ArrowRight' || e.key === ' ') {
// //         e.preventDefault();
// //         setSelectedImageIndex((prev) =>
// //           prev === previews.length - 1 ? 0 : (prev ?? 0) + 1
// //         );
// //       } else if (e.key === 'ArrowLeft') {
// //         e.preventDefault();
// //         setSelectedImageIndex((prev) =>
// //           prev === 0 ? previews.length - 1 : (prev ?? 0) - 1
// //         );
// //       } else if (e.key === 'Escape') {
// //         setSelectedImageIndex(null);
// //       }
// //     };

// //     window.addEventListener('keydown', handleKeyDown);
// //     return () => window.removeEventListener('keydown', handleKeyDown);
// //   }, [selectedImageIndex, previews.length]);

// //   const onSubmit: SubmitHandler<PostFormData> = async (data) => {
// //     if (!userEmail) {
// //       setSubmitMessage('You must be logged in to post a story.');
// //       return;
// //     }
// //     if (images.length === 0) {
// //       setSubmitMessage('Please add at least one photo to your story.');
// //       return;
// //     }
// //     setIsSubmitting(true);
// //     setSubmitMessage('');

// //     try {
// //       const formData = new FormData();
// //       formData.append('title', data.title);
// //       formData.append('content', data.content);
// //       formData.append('userEmail', userEmail);
// //       images.forEach((file) => formData.append('images', file));

// //       const res = await fetch('/api/blog-posts', {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       if (!res.ok) throw new Error((await res.json()).message || 'Failed to publish');

// //       setSubmitMessage('Your story has been published! 🌴✨');
// //       reset();
// //       setImages([]);
// //       setPreviews([]);
// //     } catch (err: any) {
// //       setSubmitMessage(`Something went wrong: ${err.message}`);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-5 sm:px-8 lg:px-12">
// //       <div className="max-w-4xl mx-auto">
// //         <div className="bg-white/70 backdrop-blur-xl shadow-2xl shadow-black/8 rounded-3xl overflow-hidden border border-white/40">
// //           <div className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 px-8 py-12 text-white">
// //             <h1 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-md">
// //               Share Your Journey
// //             </h1>
// //             <p className="mt-4 text-lg md:text-xl opacity-95 font-light">
// //               Inspire others with your travel memories 🌏 📸
// //             </p>
// //           </div>

// //           <form onSubmit={handleSubmit(onSubmit)} className="p-7 md:p-12 space-y-10">
// //             {/* Email - read only */}
// //             <div>
// //               <label className="block text-base font-medium text-gray-700 mb-2">Your Email</label>
// //               <div className="relative">
// //                 <input
// //                   type="text"
// //                   value={userEmail}
// //                   readOnly
// //                   className="block w-full rounded-xl border-0 bg-gray-100/80 px-5 py-4 text-gray-700 shadow-inner focus:ring-2 focus:ring-cyan-500/40 transition"
// //                 />
// //                 <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">🔒</span>
// //               </div>
// //             </div>

// //             {/* Title */}
// //             <div>
// //               <label className="block text-base font-medium text-gray-800 mb-2.5">Post Title</label>
// //               <input
// //                 {...register('title')}
// //                 className="block w-full rounded-xl border border-gray-200 px-5 py-4 text-lg shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition placeholder:text-gray-400"
// //                 placeholder="Sunset at St. Martin's Island..."
// //               />
// //               {errors.title && <p className="mt-2 text-sm text-rose-600">{errors.title.message}</p>}
// //             </div>

// //             {/* Content */}
// //             <div>
// //               <label className="block text-base font-medium text-gray-800 mb-2.5">Your Travel Story</label>
// //               <textarea
// //                 {...register('content')}
// //                 rows={12}
// //                 className="block w-full rounded-xl border border-gray-200 px-5 py-4 text-base shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition resize-y min-h-[180px] placeholder:text-gray-400"
// //                 placeholder="Describe the smells, sounds, feelings... make us feel like we were there."
// //               />
// //               {errors.content && <p className="mt-2 text-sm text-rose-600">{errors.content.message}</p>}
// //             </div>

// //             {/* Images - Facebook-style preview + modal viewer */}
// //             <div className="space-y-5">
// //               <label className="block text-base font-medium text-gray-800">
// //                 Photos (up to 15) — make it visual!
// //               </label>

// //               {/* Dropzone */}
// //               <label
// //                 htmlFor="dropzone-file"
// //                 className="group relative flex flex-col items-center justify-center w-full h-56 border-2 border-dashed border-gray-300/70 rounded-2xl bg-gradient-to-br from-slate-50/70 to-white/30 hover:border-cyan-400 hover:bg-cyan-50/30 transition-all duration-300 cursor-pointer overflow-hidden"
// //               >
// //                 <div className="flex flex-col items-center justify-center py-10 px-6 text-center transition">
// //                   <svg
// //                     className="w-14 h-14 mb-5 text-gray-400 group-hover:text-cyan-500 transition-colors"
// //                     fill="none"
// //                     stroke="currentColor"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={1.8}
// //                       d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
// //                     />
// //                   </svg>
// //                   <p className="text-lg font-medium text-gray-600 group-hover:text-cyan-700">
// //                     Click or drag photos here
// //                   </p>
// //                   <p className="mt-2 text-sm text-gray-500">PNG · JPG · WEBP (max 15 files)</p>
// //                 </div>
// //                 <input
// //                   id="dropzone-file"
// //                   type="file"
// //                   accept="image/*"
// //                   multiple
// //                   onChange={handleImageChange}
// //                   className="hidden"
// //                 />
// //               </label>

// //               {/* Facebook-like grid preview */}
// //               {previews.length > 0 && (
// //                 <div className="space-y-4">
// //                   <p className="text-sm font-medium text-gray-700">
// //                     Selected photos ({previews.length}/15)
// //                   </p>

// //                   <div
// //                     className={`grid gap-3 ${
// //                       previews.length === 1
// //                         ? 'grid-cols-1'
// //                         : previews.length === 2
// //                         ? 'grid-cols-1 sm:grid-cols-2'
// //                         : previews.length === 3
// //                         ? 'grid-cols-2 sm:grid-cols-3'
// //                         : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
// //                     }`}
// //                   >
// //                     {previews.map((src, idx) => (
// //                       <div
// //                         key={idx}
// //                         onClick={() => setSelectedImageIndex(idx)}
// //                         className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-2xl transition-all duration-300 bg-white aspect-[4/3] sm:aspect-square"
// //                       >
// //                         <Image
// //                           src={src}
// //                           alt={`Preview ${idx + 1}`}
// //                           fill
// //                           className="object-cover transition-transform duration-500 group-hover:scale-105"
// //                         />
// //                         <button
// //                           type="button"
// //                           onClick={(e) => {
// //                             e.stopPropagation();
// //                             removeImage(idx);
// //                           }}
// //                           className="absolute top-2 right-2 bg-red-600/90 hover:bg-red-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
// //                         >
// //                           ×
// //                         </button>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Submit */}
// //             <div className="pt-8">
// //               <button
// //                 type="submit"
// //                 disabled={isSubmitting}
// //                 className={`
// //                   w-full py-5 px-8 rounded-2xl font-semibold text-lg shadow-lg
// //                   transition-all duration-300
// //                   ${isSubmitting
// //                     ? 'bg-gray-400 cursor-not-allowed'
// //                     : 'bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white hover:shadow-xl hover:scale-[1.01] active:scale-95'
// //                   }
// //                 `}
// //               >
// //                 {isSubmitting ? 'Publishing...' : 'Publish Your Story'}
// //               </button>
// //             </div>

// //             {submitMessage && (
// //               <div
// //                 className={`mt-6 p-5 rounded-2xl text-center font-medium border-l-4 ${
// //                   submitMessage.includes('Error') || submitMessage.includes('went wrong')
// //                     ? 'bg-red-50 text-red-800 border-red-500'
// //                     : 'bg-emerald-50 text-emerald-800 border-emerald-500'
// //                 }`}
// //               >
// //                 {submitMessage}
// //               </div>
// //             )}
// //           </form>
// //         </div>
// //       </div>

// //       {/* ── Modal Viewer (Facebook-style one-by-one browsing) ── */}
// //       {selectedImageIndex !== null && (
// //         <div
// //           className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
// //           onClick={() => setSelectedImageIndex(null)}
// //         >
// //           <button
// //             className="absolute top-6 right-6 text-white text-5xl font-light hover:text-gray-300 z-10"
// //             onClick={() => setSelectedImageIndex(null)}
// //           >
// //             ×
// //           </button>

// //           {/* Main image */}
// //           <div className="relative max-w-5xl max-h-[90vh] w-full px-4" onClick={(e) => e.stopPropagation()}>
// //             <Image
// //               src={previews[selectedImageIndex]}
// //               alt={`Full view ${selectedImageIndex + 1}`}
// //               width={1200}
// //               height={900}
// //               className="object-contain w-full h-auto rounded-xl"
// //               priority
// //             />

// //             {/* Counter */}
// //             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
// //               {selectedImageIndex + 1} / {previews.length}
// //             </div>

// //             {/* Navigation arrows */}
// //             {previews.length > 1 && (
// //               <>
// //                 <button
// //                   className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-6xl font-light hover:text-cyan-400 transition-colors"
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     setSelectedImageIndex((prev) => (prev === 0 ? previews.length - 1 : prev - 1));
// //                   }}
// //                 >
// //                   ‹
// //                 </button>
// //                 <button
// //                   className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-6xl font-light hover:text-cyan-400 transition-colors"
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     setSelectedImageIndex((prev) => (prev === previews.length - 1 ? 0 : prev + 1));
// //                   }}
// //                 >
// //                   ›
// //                 </button>
// //               </>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// 'use client';
// import { useState } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import Image from 'next/image';
// import { useSession } from "next-auth/react";

// // ── Lightbox imports ────────────────────────────────────────
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

// // ── Validation Schema ────────────────────────────────────────
// const postSchema = z.object({
//   title: z.string().min(3, 'Title must be at least 3 characters').max(120),
//   content: z.string().min(20, 'Content is too short').max(10000),
// });

// type PostFormData = z.infer<typeof postSchema>;

// export default function CreateBlogPost() {
//   const [images, setImages] = useState<File[]>([]);
//   const [previews, setPreviews] = useState<string[]>([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState('');

//   // Lightbox state
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const { data: session } = useSession();
//   const userEmail = session?.user?.email || '';

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<PostFormData>({
//     resolver: zodResolver(postSchema),
//   });

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
//     if (files.length + images.length > 15) {
//       alert('Maximum 15 images allowed');
//       return;
//     }

//     const newPreviews = files.map((file) => URL.createObjectURL(file));
//     setImages((prev) => [...prev, ...files]);
//     setPreviews((prev) => [...prev, ...newPreviews]);
//   };

//   const removeImage = (index: number) => {
//     setImages((prev) => prev.filter((_, i) => i !== index));
//     setPreviews((prev) => {
//       URL.revokeObjectURL(prev[index]);
//       return prev.filter((_, i) => i !== index);
//     });
//   };

//   const openLightbox = (index: number) => {
//     setCurrentIndex(index);
//     setLightboxOpen(true);
//   };

//   const onSubmit: SubmitHandler<PostFormData> = async (data) => {
//     if (!userEmail) {
//       setSubmitMessage('You must be logged in to post a story.');
//       return;
//     }
//     if (images.length === 0) {
//       setSubmitMessage('Please add at least one photo to your story.');
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitMessage('');

//     try {
//       const formData = new FormData();
//       formData.append('title', data.title);
//       formData.append('content', data.content);
//       formData.append('userEmail', userEmail);
//       images.forEach((file) => formData.append('images', file));

//       const res = await fetch('/api/blog-posts', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!res.ok) throw new Error((await res.json()).message || 'Failed to publish');

//       setSubmitMessage('Your story has been published! 🌴✨');
//       reset();
//       setImages([]);
//       setPreviews([]);
//     } catch (err: any) {
//       setSubmitMessage(`Something went wrong: ${err.message}`);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-5 sm:px-8 lg:px-12">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white/70 backdrop-blur-xl shadow-2xl shadow-black/8 rounded-3xl overflow-hidden border border-white/40">
//           <div className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 px-8 py-12 text-white">
//             <h1 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-md">
//               Share Your Journey
//             </h1>
//             <p className="mt-4 text-lg md:text-xl opacity-95 font-light">
//               Inspire others with your travel memories 🌏 📸
//             </p>
//           </div>

//           <form onSubmit={handleSubmit(onSubmit)} className="p-7 md:p-12 space-y-10">
//             {/* Email - read only */}
//             <div>
//               <label className="block text-base font-medium text-gray-700 mb-2">
//                 Your Email
//               </label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={userEmail}
//                   readOnly
//                   className="block w-full rounded-xl border-0 bg-gray-100/80 px-5 py-4 text-gray-700 shadow-inner focus:ring-2 focus:ring-cyan-500/40 transition"
//                 />
//                 <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
//                   🔒
//                 </span>
//               </div>
//             </div>

//             {/* Title */}
//             <div>
//               <label className="block text-base font-medium text-gray-800 mb-2.5">
//                 Post Title
//               </label>
//               <input
//                 {...register('title')}
//                 className="block w-full rounded-xl border border-gray-200 px-5 py-4 text-lg shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition placeholder:text-gray-400"
//                 placeholder="Sunset at St. Martin's Island..."
//               />
//               {errors.title && (
//                 <p className="mt-2 text-sm text-rose-600">{errors.title.message}</p>
//               )}
//             </div>

//             {/* Content */}
//             <div>
//               <label className="block text-base font-medium text-gray-800 mb-2.5">
//                 Your Travel Story
//               </label>
//               <textarea
//                 {...register('content')}
//                 rows={12}
//                 className="block w-full rounded-xl border border-gray-200 px-5 py-4 text-base shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition resize-y min-h-[180px] placeholder:text-gray-400"
//                 placeholder="Describe the smells, sounds, feelings... make us feel like we were there."
//               />
//               {errors.content && (
//                 <p className="mt-2 text-sm text-rose-600">{errors.content.message}</p>
//               )}
//             </div>

//             {/* Images - Facebook-like preview + lightbox */}
//             <div className="space-y-5">
//               <label className="block text-base font-medium text-gray-800">
//                 Photos (up to 15) — make it visual!
//               </label>

//               <label
//                 htmlFor="dropzone-file"
//                 className="group relative flex flex-col items-center justify-center w-full h-56 border-2 border-dashed border-gray-300/70 rounded-2xl bg-gradient-to-br from-slate-50/70 to-white/30 hover:border-cyan-400 hover:bg-cyan-50/30 transition-all duration-300 cursor-pointer overflow-hidden"
//               >
//                 <div className="flex flex-col items-center justify-center py-10 px-6 text-center transition">
//                   <svg
//                     className="w-14 h-14 mb-5 text-gray-400 group-hover:text-cyan-500 transition-colors"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={1.8}
//                       d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
//                     />
//                   </svg>
//                   <p className="text-lg font-medium text-gray-600 group-hover:text-cyan-700">
//                     Click or drag photos here
//                   </p>
//                   <p className="mt-2 text-sm text-gray-500">
//                     PNG · JPG · WEBP (max 15 files)
//                   </p>
//                 </div>
//                 <input
//                   id="dropzone-file"
//                   type="file"
//                   accept="image/*"
//                   multiple
//                   onChange={handleImageChange}
//                   className="hidden"
//                 />
//               </label>

//               {previews.length > 0 && (
//                 <div className="space-y-4">
//                   <p className="text-sm font-medium text-gray-700">
//                     Selected photos ({previews.length}/15)
//                   </p>

//                   {/* Facebook-style grid gallery */}
//                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
//                     {previews.map((src, idx) => (
//                       <div
//                         key={idx}
//                         className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white aspect-[4/3] sm:aspect-square"
//                         onClick={() => openLightbox(idx)}
//                       >
//                         <Image
//                           src={src}
//                           alt={`Preview ${idx + 1}`}
//                           fill
//                           className="object-cover hover:scale-105 transition-transform duration-500"
//                         />
//                         <button
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation(); // prevent opening lightbox when removing
//                             removeImage(idx);
//                           }}
//                           className="absolute top-2 right-2 bg-red-600/90 hover:bg-red-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
//                         >
//                           ×
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Submit */}
//             <div className="pt-8">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`
//                   w-full py-5 px-8 rounded-2xl font-semibold text-lg shadow-lg
//                   transition-all duration-300
//                   ${isSubmitting
//                     ? 'bg-gray-400 cursor-not-allowed'
//                     : 'bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white hover:shadow-xl hover:scale-[1.01] active:scale-95'
//                   }
//                 `}
//               >
//                 {isSubmitting ? 'Publishing...' : 'Publish Your Story'}
//               </button>
//             </div>

//             {submitMessage && (
//               <div
//                 className={`mt-6 p-5 rounded-2xl text-center font-medium border-l-4 ${
//                   submitMessage.includes('Error') || submitMessage.includes('went wrong')
//                     ? 'bg-red-50 text-red-800 border-red-500'
//                     : 'bg-emerald-50 text-emerald-800 border-emerald-500'
//                 }`}
//               >
//                 {submitMessage}
//               </div>
//             )}
//           </form>
//         </div>
//       </div>

//       {/* ── Lightbox (Facebook-like one-by-one viewer with thumbnails) ── */}
//       <Lightbox
//         open={lightboxOpen}
//         close={() => setLightboxOpen(false)}
//         slides={previews.map((src) => ({ src }))}
//         index={currentIndex}
//         plugins={[Thumbnails]}
//         thumbnails={{
//           position: "bottom",
//           width: 120,
//           height: 80,
//           gap: 12,
//           padding: 8,
//           border: 2,
//           borderRadius: 6,
//           imageFit: "cover",
//         }}
//       />
//     </div>
//   );
// }



'use client';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// ── Validation Schema ────────────────────────────────
const postSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(120),
  content: z.string().min(20, 'Content is too short').max(10000),
});
type PostFormData = z.infer<typeof postSchema>;

export default function CreateBlogPost() {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { data: session } = useSession();
  const userEmail = session?.user?.email || '';

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + images.length > 15) {
      alert('Maximum 15 images allowed');
      return;
    }
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...files]);
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => {
      URL.revokeObjectURL(prev[index]);
      return prev.filter((_, i) => i !== index);
    });
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const onSubmit: SubmitHandler<PostFormData> = async (data) => {
    if (!userEmail) {
      setSubmitMessage('You must be logged in to post a story.');
      return;
    }
    if (images.length === 0) {
      setSubmitMessage('Please add at least one photo to your story.');
      return;
    }
    setIsSubmitting(true);
    setSubmitMessage('');
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content);
      formData.append('userEmail', userEmail);
      images.forEach((file) => formData.append('images', file));
      const res = await fetch('/api/blog-posts', { method: 'POST', body: formData });
      if (!res.ok) throw new Error((await res.json()).message || 'Failed to publish');
      setSubmitMessage('Your story has been published! 🌴✨');
      reset();
      setImages([]);
      setPreviews([]);
    } catch (err: any) {
      setSubmitMessage(`Something went wrong: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-5 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-xl shadow-2xl shadow-black/8 rounded-3xl overflow-hidden border border-white/40">
          <div className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 px-8 py-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-md">
              Share Your Journey
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-95 font-light">
              Inspire others with your travel memories 🌏 📸
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-7 md:p-12 space-y-10">
            {/* Email, Title, Content Fields */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input type="text" value={userEmail} readOnly className="block w-full rounded-xl border-0 bg-gray-100/80 px-5 py-4 text-gray-700 shadow-inner focus:ring-2 focus:ring-cyan-500/40 transition" />
            </div>

            <div>
              <label className="block text-base font-medium text-gray-800 mb-2.5">Post Title</label>
              <input {...register('title')} className="block w-full rounded-xl border border-gray-200 px-5 py-4 text-lg shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition placeholder:text-gray-400" placeholder="Sunset at St. Martin's Island..." />
              {errors.title && <p className="mt-2 text-sm text-rose-600">{errors.title.message}</p>}
            </div>

            <div>
              <label className="block text-base font-medium text-gray-800 mb-2.5">Your Travel Story</label>
              <textarea {...register('content')} rows={12} className="block w-full rounded-xl border border-gray-200 px-5 py-4 text-base shadow-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition resize-y min-h-[180px] placeholder:text-gray-400" placeholder="Describe the smells, sounds, feelings..." />
              {errors.content && <p className="mt-2 text-sm text-rose-600">{errors.content.message}</p>}
            </div>

            {/* Image Upload */}
            <div className="space-y-5">
              <label className="block text-base font-medium text-gray-800">Photos (up to 15)</label>
              <label htmlFor="dropzone-file" className="group relative flex flex-col items-center justify-center w-full h-56 border-2 border-dashed border-gray-300/70 rounded-2xl bg-gradient-to-br from-slate-50/70 to-white/30 hover:border-cyan-400 hover:bg-cyan-50/30 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="flex flex-col items-center justify-center py-10 px-6 text-center transition">
                  <p className="text-lg font-medium text-gray-600 group-hover:text-cyan-700">Click or drag photos here</p>
                  <p className="mt-2 text-sm text-gray-500">PNG · JPG · WEBP (max 15 files)</p>
                </div>
                <input id="dropzone-file" type="file" accept="image/*" multiple onChange={handleImageChange} className="hidden" />
              </label>

              {/* Gallery Previews */}
              {previews.length > 0 && (
                <>
                  <p className="text-sm font-medium text-gray-700">Selected photos ({previews.length}/15)</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {previews.map((src, idx) => (
                      <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white cursor-pointer" onClick={() => openLightbox(idx)}>
                        <Image src={src} alt={`Preview ${idx + 1}`} width={300} height={400} className="object-cover w-full aspect-[4/3] sm:aspect-square" />
                        <button type="button" onClick={(e) => { e.stopPropagation(); removeImage(idx); }} className="absolute top-3 right-3 bg-red-600/90 hover:bg-red-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">×</button>
                      </div>
                    ))}
                  </div>

                  {/* Lightbox */}
                  <Lightbox
                    open={lightboxOpen}
                    close={() => setLightboxOpen(false)}
                    slides={previews.map((src) => ({ src }))}
                    index={currentImageIndex}
                    plugins={[Thumbnails]}
                    thumbnails={{ position: 'bottom', width: 140, height: 100, gap: 12, padding: 8, border: 2, borderRadius: 8, imageFit: 'cover', vignette: false }}
                  />
                </>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button type="submit" disabled={isSubmitting} className={`w-full py-5 px-8 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white hover:shadow-xl hover:scale-[1.01] active:scale-95'}`}>
                {isSubmitting ? 'Publishing...' : 'Publish Your Story'}
              </button>
            </div>

            {submitMessage && (
              <div className={`mt-6 p-5 rounded-2xl text-center font-medium border-l-4 ${submitMessage.includes('went wrong') ? 'bg-red-50 text-red-800 border-red-500' : 'bg-emerald-50 text-emerald-800 border-emerald-500'}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}