"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type PackageType = {
  _id?: string;
  title: string;
  desc: string;
  price: string;
  img: string;
};

export default function PackagesPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [packages, setPackages] = useState<PackageType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch("/api/packages");
        const data = await res.json();
        setPackages(data.packages || []);
      } catch (error) {
        console.error("Failed to load packages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handleBookNow = async (pkg: PackageType) => {
    if (!session) {
      router.push("/login");
      return;
    }

    const price = parseInt(pkg.price.replace("$", "").replace(",", ""));

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: pkg.title,
        price: price,
      }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="heading bg-cover bg-center py-16 text-center text-white"
        style={{ backgroundImage: "url('/images/header-bg-2.png')" }}
      >
        <h1 className="text-5xl md:text-6xl font-bold uppercase">Packages</h1>
      </div>

      {/* Packages */}
      <section className="packages py-12 px-4 md:px-8 bg-gray-50">
        <h1 className="heading-title text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
          Top Destinations
        </h1>

        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading packages...</p>
        ) : packages.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No packages found. Please seed the database.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={pkg._id || index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <div className="relative h-56">
                  <Image
                    src={pkg.img}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.desc}</p>
                  <h2 className="text-3xl font-extrabold text-blue-600 mb-5">
                    {pkg.price}
                  </h2>

                  <button
                    onClick={() => handleBookNow(pkg)}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <button className="bg-cyan-700 text-white px-10 py-4 rounded-lg font-bold hover:bg-green-700 transition">
            Explore Nice Travel Journey
          </button>
        </div>
      </section>
    </>
  );
}