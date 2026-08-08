


//C:\Web-Development\Codvata\Bismillah\lavel-1\lavel3\tripgraphy\app\tourgide\page.tsx

// import React from 'react'

// function page() {
//   return (
//     <div>page</div>
//   )
// }

// export default page


"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

type UserProfile = {
  name: string;
  email: string;
  phone?: string;
  photo?: string;
  role?: string;
};

export default function TourGuidePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (!session?.user?.email) return;

    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `/api/user/profile?email=${session.user.email}`
        );
        const data = await res.json();

        if (data.user) {
          setProfile(data.user);
        } else {
          setProfile({
            name: session.user.name || "",
            email: session.user.email || "",
            photo: session.user.image || "",
            role: "user",
          });
        }
      } catch (error) {
        console.error(error);
        setProfile({
          name: session.user.name || "",
          email: session.user.email || "",
          photo: session.user.image || "",
          role: "user",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [session, status, router]);

  const handleBecomeTourGuide = async () => {
    if (!session?.user?.email) return;

    setSubmitting(true);

    try {
      const res = await fetch("/api/user/become-tourguide", {
        method: "POST",
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        setProfile((prev) =>
          prev ? { ...prev, role: "tourguide" } : prev
        );
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to become Tour Guide");
    } finally {
      setSubmitting(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load profile</p>
      </div>
    );
  }

  const isAlreadyTourGuide = profile.role === "tourguide";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <ToastContainer position="top-right" autoClose={4000} />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Become a Tour Guide
          </h1>
          <p className="text-gray-500">
            Share your travel knowledge and guide others
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border p-8">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-100 bg-gray-100">
              {profile.photo ? (
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-gray-400">
                  {profile.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>

          {/* Auto-filled Form */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={profile.name}
                readOnly
                className="w-full px-4 py-3 border rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={profile.email}
                readOnly
                className="w-full px-4 py-3 border rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone
              </label>
              <input
                type="text"
                value={profile.phone || "Not provided"}
                readOnly
                className="w-full px-4 py-3 border rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Current Role
              </label>
              <div className="flex items-center gap-3">
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                    isAlreadyTourGuide
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {profile.role?.toUpperCase() || "USER"}
                </span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-10">
            {isAlreadyTourGuide ? (
              <div className="text-center py-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-green-700 font-semibold text-lg">
                  ✅ You are already a Tour Guide!
                </p>
              </div>
            ) : (
              <button
                onClick={handleBecomeTourGuide}
                disabled={submitting}
                className={`w-full py-4 rounded-xl font-bold text-lg transition ${
                  submitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl"
                }`}
              >
                {submitting ? "Processing..." : "Be a Tour Guide"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}