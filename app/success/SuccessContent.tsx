"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessContent() {
  const params = useSearchParams();

  const title = params.get("title");
  const price = params.get("price");

  useEffect(() => {
    async function savePurchase() {
      await fetch("/api/save-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, price }),
      });
    }

    if (title) savePurchase();
  }, [title, price]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-green-600 text-center">
        Payment Successful 🎉 <br />
        Go to see your product
      </h1>
    </div>
  );
}