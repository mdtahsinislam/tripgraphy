//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\dashboard\my-package\page.tsx

"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type PackagePurchase = {
  _id: string;
  title: string;
  price: string | number;
  image?: string;
  email: string;
  createdAt: string;
};

export default function MyPackagePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [packages, setPackages] = useState<PackagePurchase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (!session?.user?.email) return;

    const fetchMyPackages = async () => {
      try {
        const res = await fetch(
          `/api/my-packages?email=${session.user.email}`
        );
        const data = await res.json();
        setPackages(data.packages || []);
      } catch (error) {
        console.error("Failed to fetch packages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyPackages();
  }, [session, status, router]);

  if (status === "loading" || loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-lg text-muted-foreground">Loading your packages...</p>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-6 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Packages</h1>
        <p className="text-muted-foreground mt-1">
          All the tour packages you have booked
        </p>
      </div>

      {packages.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-xl border">
          <p className="text-xl text-gray-500 mb-4">No packages booked yet</p>
          <a
            href="/package"
            className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition"
          >
            Browse Packages
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {pkg.image && (
                <div className="relative h-48">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-blue-600">
                    ${pkg.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(pkg.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="text-sm text-green-600 mt-3 font-medium">
                  Booked Successfully
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}