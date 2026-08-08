// // export default function BookingsPage() {
// //   return (
// //     <div className="px-4 lg:px-6 py-6">
// //       <h1 className="text-2xl font-bold mb-2">Bookings</h1>
// //       <p className="text-muted-foreground">All bookings will be shown here.</p>
// //     </div>
// //   )
// // }

// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\create-package\page.tsx
// // import React from 'react'

// // function page() {
// //   return (
// //     <div>page</div>
// //   )
// // }

// // export default page


// // "use client";

// // import { useState } from "react";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // export default function CreatePackagePage() {
// //   const [loading, setLoading] = useState(false);
// //   const [formData, setFormData] = useState({
// //     title: "",
// //     desc: "",
// //     price: "",
// //     img: "",
// //   });

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// //   ) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       const res = await fetch("/api/packages", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       });

// //       const data = await res.json();

// //       if (res.ok) {
// //         toast.success("Package added successfully!");
// //         setFormData({ title: "", desc: "", price: "", img: "" });
// //       } else {
// //         toast.error(data.message || "Failed to add package");
// //       }
// //     } catch (error) {
// //       toast.error("Something went wrong");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="px-4 lg:px-6 py-8 max-w-2xl mx-auto">
// //       <ToastContainer position="top-right" />

// //       <h1 className="text-3xl font-bold mb-2">Create Package</h1>
// //       <p className="text-muted-foreground mb-8">
// //         Add a new tour package. It will show on the Packages page.
// //       </p>

// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white border rounded-2xl p-6 shadow-sm space-y-5"
// //       >
// //         <div>
// //           <label className="block text-sm font-medium mb-1">Package Title</label>
// //           <input
// //             type="text"
// //             name="title"
// //             value={formData.title}
// //             onChange={handleChange}
// //             placeholder="e.g. Dubai Tour Packages"
// //             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// //             required
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium mb-1">Description</label>
// //           <textarea
// //             name="desc"
// //             value={formData.desc}
// //             onChange={handleChange}
// //             placeholder="Write package description..."
// //             rows={4}
// //             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
// //             required
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium mb-1">Price</label>
// //           <input
// //             type="text"
// //             name="price"
// //             value={formData.price}
// //             onChange={handleChange}
// //             placeholder="e.g. $250"
// //             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// //             required
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium mb-1">
// //             Image URL (or path)
// //           </label>
// //           <input
// //             type="text"
// //             name="img"
// //             value={formData.img}
// //             onChange={handleChange}
// //             placeholder="/images/your-image.jpg"
// //             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
// //             required
// //           />
// //         </div>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className={`w-full py-3 rounded-lg font-semibold text-white transition ${
// //             loading
// //               ? "bg-gray-400 cursor-not-allowed"
// //               : "bg-blue-600 hover:bg-blue-700"
// //           }`}
// //         >
// //           {loading ? "Adding..." : "Add Package"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }


// //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\create-package\page.tsx

// "use client";

// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function CreatePackagePage() {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     desc: "",
//     price: "",
//   });
//   const [imageFile, setImageFile] = useState<File | null>(null);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setImageFile(e.target.files[0]);
//     }
//   };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();

//   //   if (!imageFile) {
//   //     toast.error("Please select an image");
//   //     return;
//   //   }

//   //   setLoading(true);

//   //   try {
//   //     // ১. আগে ইমেজ ImgBB তে আপলোড
//   //     const imgData = new FormData();
//   //     imgData.append("image", imageFile);

//   //     const imgRes = await fetch(
//   //       `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API || "a8d900dcb0d35b0c296c0238662ced9f"}`,
//   //       {
//   //         method: "POST",
//   //         body: imgData,
//   //       }
//   //     );

//   //     const imgJson = await imgRes.json();

//   //     if (!imgJson.success) {
//   //       throw new Error("Image upload failed");
//   //     }

//   //     const imageUrl = imgJson.data.url;

//   //     // ২. তারপর প্যাকেজ সেভ
//   //     const res = await fetch("/api/packages", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({
//   //         ...formData,
//   //         img: imageUrl,
//   //       }),
//   //     });

//   //     const data = await res.json();

//   //     if (res.ok) {
//   //       toast.success("Package added successfully!");
//   //       setFormData({ title: "", desc: "", price: "" });
//   //       setImageFile(null);
//   //       // file input রিসেট
//   //       const fileInput = document.getElementById("package-image") as HTMLInputElement;
//   //       if (fileInput) fileInput.value = "";
//   //     } else {
//   //       toast.error(data.message || "Failed to add package");
//   //     }
//   //   } catch (error) {
//   //     console.error(error);
//   //     toast.error("Something went wrong");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };


// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (!imageFile) {
//     toast.error("Please select an image");
//     return;
//   }

//   setLoading(true);

//   try {
//     // ১. ইমেজ ImgBB তে আপলোড
//     const imgData = new FormData();
//     imgData.append("image", imageFile);

