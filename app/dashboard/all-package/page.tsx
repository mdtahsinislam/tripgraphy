

// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\all-package\page.tsx
// // import React from 'react'

// // function page() {
// //   return (
// //     <div>page</div>
// //   )
// // }

// // export default page

// // //আমি চাই all user এর  shop data গুলো package এর নাম email id সহ card আকারে show হবে!!






// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// type PurchaseType = {
//   _id: string;
//   title: string;
//   price?: string | number;
//   image?: string;
//   email: string;
//   createdAt?: string;
// };

// export default function AllPackagePage() {
//   const [purchases, setPurchases] = useState<PurchaseType[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPurchases = async () => {
//       try {
//         const res = await fetch("/api/purchases");
//         const data = await res.json();
//         setPurchases(data.purchases || []);
//       } catch (error) {
//         console.error("Failed to load packages:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPurchases();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-muted-foreground">Loading packages...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 lg:px-6 py-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold tracking-tight">All Packages</h1>
//         <p className="text-muted-foreground mt-1">
//           All booked packages by users — Total: {purchases.length}
//         </p>
//       </div>

//       {purchases.length === 0 ? (
//         <div className="text-center py-16 bg-gray-50 rounded-xl border">
//           <p className="text-gray-500 text-lg">No packages booked yet</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//           {purchases.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
//             >
//               {item.image ? (
//                 <div className="relative h-44 bg-gray-100">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               ) : (
//                 <div className="h-44 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
//                   <span className="text-4xl">✈️</span>
//                 </div>
//               )}

//               <div className="p-5">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
//                   {item.title}
//                 </h3>

//                 <div className="space-y-2 text-sm">
//                   <p className="text-gray-600">
//                     <span className="font-medium text-gray-800">Email:</span>{" "}
//                     {item.email}
//                   </p>

//                   {item.price && (
//                     <p className="text-blue-600 font-bold text-lg">
//                       ${item.price}
//                     </p>
//                   )}

//                   {item.createdAt && (
//                     <p className="text-gray-400 text-xs">
//                       Booked: {new Date(item.createdAt).toLocaleDateString()}
//                     </p>
//                   )}
//                 </div>

//                 <div className="mt-4">
//                   <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
//                     Booked
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type PurchaseType = {
  _id: string;
  title: string;
  price?: string | number;
  image?: string;
  img?: string;
  email: string;
  createdAt?: string;
};

type PackageType = {
  _id: string;
  title: string;
  img?: string;
  price?: string;
};

export default function AllPackagePage() {
  const [purchases, setPurchases] = useState<PurchaseType[]>([]);
  const [packages, setPackages] = useState<PackageType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [purchasesRes, packagesRes] = await Promise.all([
          fetch("/api/purchases"),
          fetch("/api/packages"),
        ]);

        const purchasesData = await purchasesRes.json();
        const packagesData = await packagesRes.json();

        setPurchases(purchasesData.purchases || []);
        setPackages(packagesData.packages || []);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // package title দিয়ে image খুঁজে বের করা
  const getPackageImage = (title: string, purchaseImage?: string) => {
    if (purchaseImage) return purchaseImage;

    const matched = packages.find(
      (pkg) => pkg.title?.toLowerCase() === title?.toLowerCase()
    );
    return matched?.img || "";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">Loading packages...</p>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">All Packages</h1>
        <p className="text-muted-foreground mt-1">
          All booked packages by users — Total: {purchases.length}
        </p>
      </div>

      {purchases.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl border">
          <p className="text-gray-500 text-lg">No packages booked yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {purchases.map((item) => {
            const imageUrl = getPackageImage(item.title, item.image || item.img);

            return (
              <div
                key={item._id}
                className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                {imageUrl ? (
                  <div className="relative h-44 bg-gray-100">
                    <Image
                      src={imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-44 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                    <span className="text-4xl">✈️</span>
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-800">Email:</span>{" "}
                      {item.email}
                    </p>

                    {item.price && (
                      <p className="text-blue-600 font-bold text-lg">
                        {String(item.price).startsWith("$")
                          ? item.price
                          : `$${item.price}`}
                      </p>
                    )}

                    {item.createdAt && (
                      <p className="text-gray-400 text-xs">
                        Booked: {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>

                  <div className="mt-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Booked
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}