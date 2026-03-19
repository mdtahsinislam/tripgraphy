



// // // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\my-products\page.tsx
// // // import React from 'react'

// // // export default function page() {
// // //   return (
// // //     <div>page</div>
// // //   )
// // // }


// // import clientPromise from "@/lib/mongodb";
// // import { getServerSession } from "next-auth";

// // export default async function MyProducts() {

// //   const session = await getServerSession();

// //   const client = await clientPromise;
// //   const db = client.db("tripgraphy");

// //   const purchases = await db
// //     .collection("purchases")
// //     .find({ email: session?.user?.email })
// //     .toArray();

// //   return (
// //     <div className="max-w-6xl mx-auto py-20">

// //       <h1 className="text-3xl font-bold mb-10">
// //         My Purchased Products
// //       </h1>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

// //         {purchases.map((item:any)=>(
// //           <div key={item._id} className="border p-5 rounded-lg shadow">

// //             <img
// //               src={item.image}
// //               className="w-full h-40 object-cover"
// //             />

// //             <h2 className="text-xl font-semibold mt-3">
// //               {item.title}
// //             </h2>

// //             <p className="text-amber-600 font-bold">
// //               ${item.price}
// //             </p>

// //           </div>
// //         ))}

// //       </div>

// //     </div>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";

// export default function MyProducts() {

//   const { data: session } = useSession();
//   const [products, setProducts] = useState<any[]>([]);

//   useEffect(() => {

//     if (!session) return;

//     const loadProducts = async () => {
//       const res = await fetch(`/api/my-products?email=${session.user?.email}`);
//       const data = await res.json();
//       setProducts(data);
//     };

//     loadProducts();

//   }, [session]);

//   return (
//     <div className="max-w-5xl mx-auto py-20">

//       <h1 className="text-3xl font-bold mb-10">
//         My Purchased Products
//       </h1>

//       {products.map((p, i) => (
//         <div key={i} className="p-4 border mb-4 rounded">
//           <h2 className="text-xl font-semibold">{p.title}</h2>
//           <p>${p.price}</p>
//         </div>
//       ))}

//     </div>
//   );
// }



import clientPromise from "@/lib/mongodb";
import { getServerSession } from "next-auth";

export default async function MyProducts() {
  const session = await getServerSession();

  if (!session) {
    return <div>Please login</div>;
  }

  const client = await clientPromise;
  const db = client.db("tripgraphy");

  const products = await db
    .collection("purchases")
    .find({ email: session.user?.email })
    .toArray();

  return (
    <div className="max-w-4xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-8">My Purchased Products</h1>

      {products.map((p: any) => (
        <div
          key={p._id}
          className="border p-4 rounded-lg mb-4 flex justify-between"
        >
          <span>{p.title}</span>
          <span>${p.price}</span>
        </div>
      ))}
    </div>
  );
}