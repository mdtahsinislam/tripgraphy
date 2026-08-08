
//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\create-shop-data\page.tsx

//

//create-shop-data
// import React from 'react'

// function page() {
//   return (
//     <div>page</div>
//   )
// }

// export default page


// "use client";

// import { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function CreateShopDataPage() {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     price: "",
//     image: "",
//     alt: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/products", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         toast.success("Product added successfully!");
//         setFormData({ title: "", price: "", image: "", alt: "" });
//       } else {
//         toast.error(data.message || "Failed to add product");
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="px-4 lg:px-6 py-8 max-w-2xl mx-auto">
//       <ToastContainer position="top-right" />

//       <h1 className="text-3xl font-bold mb-2">Create Shop Product</h1>
//       <p className="text-muted-foreground mb-8">
//         Add a new product. It will show on the Shop page.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white border rounded-2xl p-6 shadow-sm space-y-5"
//       >
//         <div>
//           <label className="block text-sm font-medium mb-1">Product Title</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="e.g. Explorer Backpack 40L"
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
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
//             placeholder="e.g. $89"
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">
//             Image URL (or path)
//           </label>
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             placeholder="/images/your-product.jpg"
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">
//             Alt Text (optional)
//           </label>
//           <input
//             type="text"
//             name="alt"
//             value={formData.alt}
//             onChange={handleChange}
//             placeholder="Short description of image"
//             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 rounded-lg font-semibold text-white transition ${
//             loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-amber-600 hover:bg-amber-700"
//           }`}
//         >
//           {loading ? "Adding..." : "Add Product"}
//         </button>
//       </form>
//     </div>
//   );
// }

//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\create-shop-data\page.tsx


"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateShopDataPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    alt: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API || "a8d900dcb0d35b0c296c0238662ced9f"}`,
        {
          method: "POST",
          body: imgData,
        }
      );

      const imgJson = await imgRes.json();

      if (!imgJson.success) {
        throw new Error("Image upload failed");
      }

      const imageUrl = imgJson.data.url;

      // ২. প্রোডাক্ট সেভ
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          image: imageUrl,
          alt: formData.alt || formData.title,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Product added successfully!");
        setFormData({ title: "", price: "", alt: "" });
        setImageFile(null);
        const fileInput = document.getElementById("product-image") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        toast.error(data.message || "Failed to add product");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 lg:px-6 py-8 max-w-2xl mx-auto">
      <ToastContainer position="top-right" />

      <h1 className="text-3xl font-bold mb-2">Create Shop Product</h1>
      <p className="text-muted-foreground mb-8">
        Add a new product. It will show on the Shop page.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-2xl p-6 shadow-sm space-y-5"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Product Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Explorer Backpack 40L"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
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
            placeholder="e.g. $89"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Product Image</label>
          <input
            id="product-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-amber-50 file:text-amber-700"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Alt Text (optional)
          </label>
          <input
            type="text"
            name="alt"
            value={formData.alt}
            onChange={handleChange}
            placeholder="Short description of image"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-amber-600 hover:bg-amber-700"
          }`}
        >
          {loading ? "Uploading & Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}