


// // ////আমি চাই all user এর  shop data গুলো package এর নাম email id সহ card আকারে show হবে!!
// // // import React from 'react'

// // // function page() {
// // //   return (
// // //     <div>page</div>
// // //   )
// // // }

// // // export default page



// // "use client";

// // import { useEffect, useState } from "react";
// // import Image from "next/image";

// // type PurchaseType = {
// //   _id: string;
// //   title: string;
// //   price?: string | number;
// //   image?: string;
// //   img?: string;
// //   email: string;
// //   createdAt?: string;
// // };

// // type ProductType = {
// //   _id: string;
// //   title: string;
// //   image?: string;
// //   price?: string;
// // };

// // export default function AllShopDataPage() {
// //   const [purchases, setPurchases] = useState<PurchaseType[]>([]);
// //   const [products, setProducts] = useState<ProductType[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const [purchasesRes, productsRes] = await Promise.all([
// //           fetch("/api/purchases"),
// //           fetch("/api/products"),
// //         ]);

// //         const purchasesData = await purchasesRes.json();
// //         const productsData = await productsRes.json();

// //         setPurchases(purchasesData.purchases || []);
// //         setProducts(productsData.products || []);
// //       } catch (error) {
// //         console.error("Failed to load data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   // product title দিয়ে image খুঁজে বের করা
// //   const getProductImage = (title: string, purchaseImage?: string) => {
// //     if (purchaseImage) return purchaseImage;

// //     const matched = products.find(
// //       (p) => p.title?.toLowerCase() === title?.toLowerCase()
// //     );
// //     return matched?.image || "";
// //   };

// //   if (loading) {
// //     return (
// //       <div className="flex items-center justify-center min-h-[60vh]">
// //         <p className="text-muted-foreground">Loading shop data...</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="px-4 lg:px-6 py-8">
// //       <div className="mb-8">
// //         <h1 className="text-3xl font-bold tracking-tight">All Shop Data</h1>
// //         <p className="text-muted-foreground mt-1">
// //           All products purchased by users — Total: {purchases.length}
// //         </p>
// //       </div>

// //       {purchases.length === 0 ? (
// //         <div className="text-center py-16 bg-gray-50 rounded-xl border">
// //           <p className="text-gray-500 text-lg">No shop purchases yet</p>
// //         </div>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
// //           {purchases.map((item) => {
// //             const imageUrl = getProductImage(
// //               item.title,
// //               item.image || item.img
// //             );

// //             return (
// //               <div
// //                 key={item._id}
// //                 className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
// //               >
// //                 {imageUrl ? (
// //                   <div className="relative h-44 bg-gray-100">
// //                     <Image
// //                       src={imageUrl}
// //                       alt={item.title}
// //                       fill
// //                       className="object-cover"
// //                     />
// //                   </div>
// //                 ) : (
// //                   <div className="h-44 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
// //                     <span className="text-4xl">🛍️</span>
// //                   </div>
// //                 )}

// //                 <div className="p-5">
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
// //                     {item.title}
// //                   </h3>

// //                   <div className="space-y-2 text-sm">
// //                     <p className="text-gray-600">
// //                       <span className="font-medium text-gray-800">Email:</span>{" "}
// //                       {item.email}
// //                     </p>

// //                     {item.price && (
// //                       <p className="text-amber-600 font-bold text-lg">
// //                         {String(item.price).startsWith("$")
// //                           ? item.price
// //                           : `$${item.price}`}
// //                       </p>
// //                     )}

// //                     {item.createdAt && (
// //                       <p className="text-gray-400 text-xs">
// //                         Purchased:{" "}
// //                         {new Date(item.createdAt).toLocaleDateString()}
// //                       </p>
// //                     )}
// //                   </div>

// //                   <div className="mt-4">
// //                     <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
// //                       Purchased
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }



// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// type ProductType = {
//   _id: string;
//   title: string;
//   image?: string;
//   price?: string | number;
//   description?: string;
//   createdAt?: string;
// };