//     const imgRes = await fetch(
//       `https://api.imgbb.com/1/upload?key=a8d900dcb0d35b0c296c0238662ced9f`,
//       {
//         method: "POST",
//         body: imgData,
//       }
//     );

//     const imgJson = await imgRes.json();
//     console.log("ImgBB Response:", imgJson); // ডিবাগের জন্য

//     if (!imgJson.success) {
//       toast.error("Image upload failed: " + (imgJson.error?.message || "Unknown error"));
//       setLoading(false);
//       return;
//     }

//     const imageUrl = imgJson.data.url;

//     // প্রাইসে $ না থাকলে যোগ করা
//     let finalPrice = formData.price.trim();
//     if (!finalPrice.startsWith("$")) {
//       finalPrice = "$" + finalPrice;
//     }

//     // ২. প্যাকেজ সেভ
//     const res = await fetch("/api/packages", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         title: formData.title,
//         desc: formData.desc,
//         price: finalPrice,
//         img: imageUrl,
//       }),
//     });

//     const data = await res.json();
//     console.log("API Response:", data);

//     if (res.ok) {
//       toast.success("Package added successfully!");
//       setFormData({ title: "", desc: "", price: "" });
//       setImageFile(null);
//       const fileInput = document.getElementById("package-image") as HTMLInputElement;
//       if (fileInput) fileInput.value = "";
//     } else {
//       toast.error(data.message || data.error || "Failed to add package");
//     }
//   } catch (error: any) {
//     console.error(error);
//     toast.error(error.message || "Something went wrong");
//   } finally {
//     setLoading(false);
//   }
// };


//   return (
//     <div className="px-4 lg:px-6 py-8 max-w-2xl mx-auto">
//       <ToastContainer position="top-right" />

//       <h1 className="text-3xl font-bold mb-2">Create Package</h1>
//       <p className="text-muted-foreground mb-8">
//         Add a new tour package. It will show on the Packages page.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white border rounded-2xl p-6 shadow-sm space-y-5"
//       >
//         <div>
//           <label className="block text-sm font-medium mb-1">Package Title</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="e.g. Dubai Tour Packages"
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Description</label>
//           <textarea
//             name="desc"
//             value={formData.desc}
//             onChange={handleChange}
//             placeholder="Write package description..."
//             rows={4}
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Price</label>
//           <input
//             type="text"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             placeholder="e.g. $250"
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Package Image</label>
//           <input
//             id="package-image"
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="w-full px-3 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 rounded-lg font-semibold text-white transition ${
//             loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Uploading & Adding..." : "Add Package"}
//         </button>
//       </form>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreatePackagePage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    price: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) {
      toast.error("Please select an image");
      return;
    }

    setLoading(true);

    try {
      // ১. ইমেজ ImgBB তে আপলোড
      const imgData = new FormData();
      imgData.append("image", imageFile);

      const imgRes = await fetch(
        `https://api.imgbb.com/1/upload?key=a8d900dcb0d35b0c296c0238662ced9f`,
        {
          method: "POST",
          body: imgData,
        }
      );

      const imgJson = await imgRes.json();
      console.log("ImgBB Response:", imgJson);

      if (!imgJson.success) {
        toast.error(
          "Image upload failed: " + (imgJson.error?.message || "Unknown error")
        );
        setLoading(false);
        return;
      }

      const imageUrl = imgJson.data.url;

      // প্রাইসে $ না থাকলে যোগ করা
      let finalPrice = formData.price.trim();
      if (!finalPrice.startsWith("$")) {
        finalPrice = "$" + finalPrice;
      }

      // ২. প্যাকেজ সেভ
      const res = await fetch("/api/packages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.title,
          desc: formData.desc,
          price: finalPrice,
          img: imageUrl,
        }),
      });

      // JSON পার্স করার আগে চেক
      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        console.error("Invalid JSON response:", text);
        toast.error("Server error. Check MongoDB connection.");
        setLoading(false);
        return;
      }

      console.log("API Response:", data);

      if (res.ok) {
        toast.success("Package added successfully!");
        setFormData({ title: "", desc: "", price: "" });
        setImageFile(null);
        const fileInput = document.getElementById(
          "package-image"
        ) as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        toast.error(data.message || data.error || "Failed to add package");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 lg:px-6 py-8 max-w-2xl mx-auto">
      <ToastContainer position="top-right" />

      <h1 className="text-3xl font-bold mb-2">Create Package</h1>
      <p className="text-muted-foreground mb-8">
        Add a new tour package. It will show on the Packages page.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-2xl p-6 shadow-sm space-y-5"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Package Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Dubai Tour Packages"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Write package description..."
            rows={4}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="e.g. $250"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Package Image</label>
          <input
            id="package-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Uploading & Adding..." : "Add Package"}
        </button>
      </form>
    </div>
  );
}