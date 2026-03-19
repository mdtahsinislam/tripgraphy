// // // // export default function SuccessPage() {
// // // //   return (
// // // //     <div className="flex items-center justify-center min-h-screen">
// // // //       <div className="text-center">
// // // //         <h1 className="text-4xl font-bold text-green-600">
// // // //           Payment Successful 🎉
// // // //         </h1>

// // // //         <p className="mt-4 text-lg">
// // // //           Thank you for your purchase.
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";

// // // import { useSearchParams } from "next/navigation";
// // // import { useEffect } from "react";

// // // export default function SuccessPage() {
// // //   const params = useSearchParams();

// // //   const title = params.get("title");
// // //   const price = params.get("price");
// // //   const email = params.get("email");

// // //   useEffect(() => {
// // //     const savePurchase = async () => {
// // //       await fetch("/api/save-product", {
// // //         method: "POST",
// // //         body: JSON.stringify({
// // //           title,
// // //           price,
// // //           email,
// // //         }),
// // //       });
// // //     };

// // //     savePurchase();
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center">
// // //       <h1 className="text-3xl font-bold">
// // //         Payment Successful 🎉
// // //       </h1>
// // //     </div>
// // //   );
// // // }

// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\success\page.tsx

// // "use client";

// // import { useEffect } from "react";
// // import { useSearchParams } from "next/navigation";

// // export default function SuccessPage() {
// //   const params = useSearchParams();

// //   const title = params.get("title");
// //   const price = params.get("price");

// //   useEffect(() => {
// //     async function savePurchase() {
// //       await fetch("/api/save-product", {
// //         method: "POST",
// //         body: JSON.stringify({
// //           title,
// //           price,
// //         }),
// //       });
// //     }

// //     if (title) savePurchase();
// //   }, [title, price]);

// //   return (
// //     <div className="flex items-center justify-center min-h-screen">
// //       <h1 className="text-3xl font-bold text-green-600">
// //         Payment Successful Go to See YOUR OWN PRODUCT🎉
// //       </h1>
// //     </div>
// //   );
// // }


// "use client";

// import { useEffect } from "react";
// import { useSearchParams } from "next/navigation";

// export default function SuccessContent() {
//   const params = useSearchParams();

//   const title = params.get("title");
//   const price = params.get("price");

//   useEffect(() => {
//     async function savePurchase() {
//       await fetch("/api/save-product", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ title, price }),
//       });
//     }

//     if (title) savePurchase();
//   }, [title, price]);

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <h1 className="text-3xl font-bold text-green-600 text-center">
//         Payment Successful 🎉 <br />
//         Go to see your product
//       </h1>
//     </div>
//   );
// }

"use client";

import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}