// export default function AllShopDataPage() {
//   const [products, setProducts] = useState<ProductType[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/api/products");

//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }

//         const data = await response.json();

//         setProducts(data.products || []);
//       } catch (error) {
//         console.error("Failed to load shop data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-[60vh]">
//         <p className="text-muted-foreground">
//           Loading shop data...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 lg:px-6 py-8">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold tracking-tight">
//           All Shop Data
//         </h1>

//         <p className="text-muted-foreground mt-1">
//           All products available in the shop — Total: {products.length}
//         </p>
//       </div>

//       {/* Empty State */}
//       {products.length === 0 ? (
//         <div className="text-center py-16 bg-gray-50 rounded-xl border">
//           <p className="text-gray-500 text-lg">
//             No shop products found
//           </p>
//         </div>
//       ) : (
//         /* Products */
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
//             >
//               {/* Product Image */}
//               {product.image ? (
//                 <div className="relative h-44 bg-gray-100">
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               ) : (
//                 <div className="h-44 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
//                   <span className="text-4xl">🛍️</span>
//                 </div>
//               )}

//               {/* Product Information */}
//               <div className="p-5">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
//                   {product.title}
//                 </h3>

//                 {product.description && (
//                   <p className="text-sm text-gray-500 mb-3 line-clamp-2">
//                     {product.description}
//                   </p>
//                 )}

//                 {/* Price */}
//                 {product.price !== undefined &&
//                   product.price !== null &&
//                   product.price !== "" && (
//                     <p className="text-amber-600 font-bold text-lg">
//                       {String(product.price).startsWith("$")
//                         ? String(product.price)
//                         : `$${product.price}`}
//                     </p>
//                   )}

//                 {/* Created Date */}
//                 {product.createdAt && (
//                   <p className="text-gray-400 text-xs mt-2">
//                     Added:{" "}
//                     {new Date(
//                       product.createdAt
//                     ).toLocaleDateString()}
//                   </p>
//                 )}

//                 {/* Status */}
//                 <div className="mt-4">
//                   <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
//                     Shop Product
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

type ProductType = {
  _id: string;
  title: string;
  image?: string;
  price?: string;
};

export default function AllShopDataPage() {
  const [shopPurchases, setShopPurchases] = useState<PurchaseType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [purchasesRes, productsRes] = await Promise.all([
          fetch("/api/purchases"),
          fetch("/api/products"),
        ]);

        const purchasesData = await purchasesRes.json();
        const productsData = await productsRes.json();

        const allPurchases: PurchaseType[] = purchasesData.purchases || [];
        const allProducts: ProductType[] = productsData.products || [];

        setProducts(allProducts);

        // শুধু যেগুলো products কালেকশনে আছে (Shop data)
        const onlyShop = allPurchases.filter((purchase) =>
          allProducts.some(
            (product) =>
              product.title?.toLowerCase() === purchase.title?.toLowerCase()
          )
        );

        setShopPurchases(onlyShop);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getProductImage = (title: string, purchaseImage?: string) => {
    if (purchaseImage) return purchaseImage;

    const matched = products.find(
      (p) => p.title?.toLowerCase() === title?.toLowerCase()
    );
    return matched?.image || "";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">Loading shop data...</p>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">All Shop Data</h1>
        <p className="text-muted-foreground mt-1">
          Only shop products purchased by users — Total: {shopPurchases.length}
        </p>
      </div>

      {shopPurchases.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl border">
          <p className="text-gray-500 text-lg">No shop purchases yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {shopPurchases.map((item) => {
            const imageUrl = getProductImage(
              item.title,
              item.image || item.img
            );

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
                  <div className="h-44 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                    <span className="text-4xl">🛍️</span>
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
                      <p className="text-amber-600 font-bold text-lg">
                        {String(item.price).startsWith("$")
                          ? item.price
                          : `$${item.price}`}
                      </p>
                    )}

                    {item.createdAt && (
                      <p className="text-gray-400 text-xs">
                        Purchased:{" "}
                        {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    )}
                  </div>

                  <div className="mt-4">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                      Purchased
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
